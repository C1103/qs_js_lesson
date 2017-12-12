// const arr = [1, 2, 3];
// Array.prototype.concat
// 将数组合并起来，不改变原数组
// 返回新数组
// const arr2 = arr.concat();
// arr2[0] = 6;
// arr[1] = 9;
// console.log(arr2);
// console.log(arr);
// arr2[1] = 4;
// console.log(arr);
// var arr = ['old', 1, true, null, undefined];
// var new_arr = arr.concat();
// new_arr[0] = 'new';
// console.log(arr);
// console.log(new_arr);
// 基本的类型

var arr = new Array(6);
// console.log(arr.length);
arr[0] = 'George';
arr[1] = 'John';
arr[2] = 'Thoms';
arr[3] = 'James';
arr[4] = 'Adrew';
arr[5] = 'Martin';
const newArr = arr.slice();
// console.log(newArr);
newArr[0] = '芬芬';
// console.log(arr);
// console.log(newArr);
// console.log(arr.slice(-2, -1));
// js 数组，删除数组项目，并且添加
console.log(arr);
// index
// 数组方法有两派，改变原数组与否
console.log(arr.splice(2, 0, 'Yayo'));
console.log(arr);
// 借用数组concat合并 slice切割 
// 返回新数组的方式，来实现浅拷贝
// console.log(arr.slice(2));