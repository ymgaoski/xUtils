/**
 * 判断一个对象是否是指定对象实例
 * @param {用于判断的对象} obj 
 * @param {用于比较的构造函数} fn 
 */
export function myInstanceOf(obj,fn){

  const disPrototype = fn.prototype;

  let proto = obj.__proto__;
  // 循环查找上级的 __proto__ 比较
  while(proto){
    if (proto === disPrototype){
      return true;
    }
    proto = proto.__proto__;
  }
  return false;
}