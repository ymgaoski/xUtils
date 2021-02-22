
/**
 * 只有当数组中的所有元素都满足指定条件，才返回 true，否则返回 false
 * @param {数组对象} array 
 * @param {回调处理函数} callback 
 */
export function every(array,callback){
  
  if (!array || array.length <= 0){
    return false;
  }

  for(let i in array){
    if (!callback(array[i])){
      return false;
    }
  }
  
  return true;
}