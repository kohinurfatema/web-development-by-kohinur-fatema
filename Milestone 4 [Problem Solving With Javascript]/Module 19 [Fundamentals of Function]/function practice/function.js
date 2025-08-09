
//task1//
function multiply(num1, num2,num3, num4){
    let sum = num1*num2*num3*num4;
    console.log("sum is = " + sum);
    return sum;
}
const result = multiply(10,20,30,10);
console.log(result);


//task2//
function number(num){
    if (num % 2 === 0){
        return num / 2;
    }
    else{
        return num * 2;
    }
}
console.log(number(5));
console.log(number(8));


//task3//
function make_avg(arr, size){
    let sum = 0;
    for (let i = 0; i < size; i++)                                                                                                                                                                                                                                                                                                                                                               {
        sum += arr[i];
    }
    return sum / size;
}
let numbers = [10,20,30,40,50];
console.log(make_avg(numbers,numbers.length));


//task4//
function count(binaryString){
    return
    binaryString.split('0').length - 1;
}
console.log(count(1010010));


//task5//
function odd_even(num){
    if (num % 2 === 0){
        return "Even";
    }
    else{
        return "Odd";
    }
        
}
console.log(odd_even(10));
console.log(odd_even(7));