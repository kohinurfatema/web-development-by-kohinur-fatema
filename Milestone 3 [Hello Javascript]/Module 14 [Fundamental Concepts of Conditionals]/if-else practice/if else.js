

/!task1/
   
var burgerPrice = 550;

if (burgerPrice>500){
    console.log("free coke with your burger!");
}
else {
    console.log("coke costs 30 taka")
}


/!task2/


var age =17;
var ticketPrice = 800;
var isStudent = false;

if (age < 10){
    console.log("free travel")
}

else if (isStudent){
    var discount=800*50/100;
    var payment=800-discount;
    console.log(payment);
}

else if (age>=60){
    var discount=800*15/100;
    var payment=800-discount;
    console.log(payment);
}

else {
    console.log(ticketPrice);
}








