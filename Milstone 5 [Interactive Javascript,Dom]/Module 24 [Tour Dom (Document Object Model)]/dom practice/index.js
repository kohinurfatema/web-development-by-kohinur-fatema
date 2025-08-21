
let heading = document.getElementById("heading");
console.log("By Id:",heading.innerText);

let paragraphs = document.getElementsByClassName("para");
console.log("By Class:",paragraphs[0].innerText,paragraphs[1].innerText);

let allPara = document.getElementsByTagName("p");
console.log("By Tag:",allPara.length,"paragraphs found");

let firstPara = document.querySelector(".para");
console.log("QuerySelector:",firstPara.innerText);

let allParas = document.querySelectorAll(".para");
console.log("Query Selector All",allParas.length,"paragraphs found");
for (let p of allParas){
    console.log(p.innerText);
}

let btnDec = document.getElementsByClassName("btn");
