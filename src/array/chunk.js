/**
 * 数组分区, 数值 表示按多少个元素一组
 * @param {数组对象} array 
 * @param {分区大小，每个分区多少个元素} size 
 */
export function chunk(array,size){
  
  if (!array || array.length <= 0){
    return [];
  }

  if (size == undefined){
    size = 1;
  }

  let result = [];
  let currIndex = 0;
  for (let i in array){
    // 第一次遍历，或者 当前索引取模分组个数为0，为result创建一个新的子数组
    if (result.length == 0 || i % size == 0){
      result.push([array[i]]);
      currIndex++;
    }else{
      result[currIndex-1].push(array[i]);
    }
  }

  return result;
}