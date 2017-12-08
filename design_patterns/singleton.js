// function Xiaocai(name, haircat) {
//     this.name = name;
//     this.haircat = haircat;
// }

// Xiaocai.prototype.hobbies = function() {
//     console.log('不管怎样，你开心就好');
// }

// var xc = new Xiaocai('小蔡', '飞刘海');
// var xc2 = new Xiaocai('小蔡', '爆炸头');
// xc.hobbies();
// xc2.hobbies();

// 要找什么的小蔡，小蔡都是那一个小蔡
// 如何在多次new 只得到一个对象 单例
// class new

var Singleton = function(name) {
    this.name = name;
    // instanceof 实例
    this.instance = null;
};
// static 方法，静态方法，不需要new
// 可以在类上调用
// 废掉constructor new
Singleton.getInstance = function(name) {
    if (!this.instance) {
        this.instance = new Singleton(name);
    }

    return this.instance;
}

var a = Singleton.getInstance('scen1');
var b = Singleton.getInstance('scen3');
console.log(a);
console.log(b);
console.log(a === b);
// a === b 引用式赋值
class Cache {
    static getInstance() {
        if (!Cache.instance) {
            Cache.instance = new Cache();
        }
        return Cache.instance;
    }
}

var cache = Cache.getInstance();