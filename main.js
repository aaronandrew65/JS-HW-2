//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function fav_foods(person3){
    for (let [key,value] of Object.entries(person3)){
        console.log(key, value)
    }
    }

console.log(fav_foods(person3))

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

class Person {
    constructor(name, age, gender){
        this.name = name
        this.age = age
        this.gender = gender
    }
    printInfo(){
        return `Name: ${this.name} \nAge: ${this.age} \nGender: ${this.gender}`
    }
    increaseAge=(years) => {this.age += years}
}

let aaron = new Person('Aaron', 27, 'Male')
console.log(aaron.printInfo())
let liz = new Person('Liz', 27, 'Female')

aaron.increaseAge(2)
console.log(aaron.age)

liz.increaseAge(3)
console.log(liz.age)

// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
let phrase = 'No disintegrations'
let phrase2 = 'As you wish'
const checkString=(string)=>{
    return new Promise(
        (resolve)=>{
           string.length > 15 ? resolve(true): reject(false);
        }
    );
};

checkString(phrase).then(
    (result)=>{
        console.log('\nBig word');
    }
).catch(
    (error)=>{
        console.log('\nSmall Number');
    }
);

checkString(phrase2).then(
    (result)=>{
        console.log('\nBig word');
    }
).catch(
    (error)=>{
        console.log('\nSmall Number');
    }
);