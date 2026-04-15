// program 1: detect prime gaps
// hira shakeel 
const readlineSync = require('readline-sync');
let n = Number(readlineSync.question("enter a number (<=1000): "));
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++){
        if (num % i === 0) {
            return false;
        }
    }
    return true; // verify prime
}
let primes = [];
for (let i = 2; i <= n; i++) {
    if (isPrime(i)){
        primes.push(i); //collect primes
    }
}
let gaps = [];
for (let i = 1; i < primes.length; i++){
    gaps.push(primes[i] - primes[i - 1]); //identify gaps
}
let maxGap = gaps[0];
let index = 0;
for (let i = 0; i < gaps.length; i++){
    if(gaps[i] > maxGap) {
        maxGap = gaps[i];
        index = i; // biggest gap
    }
}
let sum = 0;

for(let i = 0; i < gaps.length; i++){
    sum += gaps[i];
}
let avg = sum / gaps.length; //avg gap
console.log("program displays primes up to " + n + ": " + JSON.stringify(primes));
console.log("the largest gap is " + maxGap + ", between " + primes[index] + " and " + primes[index + 1]);
console.log("the average gap is " + avg.toFixed(2)); //output
