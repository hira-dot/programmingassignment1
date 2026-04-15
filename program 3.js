// program 3 letter frequency + first repeat
// hira shakeel
const readlineSync = require('readline-sync');
let str = readlineSync.question("Enter a string: ").tolowercase();
let freq = {}; let firstRepeat = ""; // storage
for (let i = 0; i < str.length; i++) {
    let cha = str[i] // loop thru string
    if (cha >= 'a' && cha <= 'z') // include letters a-z
    if (freq[cha] === undefined) {
        freq[cha] = 1;
    } else {
        freq[cha]++; // counting letters
        if(freq[cha] === 2 && firstRepeat === ""){
            firstRepeat = cha; // identify the 1st repeat
console.log("Letter Frequencies:");
for(let key in freq) {
    console.log(key + ": " + freq[key]); // frequency table 
console.log("First Repeated Letter:", firstRepeat); // prints 1st repeat
}
        
        }
    }
}
