
/**
 * 数组过滤,返回过滤后的新数组
 * @param {数组对象} array 
 * @param {过滤回调函数} callback 
 */
export function filter(array,callback){
  
  let result = [];
  array.forEach(item => {
    if(callback(item)){
      result.push(item);
    }
  });

  return result;
}