/**
 * 数组映射,返回一个由回调函数的返回值组成的新数组
 * @param {数组对象} array 
 * @param {处理回调函数} fn 
 */
export function map(array,fn){
  let list = [];
  for (let i in array) {
    const result = fn(array[i],i)
    list.push(result);
  }
  return list;
}