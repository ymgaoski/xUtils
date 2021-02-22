/**
 * 浅拷贝
 * @param {需要拷贝的对象} target 
 */
export function clone(target){

  // 判断是否是正常对象
  if (typeof(target) === 'object' && target !== null){
    if (Array.isArray(target)){
      return [...target]
    }else{
      return {...target}
    }
  }else{
    return target;
  }
}

/**
 * 浅拷贝
 * @param {需要拷贝的对象} target 
 */
function clone1(target){

  // 判断是否是正常对象
  if (typeof(target) === 'object' && target !== null){
    // 对象容器
    let result = Array.isArray(target) ? [] : {};
    
    for(let key in target){
      // 判断key是否是对象的实例属性，而非原型对象中的属性
      if(target.hasOwnProperty(key)){
        result[key] = target[key];
      }
    }
    return result;
  }else{
    return target;
  }
}


/**
 * 深拷贝，解决了循环引用问题，解决性能问题
 * @param {需要拷贝的对象} target 
 */
export function deepClone(target,map = new Map()){
  
  // 判断是否是正常对象
  if (typeof(target) === 'object' && target !== null){

    // 判断是否有缓存
    let cache = map.get(target);
    if (cache){
      return cache;
    }

    let isArray = Array.isArray(target);

    // 对象容器
    let result = isArray ? [] : {};
4
    // 缓存已经clone过的对象
    map.set(target,result);

    // 性能优化 => 将for in 换成普通 foreach
    if (isArray){
      // 数组遍历
      target.forEach((item,index) => {
        // 递归处理
        result[index] = deepClone(item,map);
      })
    }else{
      // 对象遍历
      Object.keys(target).forEach(key => {
        // 递归处理
        result[key] = deepClone(target[key],map);
      })
    }
    for(let key in target){
      // 判断key是否是对象的实例属性，而非原型对象中的属性
      if(target.hasOwnProperty(key)){
        // 递归处理
        result[key] = deepClone(target[key],map);
      }
    }
    return result;
  }else{
    return target;
  }
}

/**
 * 深拷贝，解决了循环引用问题，for in 性能不够好，会遍历原型对象中的属性
 * @param {需要拷贝的对象} target 
 */
function deepClone2(target,map = new Map()){
  
  // 判断是否是正常对象
  if (typeof(target) === 'object' && target !== null){
    // 判断是否有缓存
    let cache = map.get(target);
    if (cache){
      return cache;
    }

    // 对象容器
    let result = Array.isArray(target) ? [] : {};

    // 缓存已经clone过的对象
    map.set(target,result);

    for(let key in target){
      // 判断key是否是对象的实例属性，而非原型对象中的属性
      if(target.hasOwnProperty(key)){
        // 递归处理
        result[key] = deepClone(target[key],map);
      }
    }
    return result;
  }else{
    return target;
  }
}

/**
 * 深拷贝，当有循环引用问题，会出现死循环，内存异常
 * @param {需要拷贝的对象} target 
 */
function deepClone3(target){

  // 判断是否是正常对象
  if (typeof(target) === 'object' && target !== null){
    // 对象容器
    let result = Array.isArray(target) ? [] : {};
    
    for(let key in target){
      // 判断key是否是对象的实例属性，而非原型对象中的属性
      if(target.hasOwnProperty(key)){
        // 递归处理
        result[key] = deepClone3(target[key]);
      }
    }
    return result;
  }else{
    return target;
  }
}

/**
 * 深拷贝，使用JSON转换，缺点是不能克隆 function，同样不能解决循环引用问题
 * @param {需要拷贝的对象} target 
 */
function deepClone4(target){
  
  // 判断是否是正常对象
  if (typeof(target) === 'object' && target !== null){
    // 使用JSON转换
    return JSON.parse(JSON.stringify(target));
  }else{
    return target;
  }
}