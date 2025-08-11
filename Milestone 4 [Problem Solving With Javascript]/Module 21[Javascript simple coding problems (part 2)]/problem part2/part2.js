
//task1//
const heights = [167, 190, 120, 165, 137];
function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}
const min = getMin(heights);
console.log("min value is ",min);

//easy//
const heights1 = [167, 190, 120, 165, 137];
const min1 = Math.min(...heights); //[(...) takes the array and spreads it into individual arguments.]//
console.log(min);


//task2//
const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
function smallestName(friendArray){
    let smallest = friendArray[0];
    for(const friend of friendArray){
        if(friend.length < smallest.length){
            smallest = friend;
        }
    }
    return smallest;
}
const smallest = smallestName(friends);
console.log("smallest name is ",smallest);


//task3//
function calculateElectronicsBudget(laptopQuality, tabletQuality, mobileQuality){
    const perLaptop = 35000;
    const perTablets = 15000;
    const perMobile = 20000;

    const totalLaptop = laptopQuality * perLaptop;
    const totalTablets = tabletQuality * perTablets;
    const totalMobile = mobileQuality * perMobile;

    const total = totalLaptop + totalTablets + totalMobile;
    return total;
}
const budget = calculateElectronicsBudget(1, 1, 1);
console.log("money needed ",budget);


//task4//
const phones = [
            { model: "PhoneA", brand: "Iphone", price: 95000 },
            { model: "PhoneB", brand: "Samsung", price: 40000 },
            { model: "PhoneC", brand: "Oppo", price: 26000 },
            { model: "PhoneD", brand: "Nokia", price: 35000 },
            { model: "PhoneE", brand: "Iphone", price: 105000 },
            { model: "PhoneF", brand: "HTC", price: 48000 },
        ];

function findAveragePhonePrice(phoneArray){
    if (phoneArray.length === 0){
        return 0;
    }
    let total = 0;
    for (const phone of phoneArray){
        total += phone.price;
    }
    return total / phoneArray.length;
}
 const avg = findAveragePhonePrice(phones);
 console.log("average ",avg);


 