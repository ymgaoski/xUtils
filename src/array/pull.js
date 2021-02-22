/**
 * 删除数组中的指定某些元素，原数组会改变
 * @param {数组对象} array 
 * @param  {...多个元素参数} args 
 */
export function pull(array,...args){

  for(let i in args){
    let index = array.indexOf(args[i]);
    if (index > -1){
      // 存在，删除
      array.splice(index,1);
    }
  }
}

/**
 * 删除数组中的指定某些元素，原数组会改变
 * @param {数组对象} array 
 * @param  {需要删除的元素数组} deleteArray 
 */
export function pullAll(array,deleteArray){

  for(let i in deleteArray){
    let index = array.indexOf(deleteArray[i]);
    if (index > -1){
      // 存在，删除
      array.splice(index,1);
    }
  }
}