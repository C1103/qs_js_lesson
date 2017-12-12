const add = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    // 容错性
    // throw new Error('一定要数字相加');
    // return NaN;
};

module.exports = { add }

// console.log(isNaN(add('l', 'c')));