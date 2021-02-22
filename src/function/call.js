/**
 * 调用函数并设置函数中this为指定对象，多个参数需要传多个形参
 * @param {调用的函数} fn 
 * @param {this指向对象} obj 
 * @param  {...参数} args 
 */
export function call(fn,obj,...args){

  // 当obj为空时，默认设置到全局对象中（官方定义）
  if (obj === null || obj === undefined){
    // JS中全局对象是 window, node.js中为 global
    // ES11中新增了一个 gloabalThis 自动识别当前全局对象
    obj = globalThis;
  }

  // 使用临时变量保存函数
  obj.temp = fn;
  // 使用 obj 去调用该函数方法，此时函数中的this就是 obj 对象了
  const result = obj.temp(...args);
  // 删除临时变量
  delete obj.temp;

  return result;
}