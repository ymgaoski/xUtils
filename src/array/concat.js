
/**
 * 数组拼接,只对第一层的数组有效
 * @param {数组参数} array 
 * @param  {...多个参数} args 
 */
export function concat(array,...args){
  // 新数组
  let result = [];

  // 先将原始数组加入到新数组中
  array.forEach(item => {
    result.push(item);
  })

  // 再将多个参数加入到新数组中
  args.forEach(item => {
    
    if (Array.isArray(item)){
      item.forEach(childItem => {
        result.push(childItem);
      })
    }else{
      result.push(item);
    }

  })

  return result;
}
