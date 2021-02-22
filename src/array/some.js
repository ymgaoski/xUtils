
/**
 * 当数组中的只要有一个元素满足指定条件，就返回 true，否则返回 false
 * @param {数组对象} array 
 * @param {回调处理函数} callback 
 */
export function some(array,callback){
  
  if (!array || array.length <= 0){
    return false;
  }

  for(let i in array){
    if (callback(array[i])){
      return true;
    }
  }
  
  return false;
}