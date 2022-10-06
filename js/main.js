

let kilometersToTravel = Number(prompt("how many kilometers would you wish to travel?"));

if(isNaN(kilometersToTravel)){
    alert("You can only input numbers as your kilometers")
}

let age = Number(prompt("how old are you?"));

if(isNaN(age)){
    alert("You can only input numbers as your age")
}

let preDiscountPrice = kilometersToTravel*0.21

let finalPrice;
let minorDiscountRate = 20
let seniorDiscountRate = 40

let discount;

if(age <=18){
    discount = ((preDiscountPrice /100) *minorDiscountRate)
    finalPrice = preDiscountPrice - discount
} else if(age >= 65){
    discount = ((preDiscountPrice /100) *seniorDiscountRate)
    finalPrice = preDiscountPrice - discount
} else {
    finalPrice = preDiscountPrice
}

if(isNaN(finalPrice)){
    alert("Please refresh the page inserting the correct values")
}

console.log(finalPrice)