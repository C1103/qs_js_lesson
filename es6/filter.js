var arr = [2, 4, 6, 8, 10, 11];
// var newArr = arr.filter(item => {
//     return item > 5;
// })
// console.log(newArr);
function filterLessThanFive(item) {
    return item > 5;
}

function filterOdd(item) {
    return (item % 2 != 0);
}

function filter(arr, testFunction) {
    var filterArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (testFunction(arr[i])) {
            filterArr.push(arr[i]);
        }
    }
    return filterArr;
}
var newArr = filter(arr, filterOdd);
console.log(newArr);
// Arrar.prototype.filter = function(fn) {
//     var newArr=[];
//     for(var i=0;i<this.length;i++){
//         newArr.push(fu(this[i],i,this))
//     }
// }