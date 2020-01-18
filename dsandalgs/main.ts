//f(x) is O(g(x)) if f(x) is <= cg(x) when x >= x0
function reverseString(str: string): string {
    const arr: string[] = str.split("");
    for  (let i = 0; i < Math.floor(str.length / 2); i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr.join("");
}

function sumToN(n: number): number {
    let sum: number = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function sumToNConstant(n: number): number {
    return n*(n+1) / 2;
}
const str: string = "This is a test";
console.log(reverseString(str));
console.log(sumToN(10), sumToNConstant(10));