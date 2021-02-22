
/**
 * 创建对象实例
 * @param {对象构造函数} fn 
 * @param  {...构造函数参数} args 
 */
export function newInstance(fn,...args){

  // 1.创建对象
  let obj = {};

  // 2.调用构造函数，并设置this指向到该对象
  fn.call(obj,...args);

  // 3.修复原型对象指向
  obj.__proto__ = fn.prototype;

  // 4.返回新对象
  return obj;
}