/**
 * ajaj请求
 * @param {url,method,header,params,data} 参数对象 
 */
export function ajax({url,method,header,params,data}){

  // 请求类型全按大写处理，默认为GET
  method = !method ? 'GET' : method.toUpperCase();

  return new Promise((resolve,reject) => {

    // 1. 创建请求对象
    let xhr;
    if (window.XMLHttpRequest){
      xhr = new XMLHttpRequest();
    }else if(window.ActiveXObject){
      // IE5 and IE6
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if (!xhr){
      alert("Your browser does not support XMLHTTP.");
      return;
    }

    // 将params转换为 name=123&age=23 的字符串
    let paramStr='';
    if (params){
      for (const key in params) {
        paramStr += `${key}=${params[key]}&`;
      }

      // 截取掉最后那个&符号
      paramStr = paramStr.slice(0,-1);
    }


    // 2. 打开
    if (paramStr){
      xhr.open(method,url+'?'+paramStr);
    }else{
      xhr.open(method,url);
    }

    // 设置请求头部信息
    if (header){
      for (const key in header) {
        xhr.setRequestHeader(key,header[key]);
      }
    }

    // 3. 发送
    if (['POST','GET','PUT','DELETE'].indexOf(method) > -1 && data){
      // 设置mine类型
      xhr.setRequestHeader('Content-type','application/json');
      // 设置请求体
      xhr.send(JSON.stringify(data));
    }else{
      xhr.send();
    }

    // 设置响应结果的类型为 JSON
    xhr.responseType = 'json';

    // 4. 监听回调
    xhr.onreadystatechange = function(){
      // 4为完全接收状态
      if (xhr.readyState === 4){
        if (xhr.status >= 200 && xhr.status < 300){
          // 请求成功
          // resolve({
          //   status: xhr.status,
          //   message: xhr.statusText,
          //   data: xhr.response
          // })

          resolve(xhr.response);
        }else{
          // 请求失败
          reject(new Error('请求失败, 状态码为 ' + xhr.status));
        }
      }
    }
  })
}

/**
 * GET请求
 * @param {header,params,data} 参数对象 
 */
ajax.get = function(url,{header,params,data}){
  return ajax({
      url,
      method: 'GET',
      header,
      params,
      data
    })
}

/**
 * POST请求
 * @param {header,params,data} 参数对象 
 */
ajax.post = function(url,{header,params,data}){
  return ajax({
      url,
      method: 'POST',
      header,
      params,
      data
    })
}

/**
 * PUT请求
 * @param {header,params,data} 参数对象 
 */
ajax.put = function(url,{header,params,data}){
  return ajax({
      url,
      method: 'PUT',
      header,
      params,
      data
    })
}

/**
 * DELETE请求
 * @param {header,params,data} 参数对象 
 */
ajax.delete = function(url,{header,params,data}){
  return ajax({
      url,
      method: 'DELETE',
      header,
      params,
      data
    })
}