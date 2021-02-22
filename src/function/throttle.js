/**
 * 函数节流，实现在连续触发下，只在指定时间间隔内触发
 * @param {回调函数} fn 
 * @param {最小执行间隔} interval 
 */
export function throttle(fn,interval){
  // 记录上次点击的时间
  let start = 0;

  // 返回一个函数，可使用事件绑定
  return function(e){
    // 获取当前时间
    const now = Date.now();
    // 当前时间 - 上次点击时间 >= 指定间隔时间 才触发回调
    if (now - start >= interval){
      start = now;
      return fn.call(this,e);
    }
  }
}