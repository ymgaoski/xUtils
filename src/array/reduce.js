/**
 * 数组汇总
 * @param {数组对象} array 
 * @param {处理汇总函数} callback 
 * @param {默认初始值} defaultVal 
 */
export function reduce(array,callback,defaultVal){

  if (!array || array.length <= 0){
    return;
  }

  let sum;
  let startIndex;

  if (defaultVal !== undefined){
    // 有初始值
    startIndex = 0;
    sum = defaultVal;
  }else{
    // 没有初始值，从索引1开始，把数组第一个值当成初始值
    startIndex = 1;
    // 获取第一个值
    sum = array[0];
  }

  // 遍历处理
  for(let i=startIndex; i < array.length; i++){
    sum = callback(sum,array[i],i);
  }
  return sum;
}