//problem2//

function  onlyCharacter( str ) {
          // You have to write your code here
          if (typeof str !== "string"){
            return "Invalid"
          }
          let capitalWord = str.split(" ").join("").toUpperCase();
          return capitalWord;
        
}


console.log(onlyCharacter("  h e llo wor   ld"));

