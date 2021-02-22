/**
 * 获取两个数组差值，返回新数组
 * @param {数组1} array1 
 * @param {数组2} array2 
 */
export function deffrence(array1,array2){

  let result = [];

  // 遍历第一个数组，查找差值
  for(let i in array1){
    let isExist = false;
    for(let k in array2){
      if (array1[i] === array2[k]){
        isExist = true;
        break;
      }
    }

    if(!isExist){
      result.push(array1[i]);
    }
  }

  // 遍历第二个数组，查找差值
  for(let i in array2){
    let isExist = false;
    for(let k in array1){
      if (array2[i] === array1[k]){
        isExist = true;
        break;
      }
    }

    if(!isExist){
      result.push(array2[i]);
    }
  }

  return result;
}
