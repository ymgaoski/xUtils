/**
 * 防抖，当一个函数在不断执行时，在指定间隔内，只有最后一次生效
 * @param {回调函数} fn 
 * @param {等待间隔，默认1000毫秒} wait 
 */
export function debounce(fn,wait=1000){
  let timeId;

  return function(e){

    // 上次执行还未完成，就先取消上次的执行
    if (timeId){
      clearTimeout(timeId);
    }

    // 开启定时器，指定时间后执行
    timeId = setTimeout(() => {
      // 回调
      fn.call(this,e);

      // 置空定时器ID
      timeId = null;
    }, wait);
  }
}