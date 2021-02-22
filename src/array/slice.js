/**
 * 数组切片，截取从指定开始索引(包括该索引)到指定结束索引(不包括该索引)的数据，返回新数组
 * @param {数组对象} array 
 * @param {开始索引,不填默认为 0} startIndex 
 * @param {结束索引,不填默认为数组长度} endIndex 
 */
export function slice(array,startIndex,endIndex){
  
  if (!array || array.length <= 0){
    return [];
  }

  // startIndex为空时，默认为0
  if (startIndex === undefined){
    startIndex = 0;
  }
  if (startIndex > array.length){
    return [];
  }

  // endIndex为空时,或者end小于start，默认为数组的长度
  if (endIndex === undefined || endIndex < startIndex){
    endIndex = array.length;
  }
  if (endIndex > array.length){
    return [];
  }

  // 负数的处理
  if (startIndex < 0){
    startIndex = array.length + startIndex;
  }
  if (endIndex < 0){
    endIndex = array.length + endIndex;
  }

  let result = [];
  
  for(let i in array){
    if (i >= startIndex && i < endIndex){
      result.push(array[i]);
    }
  }

  return result;
}