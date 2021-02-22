
/**
 * 数组扁平化,递归
 * @param {数组对象} array 
 */
export function flatten(array){

  let list = [];
  
  function find(arr){
    for(let i in arr){
      if (Array.isArray(arr[i])){
        find(arr[i]);
      }else{
        list.push(arr[i]);
      }
    }
  }
  find(array);
  
  return list;
}

/**
 * 数组扁平化,递归 + concat
 * @param {数组对象} array 
 */
function flatten2(array){

  let list = [];
  
  for(let i in array){
    if (Array.isArray(array[i])){
      list = list.concat(flatten2(array[i]));
    }else{
      list.push(array[i]);
    }
  }
  
  return list;
}


/**
 * 数组扁平化,some + concat
 * @param {数组对象} array 
 */
function flatten3(array){

  // 先将数组展开
  let list = [...array];
  
  // some ：只要满足条件就返回 true
  while(list.some(item => Array.isArray(item))){
    // 精髓，对象与数组是可以拼接的
    // concat(1,2,[3,[4,5]])
    // concat(1,2,3,[4,5])
    // concat(1,2,3,4,5)
    list = [].concat(...list);
  }
  
  return list;
}