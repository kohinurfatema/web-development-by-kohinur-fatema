
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
    const vowels = "aeiouAEIOU";

    for(const char of str){
      if(vowels.includes(char)){
        count++;
      }
    }
    return count;
  }
  let word = countVowels("hello world");
  console.log(word);


  //task4//
  function findLongestWord(sentence){
    let lengestWord = "";
    const words = sentence.split(" ");

    for(const word of words){
      if (word.length > lengestWord.length){
        lengestWord = word;
      }
    }
    return lengestWord;
  }
  const sentence = "I am learing programming to become a programmer";
  console.log(findLongestWord(sentence));


  //task5//
  function generateRandomNumber(){
    return Math.floor(Math.random() * (20 - 10 + 1)) + 10;
  }
  console.log(generateRandomNumber());