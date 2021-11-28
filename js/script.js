'use strict';

function getSum(num = 0) {

    return function (num2) {
        return num += num2;
    };
}

let sum = getSum();
console.log(sum(5));
console.log(sum(2));
console.log(sum(3));