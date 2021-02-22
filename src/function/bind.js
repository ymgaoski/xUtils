import {call} from './call';

/**
 * 调用函数并设置函数中this为指定对象，多个参数需要传多个形参,返回一个函数并没有执行
 * @param {调用的函数} fn 
 * @param {this指向对象} obj 
 * @param  {...参数} args 
 */
export function bind(fn,obj,...args){
  // 返回一个函数
  return function (...args2){
    // 使用call实现调用
    return call(fn,obj,...args,...args2);
  }
}