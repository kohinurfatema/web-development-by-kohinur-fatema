
//task1//
function celToFahren(cel){
    const fahren = cel * 9/5 + 32;
    return fahren;
}
const result = celToFahren(75);
console.log(result);


//task2//
  let numbers = [5, 6, 12, 11, 98, 5];
  let find = 5;
  let count = 0;
  for (let i = 0; i < numbers.length; i++){
    if (numbers[i] === find){
        count++;
    }
  }
  console.log(count);

  let num = [5, 6, 11, 12, 98, 5];
  let able = 25;
  let numbs = 0;
  for (let i = 0; i < num.length; i++){
    if (num[i] === able){
        numbs++;
    }
  }
  console.log(numbs);


  //task3//
  function countVowels(str){
    let count = 0;
  }