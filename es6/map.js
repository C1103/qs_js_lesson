//  如何手动实现
//  Array.prototype.map
var originArr = [1, 2, 3, 4, 5];
// var newArr = originArr.map((item) => {
//     return item * 3;
// })
// console.log(newArr);
// 手动实现 es6 -> es5 手写
// 闭包，高阶函数，作用域
// var newArr = [];
// for (var i = 0, len = originArr.length; i < len; i++) {
//     newArr.push(originArr[i] * 3);
// }
// // 顺序流程化具象解决问题
// console.log(newArr);

// step2 封装函数
// 一个数组每一项都3time，并且返回新的数组
// function multiplyByThree(arr) {
//     var newArr = [];
//     for (var i = 0, len = arr.length; i < len; i++) {
//         newArr.push(arr[i] * 3);
//     }
//     return newArr;
// }
// console.log(multiplyByThree(originArr));

// //step3 将具象的东西拿掉
// function multiplyByN(arr, n) {
//     var newArr = [];
//     for (var i = 0, len = arr.length; i < len; i++) {
//         newArr.push(arr[i] * n);
//     }
//     return newArr;
// }
// console.log(multiplyByN(originArr, 7));
// 数组 字符串数组，小写变大写
// function makeUpperCase(item) {
//     return item.toUpperCase();
// }

// function timeThree(item) {
//     return item * 3;
// }
// // 高阶函数 函数作为参数，返回值
// function map(arr, fn) {
//     // 函数内部 分成几个函数 每个函数只做一件事
//     var newArr = [];
//     for (var i = 0, len = arr.length; i < len; i++) {
//         newArr.push(fn(arr[i]));
//     }
//     return newArr;
// }
// console.log(map(originArr, timeThree));
// console.log(map(['a', 'b'], makeUpperCase));

Array.prototype.map = function(func) {
    var newArr = [];
    // console.log(this);
    for (var i = 0; i < this.length; i++) {
        newArr.push(func(this[i], i, this));
    }
    return newArr;
}
var newArr = originArr.map(function(item, index, arr) {
    return item * index;
});
console.log(newArr);