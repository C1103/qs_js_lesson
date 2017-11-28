// 类式继承 function Person   new  原型链式继承
// 继承 
// 人类
var Person = {
    name: 'default name',
    getName: function() {
        return this.name;
    }
}

// 原型式继承
// Person object js里没有类 只有原型对象
function clone(obj) {
    // 闭包
    function F() {}
    // obj 原型链对象，奉献，让基于它的对象，来它的链上查找方法和属性
    F.prototype = obj;
    return new F();
}
var nzh = new clone(Person);
nzh.name = '倪子红';
// 先查找自身属性  如果没有再去原型链上去找
console.log(nzh.getName());
// 人类
// 作者也是人 Books getBooks
var Author = clone(Person);
Author.books = ['a', 'b', 'c'];
Author.getBooks = function() {
    return this.books.join(',');
}

var ft = clone(Author);
ft.name = '冯唐';
ft.books = ['春风十里不如你', '万物生长', '北京北京'];
console.log(ft.getBooks());
// js 实现 私有变量，静态方法 闭包

// var nzh = Person;
// nzh.name = '倪子红';
// console.log(nzh.getName());

// var gf = Person;
// // 引用式赋值
// console.log(gf.name);


// 构造函数  属于类  字母大写  执行时前面加new构造一个实例
// 对象字面量 JSON 
// 类 由属性和方法构成
// 复杂数据类型     属性和方法