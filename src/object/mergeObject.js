
/**
 * 对象合并,当有属性冲突时，后面的不覆盖前面的属性
 * @param  {...多个对象} args 
 */
export function mergeObject(...args){

  if (!args || args.length <= 1){
    return args;
  }

  let firstObj = args[0];

  for(let i=1; i < args.length; i++){
    for(let k in args[i]){
      // 是否覆盖前面对象中的属性
      if (firstObj.hasOwnProperty(k)){
        continue;
      }
      firstObj[k] = args[i][k];
    }
  }

  return firstObj;
}