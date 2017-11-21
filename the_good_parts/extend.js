// 继承
function extend(subClass, superClass) {
    // 手术 prototype
    // prototype 指向
    // 类F 函数就是对象，类
    var F = function() {}
    F.prototype = superClass.prototype;
    console.log(F.prototype);
    // js 原型链prototype 对象会沿着原型链一直去查找，
    // 自身对象是否有getName方法，
    // 没有就会沿着这根链找其他的对象是否有方法
    // console.log(subClass.prototype.constructor);
    subClass.prototype = new F();
    console.log(subClass.prototype.constructor);
    // 构造函数 subClass 
    // constructor属性，对象完全是由prototype来指挥

    subClass.prototype.constructor = subClass;
    console.log(subClass.prototype);
    // 静态属性
    subClass.superclass = superClass.prototype;
}
// 人类
// Person 既是函数，又是构造函数
// 函数是对象的一种，即可执行的对象
// 一等对象 上天入地
// 表达式 var a = function(){}
// 高阶函数：形参 function func(cb) {cb();}
// 返回值 返回一个函数
// 基类
function Person(name) {
    this.name = name;
}

Person.prototype.getName = function() {
    return this.name;
}

// var lc = new Person('loc');
// console.log(lc.getName());
// 子类
function Author(name, books) {
    // 借 
    // author类得到属性设置
    // this -> author 对象指向
    Person.call(this, name);
    this.books = books;
    // this.name = name;
    // this.artcile = artcile;
}
// Author.prototype.getName = function() {
//     return Person.prototype.getName.call(this);
// }
// Person prototype 方法，它都得有
// Person 的构造函数不能被改掉
extend(Author, Person);
Author.prototype.getBooks = function() {
    return this.books.join(',');
}
var xz = new Author('loci', ['我知道的JS', 'JS红学', '小妮子模式']);
console.log(xz.getName());
console.log(xz.getBooks());