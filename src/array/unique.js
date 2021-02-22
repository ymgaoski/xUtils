
/**
 * 数组去重，双重循环
 * @param {数组对象} array
 */
export function unique(array){
  let result = [];

  for (let i in array) {
    if (result.indexOf(array[i]) === -1){
      // 不存在才加入到结果集中
      result.push(array[i]);
    }
  }
  return result;
}

/**
 * 数组去重，对象属性缓存
 * @param {数组对象} array 
 */
function unique2(array){

  let result = [];
  let temp = {};
  
  for (let i in array) {
    if (!temp[array[i]]){
      // 不存在才加入到集合中
      temp[array[i]] = true;
      result.push(array[i]);
    }
  }
  return result;
}

/**
 * 数组去重，ES6 Set对象
 * @param {数组对象} array 
 */
function unique3(array){

  return [...new Set(array)];
}
