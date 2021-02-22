
/**
 * 找到第一个满足条件的元素索引，找不到返回 -1
 * @param {数组对象} array 
 * @param {回调处理函数} callback 
 */
export function findIndex(array,callback){

  for(let i in array){
    if (callback(array[i])){
      return i;
    }
  }

  return -1;
}