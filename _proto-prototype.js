#1
let animal = {
    eats: true,
    walk() {
        console.log("Animal walk");
    }
};

let rabbit = {
    jumps: true,
    __proto__: animal
};

rabbit.walk() // Animal walk

#2
let animal1 = {
    eats: true
};
let rabbit1 = {
    jumps: true
};

rabbit1.__proto__ = animal1;
console.log(rabbit1.eats) // true

#3

const user ={
    name: 'Nastya',
    age: 25,

    set fullName(value){
        [this.name, this.age] = value.split(' ')
        console.log(`new name - ${this.name}, new age - ${this.age}`)

    },
    get fullName(){
        return `${this.name} is ${this.age} years old`
    },
}

console.log(user.fullName); // Nastya is 25 years old
user.fullName = 'Katya 10' //  new name - Katya, new age - 10

const userDirector ={
    isDirector: true,
    __proto__:user
}

userDirector.fullName = 'Zenia 45' // new name - Zenia, new age - 45

for (let key in userDirector){
    console.log(`Key is ${key}, value is ${userDirector[key]}`)
}

// Key is isDirector, value is true
//  Key is name, value is Zenia
// Key is age, value is 45
// Key is fullName, value is Zenia is 45 years old

for (let key in userDirector){
    if(userDirector.hasOwnProperty(key)){
        console.log(`Key is ${key}, value is ${userDirector[key]}`)
    }
}

//  Key is name, value is Zenia
// Key is age, value is 45
// Key is fullName, value is Zenia is 45 years old

------------------
function Rabbit(){
    this.name = name
}

let animal={
    sleep: true,
    eats: true
}

Rabbit.prototype = animal

const rabbit = new Rabbit({
    name: 'Hunny'
})
console.log(rabbit.sleep); // true


#5
let arr =[1, 2, 3]

console.log(arr.__proto__ === Array.prototype); // true
console.log(arr.__proto__.__proto__ === Object.prototype) //true
console.log(arr.__proto__.__proto__.__proto__ === null) // true

#6
let obj = {
    0: "Hello",
    1: "world!",
    length: 2,
};

obj.join = Array.prototype.join
console.log(obj.join(','))

#7
Function.prototype.defer = function (ms){
    setTimeout(this, ms)
}

function f() {
    alert("Hello!");
}

f.defer(2000) // Hello !

#8
Function.prototype.defer = function (ms){
    let f = this
    return function (...arg){
        setInterval(()=>{f.apply(this, arg)}, ms)
    }
}

function f(a, b) {
    alert( a + b );
}

f.defer(1000)(1, 2)

#9
let animal={sleep: true}

const x = Object.create(animal)
console.log(Object.getPrototypeOf(x)) // {sleep: true}
Object.setPrototypeOf(x, {eat: true})
console.log(Object.getPrototypeOf(x)) // {eat: true}

#10
let dictionary = Object.create(null,{
    toString:{
        value(){
            return Object.keys(this).join()
        }

    }
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

for(let key in dictionary) {
    console.log(key); // "apple", затем "__proto__"
}

console.log(dictionary); // "apple,__proto__"

#11
const x ={
    name:'ss',
    ar: [1,2,3,4,5],
    say(){
        console.log('Hi')
    },
    r: [{a:1, b:2},{c:3, d:4},]
}
let clone = Object.create(Object.getPrototypeOf(x), Object.getOwnPropertyDescriptors(x));
