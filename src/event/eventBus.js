export const eventBus = {
  callbacks: {}
};

// 绑定事件
eventBus.on = function(type,callback){

  if (!this.callbacks[type]){
    this.callbacks[type] = [];
  }
  this.callbacks[type].push(callback);
}

// 解绑事件
eventBus.off = function(type){

  if (type){
    if (this.callbacks[type]){
      delete this.callbacks[type];
    }
  }else{
    // 清空所有
    this.callbacks = {};
  }
}

// 触发事件
eventBus.emit = function(type,params){
  
  this.callbacks[type] && this.callbacks[type].forEach(callback => {
    callback(params);
  })
}
