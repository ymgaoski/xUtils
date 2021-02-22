
/**
 * 数组查找，返回数组中满足提供条件的第一个元素值
 * @param {数组对象} array 
 * @param {回调函数} callback 
 */
export function find(array,callback){

  for (let i in array) {
    if (callback(array[i])){
      return array[i];
    }
  }
  return undefined;
}