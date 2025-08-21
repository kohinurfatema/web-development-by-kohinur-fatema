
//problem1//

function totalFine( fare ) {
          // You have to write your code here
          if (typeof fare !== "number" || fare <= 0){
            return "Invalid";
          }
          let fine = fare + fare * (20/100) + 30;
          return fine;
}


//problem2//

function  onlyCharacter( str ) {
          // You have to write your code here
          if (typeof str !== "string"){
            return "Invalid"
          }
          let capitalWord = str.split(" ").join("").toUpperCase();
          return capitalWord;
        
}


//problem3//

function  bestTeam( player1, player2 ) {
          // You have to write your code here
          if (typeof player1 !== "object" || typeof player2 !== "object"){
            return "Invalid";
          }
          let score1 = player1.foul + player1.cardY + player1.cardR;
          let score2 = player2.foul + player2.cardY + player2.cardR;

          if (score1 < score2){
            return player1.name;
          }
          else if (score2 < score1){
            return player2.name;
          }
          else{
            return "Tie";
          }
}


//problem4//

function  isSame(arr1 , arr2 ) {
          // You have to write your code here
          if (!Array.isArray(arr1) || !Array.isArray(arr2)){
            return "Invalid";
          }

          if (arr1.length !== arr2.length){
            return false;
          }

          for (let i = 0; i < arr1.length; i++){
            
            if (arr1[i] !== arr2[i]){
                return false;
            }
          }
          return true;
}


//problem5//

function  resultReport( marks ) {
          // You have to write your code here
          if (!Array.isArray(marks)){
            return "Invalid";
          }

          if (marks.length === 0){
            return {"finalScore":0, pass:0, fail:0};
          }

          let total = 0;
          let pass = 0;
          let fail = 0;

          for (let i = 0; i < marks.length; i++){
            total += marks[i];
            if (marks[i] >= 40){
                pass++;
            }
            else{
                fail++;
            }
          }

          let average = Math.round(total/marks.length);

          return {"finalScore":average,pass:pass,fail:fail};
}