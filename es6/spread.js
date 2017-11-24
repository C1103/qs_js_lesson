// 食品小店 pizza
// const 定义常量 es6先考虑const  let（安全）  var（基本不用）
// const定义的常量值可变，类型不能变
// constant variable
// const name = 'lc';
// name = '松松';
const featured = ['Deep Dish', 'Peperoni', 'Hawaiian'];
featured.push('芝士');
// console.log(featured);
// featured = { 'haha': '123' };
const specialty = ['Meatzza', 'Spicy Mama', 'Marghrita'];
const pizzas = [...featured, 'veg', ...specialty];
console.log(pizzas);

const fridayPizzas = [...pizzas];