'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// 食品小店 pizza
// const 定义常量 es6先考虑const  let（安全）  var（基本不用）
// const定义的常量值可变，类型不能变
// constant variable
// const name = 'lc';
// name = '松松';
var featured = ['Deep Dish', 'Peperoni', 'Hawaiian'];
featured.push('芝士');
// console.log(featured);
// featured = { 'haha': '123' };
var specialty = ['Meatzza', 'Spicy Mama', 'Marghrita'];
var pizzas = [].concat(featured, ['veg'], specialty);
console.log(pizzas);

var fridayPizzas = [].concat(_toConsumableArray(pizzas));
