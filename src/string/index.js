
/**
 * 字符串反转
 * @param {需要反转的字符串} str 
 */
export function reverseString(str){

  // 直接反序遍历
  let result = [];
  
  for(let i=str.length;i >= 0; i--){
    result.push(str[i]);
  }

  return result.join('');
}

/**
 * 字符串反转
 * @param {需要反转的字符串} str 
 */
function reverseString2(str){

  // 使用栈特性
  let result = [];
  
  let array = str.split('');
  let count = array.length;
  for(let i=0; i<count;i++){
    result.push(array.pop());
  }
  
  return result.join('');
}

/**
 * 字符串反转
 * @param {需要反转的字符串} str 
 */
function reverseString3(str){

  // 使用栈特性
  let result = str.split('');
  // 数组反转
  result.reverse();

  return result.join('');
}

/**
 * 判断字符串是否是回文
 * @param {需要判断的字符串} str 
 */
export function loopString(str){

 // 回文有反转后值还是一样的特性
 return reverseString(str) == str;
}

/**
 * 判断字符串是否是回文
 * @param {需要判断的字符串} str 
 */
function loopString2(str){

  // 复杂处理
  let first,last;

  if (str.length % 2 == 0){
    // 偶数
    first = str.substring(0,str.length / 2);
    last = str.substring(str.length / 2);
  }else{
    // 奇数,过滤中间那个字符
    first = str.substring(0,Math.floor(str.length / 2));
    last = str.substring(Math.floor(str.length / 2) + 1);
  }

  if (reverseString(last) == first){
    return true;
  }

  return false;
}

/**
 * 字符串截断
 * @param {需要处理的字符串} str 
 * @param {最长位数} size 
 */
export function truncate(str, size){

  return str.slice(0,size) + '...';
}