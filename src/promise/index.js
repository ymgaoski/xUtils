console.log('准备自定义Promise');

/**
 * 模拟Promise
 * @param {执行表达式} executor
 */
export function Promise(executor) {
  const that = this;
  
  console.log('自定义Promise');

  // 属性初始化
  this.promiseStatus = "pending"; // pending、rejected、fulfilled (resolved)
  this.promiseResult = null;
  // 回调队列
  this.callbacks = [];

  // 成功处理
  function resolveCall(data) {
    if (that.promiseStatus !== "pending") {
      return;
    }

    that.promiseStatus = "fulfilled";
    that.promiseResult = data;

    // 执行成功回调
    // then里面的执行都是异步的
    setTimeout(() => {
      that.callbacks.forEach((item) => {
        item.onResolved(data);
      });
    }, 0);
  }

  // 失败处理
  function rejectCall(data) {
    if (that.promiseStatus !== "pending") {
      return;
    }

    that.promiseStatus = "rejected";
    that.promiseResult = data;

    // 执行失败回调
    // then里面的执行都是异步的
    setTimeout(() => {
      that.callbacks.forEach((item) => {
        item.onRejected(data);
      });
    }, 0);
  }

  try {
    // 同步执行
    executor(resolveCall, rejectCall);
  } catch (e) {
    // 捕获异常
    rejectCall(e);
  }
}

// then方法
Promise.prototype.then = function (onResolved, onRejected) {
  const that = this;

  // 默认参数
  if (typeof onResolved !== "function") {
    onResolved = (data) => data;
  }
  if (typeof onRejected !== "function") {
    onRejected = function (data) {
      throw data;
    };
  }

  // 返回Promise对象
  return new Promise((resolve, reject) => {
    // 处理回调函数
    function callback(callFn) {
      // then 里面的执行都是异步的
      setTimeout(() => {
        try {
          // 执行并返回结果,传入的参数需要是上面的Promise的结果，从而实现数据一直往后传递
          const result = callFn(that.promiseResult);
          if (result instanceof Promise) {
            // Promise对象，需要根据里面结果决定当前Promise结果
            result.then(
              (v) => {
                // 它成功，我也成功
                resolve(v);
              },
              (j) => {
                // 它失败，我也失败
                reject(j);
              }
            );
          } else {
            // 其它对象
            resolve(result);
          }
        } catch (e) {
          // 捕获异常
          reject(e);
        }
      }, 0);
    }

    // 成功 - 同步执行
    if (this.promiseStatus === "fulfilled") {
      // 执行并返回结果,传入的参数需要是上面的Promise的结果，从而实现数据一直往后传递
      callback(onResolved);
    }

    // 失败 - 同步执行
    if (this.promiseStatus === "rejected") {
      callback(onRejected);
    }

    // 未决定 - 异步执行
    if (this.promiseStatus === "pending") {
      // 加入回调队列
      this.callbacks.push({
        onResolved: function () {
          callback(onResolved);
        },
        onRejected: function () {
          callback(onRejected);
        },
      });
    }
  });
};

// catch方法
Promise.prototype.catch = function (onRejected) {
  // 直接调用 then方法
  // catch其实就是对 reject 回调的封装
  return this.then(undefined, onRejected);
};

// resolve方法
Promise.resolve = function (data) {
  return new Promise((resolve, reject) => {
    if (data instanceof Promise) {
      // Promise对象
      data.then(
        (v) => {
          resolve(v);
        },
        (j) => {
          reject(j);
        }
      );
    } else {
      // 其它对象
      resolve(data);
    }
  });
};

// reject方法
Promise.reject = function (data) {
  return new Promise((resolve, reject) => {
    if (data instanceof Promise) {
      // Promise对象,无论成功还是失败，都返回 reject
      data.then(
        (v) => {
          reject(v);
        },
        (j) => {
          reject(j);
        }
      );
    } else {
      // 其它对象
      reject(data);
    }
  });
};

// all方法，所有执行成功
Promise.all = function (promises) {
  return new Promise((reslove, reject) => {
    // 记录成功次数
    let count = 0;
    // 记录每次then成功后的数据
    let results = [];
    for (let i = 0; i < promises.length; i++) {
      // 执行后的处理
      promises[i].then(
        (value) => {
          count++;
          results[i] = value;

          // 全部成功
          if (count === promises.length) {
            reslove(results);
          }
        },
        (error) => {
          reject(error);
        }
      );
    }
  });
};

// race方法，返回第一个最先有执行结果的值
Promise.race = function (promises) {
  return new Promise((reslove, reject) => {
    for (let i = 0; i < promises.length; i++) {
      // 执行后的处理
      promises[i].then(
        (value) => {
          reslove(value);
        },
        (error) => {
          reject(error);
        }
      );
    }
  });
};
