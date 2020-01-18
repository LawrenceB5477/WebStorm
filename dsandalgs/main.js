"use strict";
//f(x) is O(g(x)) if f(x) is <= cg(x) when x >= x0
function reverseString(str) {
    const arr = str.split("");
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr.join("");
}
function sumToN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
function sumToNConstant(n) {
    return n * (n + 1) / 2;
}
const str = "This is a test";
console.log(reverseString(str));
console.log(sumToN(10), sumToNConstant(10));
