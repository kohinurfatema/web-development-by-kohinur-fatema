


//task1//

const name ="banana";
const count = name.split("a").length -1;
console.log(count);


//task2//

const str ="Apple And bananas";
const smallA =str.split("a").length -1;
const capitalA =str.split("A").length -1;

const total =smallA+capitalA;
console.log(total);

//task3//

let vowel = "education";
vowel =vowel.toLowerCase();

let hasAllVowel =
             vowel.includes("a") &&
             vowel.includes("e") &&
             vowel.includes("i") &&
             vowel.includes("o") &&
             vowel.includes("u");

console.log(hasAllVowel);


//task4//

let word ="exam";
let newWord = word.replace("x","y");
console.log(newWord);


//task5//

