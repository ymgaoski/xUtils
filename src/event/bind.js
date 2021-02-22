/**
 * 事件绑定
 * @param {需要绑定的绑定元素对象或元素选择表达式} el 
 * @param {事件类型} type 
 * @param {事件回调} fn 
 * @param {需要绑定的代理子元素} selector 
 */
export function addEventListener(el,type,fn,selector){

  if (typeof el === 'string'){
    el = document.querySelector(el);
  }

  if (!selector){
    // 直接绑定el元素
    el.addEventListener(type,fn);
  }else{
    // 需要绑定代理子元素
    el.addEventListener(type,function(e){
      let target = e.target;
      if (target.matches(selector)){
        // 元素匹配，触发事件回调
        fn.call(target,e);
      }
    });
  }
}