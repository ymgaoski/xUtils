/**
 * 调用函数并设置函数中this为指定对象，传入参数为数组类型
 * @param {调用的函数} fn 
 * @param {this指向对象} obj 
 * @param  {数组参数} args 
 */
export function apply(fn,obj,args){

  // 当obj为空时，默认设置到全局对象中（官方定义）
  if (obj === null || obj === undefined){
    // JS中全局对象是 window, node.js中为 global
    // ES11中新增了一个 gloabalThis 自动识别当前全局对象
    obj = globalThis;
  }

  // 保存临时变量
  obj.temp = fn;
  // 将数组参数展开
  const result = obj.temp(...args);
  // 删除临时变量
  delete obj.temp;

  return result;
}