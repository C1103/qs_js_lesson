// js 全局变量 js bad parts
// 减少空间污染
const Song = {
  // es6 
  // trim:function() {}
  trim(str) {
    // trim 有兼容性
    // /regExp对象/ + 出现一次或多次
    // 贪婪匹配
    return str.replace(/\s/g,"");
  }
};
const strHello = "Hello Baidu!";
console.log(strHello.replace('Baidu','Google'));
console.log(Song.trim("   mel ody  "));
// 立即执行函数妙用，对象封装。
// 方便的提供私有属性或方法
const user = (function() {
  // return undefined
  let _name = 'sven', //私有变量
  _age = 19;
  // 闭包的魔法
  return {
    // 形成闭包 closure 函数运行时的上下文环境
    getUserInfo:function() {
      return _name + ',年方' + _age;
    }
  }
})();
// 立即执行函数已经运行,但是它的内部返回，
// 可以在任何时刻被执行
// 上下文环境 context
// 立即函数被执行 闭包函数(白雪公主)
// 被定义(毒死),引用变量，函数都可以被调用
// 在闭包的夹层里的变量得永生
console.log(user.getUserInfo());
// Teel sayHello hello,word
// (function(global){
//   global.Teel = {
//     sayHello:function(){
//     console.log("hello,world");
//     }
//   }
// })(window);
