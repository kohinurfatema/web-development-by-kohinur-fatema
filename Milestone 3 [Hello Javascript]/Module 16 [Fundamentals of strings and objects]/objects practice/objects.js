

//!task1//
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};

const keys = Object.keys(colors);
console.log(keys);

const lastkey= keys[keys.length-1];

const lastvalue = colors[lastkey];
console.log(lastvalue);


//!task2//

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

car['passenger capacity'] = 5;
console.log(car);


//task3//

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
console.log(student.physics.marks);