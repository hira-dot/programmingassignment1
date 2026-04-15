// program 2: fibonnaci filter
// hira shakeel
const readlineSync = require('readline');
let n = Number(readlineSync.question("Enter number of Fibonacci terms to generate:")) // input
let fib = [0,1] // defining fibonacci seq
for (let i = 2; i < n; i++){
    fib[i] = fib[i-1] + fib[i-2] // formula loop
console.log("full sequence:", fib.slice(0,n));
let odds = [];
for (let i = 0; i < n; i++){
    if (fib[i] % 2 !== 0) {
        odds.push(fib[i]); // filter odd # via simple loop
        console.log("odd fibonacci numbers:", odds); // print odds #
    }
    }
}
