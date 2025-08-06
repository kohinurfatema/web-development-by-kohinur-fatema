

/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
var CurrentSalary = startingSalary;

for (var i =1; i <= experience; i++){
    CurrentSalary += CurrentSalary * 5/100;
}

console.log(CurrentSalary.toFixed(2));