// program 4: broken code debugger
// hira shakeel
const readlineSync = require('readline-sync');
let start = Number(readlineSync.question("enter start number:")); // input must be a # instead of a string
let end = Number(readlineSync.question("enter end number:")); // see above
let count = 0;
for (let i = start; i <= end; i++) {
    if (i % 2 == 0) { // should be % modulus operator instead of / div. operator
        count += 1; // former was setting the count = to 1, needs to + 1 ( count = count + 1 )
    console.log("even numbers between" + start + " and " + end + ":" + count);
    }
    }
