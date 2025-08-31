

//task1//
const numbers = [1, 2, 3, 4, 5];
const square = numbers.map(n => n*n);
console.log(square);

//task2//
const ages = [12, 17, 20, 25, 30];
const adults = ages.filter(age => age >= 18);
console.log(adults);

//task3//
const nums = [2, 5, 8, 11, 15];
const graterThen10 = nums.find(n => n > 10);
console.log(graterThen10);

//task4//
const num = [5, 10, 15];
const sum = num.reduce((acc, n) => acc + n, 0);
console.log(sum);

//task5//
const fruits = ["apple", "banana", "mango", "orange"];
fruits.forEach(fruit => {
    console.log("fruit:" + fruit);
});

//task6//
const friends = ["Moushumi", "Misha", "Manna", "Mimi", "Mahadi"];
const friend = friends.filter(n => n.length > 5);
console.log(friend);

//task7//
const bondhu = ["Moushumi", "Misha", "Manna", "Mimi", "Mahadi"];
const firstBondu = bondhu.find(n => n.length = 4);
console.log(firstBondu);

//task8//
const girlF = ["Moushumi", "Misha", "Manna", "Mimi", "Mahadi"];
const upperCase = girlF.map(name => name.toLocaleUpperCase());
console.log(upperCase);

//task9//
const products = [
  { name: "laptop", price: 50000 },
  { name: "phone", price: 15000 },
  { name: "tablet", price: 25000 },
  { name: "watch", price: 5000 }
];

const price = products.filter(product => product.price > 15000);
console.log(price);

//task10//
const cost = products.find(product => product.price = 25000);
console.log(cost);

//task11//
const names = products.map(product => product.name);
console.log(names);

//task12//
const total = products.reduce((acc, product) => acc + product.price, 0);
console.log(total);