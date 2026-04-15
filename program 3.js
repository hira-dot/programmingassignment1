// program 3 letter frequency + first repeat
// hira shakeel
const readlineSync = require('readline');
let str = readlineSync.question("Enter a string: ").tolowercase();
let freq = {}; let firstRepeat = ""; // storage
for (let i = 0; i < str.length; i++) {
    let char = str[i] // loop thru string
    if (char >= 'a' && char <= 'z') // include letters a-z
    if (freq[char] === undefined) {
        freq[char] = 1;
    } else {
        freq[char]++; // counting letters
        if(freq[char] === 2 && firstRepeat === ""){
            firstRepeat = char; // identify the 1st repeat
console.log("Letter Frequencies:");
for(let key in freq) {
    console.log(key + ": " + freq[key]); // frequency table 
console.log("First Repeated Letter:", firstRepeat); // prints 1st repeat
}
        
        }
    }
}
