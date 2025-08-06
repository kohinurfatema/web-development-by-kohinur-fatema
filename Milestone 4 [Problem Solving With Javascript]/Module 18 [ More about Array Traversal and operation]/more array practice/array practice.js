
//task1//
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const reversedColors =[];

for (let i = colors.length - 1; i >= 0; i--) {
    reversedColors.push(colors[i]);
}
console.log(reversedColors);



//task2//
const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNumbers =[];

for (let i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);  
    }
}
console.log(evenNumbers);


//task3//
var names = ['Tom', 'Tim', 'Tin', 'Tik'];
var result = "" ;

for (let name of names){
    result += name;
}
var finalResult = '"' + result + '"';
console.log(finalResult);



//task4//
const statement = 'I am a hard working person';
const reversed = statement.split(" ").reverse().join(" ");

console.log(reversed);


//task5//
const orginal = [1, 2, 3];
const copy = orginal.slice();

copy[0] =99;

console.log("orginal = " + orginal);
console.log("copy = " + copy);


//task6//
let students = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
]

for (let student of students){
     console.log(student.name +" scored "+ student.marks);
}



//task7//
let input = [
    [1, 2],
    [3, 4],
    [5, 6]
];
input[1][0] = 99;

for (let row of input){
    console.log(row);
}
