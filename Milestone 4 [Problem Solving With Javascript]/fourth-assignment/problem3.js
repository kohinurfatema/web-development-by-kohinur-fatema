
const t1 ={ name: "Germany", foul: 10, cardY: 1, cardR: 1 };
const t2 ={ name: "France", foul: 10, cardY: 2, cardR: 1 }



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

        console.log(bestTeam(t1, t2));

