#1
const person = Object.create(
    {
        sayAboutPerson(){
            console.log(`Name ${this.name}, birth year ${this.birthYear}, age ${this.age}`)
        }
    },{
        name: {
            value: 'Nastya',
            enumerable: true, // теперь виден в key in
            writable: true, // можно изменять
            configurable: true // можно удалять
        },
        birthYear:{
            value: 1996,
            enumerable: true,
        },
        age:{
            get(){
                return new Date().getFullYear() - this.birthYear
            },
            set(value){
                document.body.style.backgroundColor = value
            }
        }
    })

console.log(person.age)  // 25
console.log(person.age = 'red') // red // цвет фона станет красный

for (let key in person){
    if(person.hasOwnProperty(key)){  // чтобы key in не пробегался по новому св-ву прототипа sayAboutPerson
        console.log(`Key is ${key}, value is ${person[key]}`)
    }
}

person.sayAboutPerson() // Name Nastya, birth year 1996, age 25

#2

const person ={
    name: 'Anastasiya',
    age: 25,
    get(){
        return `Name is ${this.name} , age is ${this.age}`
    },
    set(newData){
        this.name = newData
    },
}

console.log(person.get()) // Name is Anastasiya , age is 25
person.set('Nastya')
console.log(person.name) // Nastya

#2

const person2 ={
    name: 'LERA',
    age: 25,
    get aboutPerson (){
        return `Name is ${this.name} , age is ${this.age}`
    },
    set newData (newData){
        this.name = newData
    },


}

console.log(person2.aboutPerson); // Name is LERA , age is 25
person2.newData = 'Katya'
console.log(person2.name) // Katya
console.log(person2.aboutPerson); // Name is Katya , age is 25

#3


const person1 = Object.create({}, {
    name: {
        value: 'Anastasiya',
        writable: true
    },
    age: {
        value: 25
    },
    calculate: {
        get() {
            return `Name is ${this.name} , age is ${this.age}`
        },
        set (newData) {
            this.name = newData
        },
    }
})

console.log(person1.calculate); // Name is Anastasiya , age is 25
person1.calculate = 'Vera'
console.log(person1.calculate); // Name is Vera , age is 25

#4
const x ={
    name:'ss',
    ar: [1,2,3,4,5],
    say(){
        console.log('Hi')
    },
    r: [{a:1, b:2},{c:3, d:4},]
}

// Получить выбранный дискриптов
let info = Object.getOwnPropertyDescriptor(x, 'name')
console.log(info) // {value: "ss", writable: true, enumerable: true, configurable: true}

// Изменяет флаг выбранного св-ва
Object.defineProperty(x, 'name', {writable: false})
info = Object.getOwnPropertyDescriptor(x, 'name')
console.log(info) // {value: "ss", writable: false, enumerable: true, configurable: true}

// Изменяет флаги множетсва св-тв
Object.defineProperties(x, {
    name:{value: 'ss', writable: false, enumerable: true, configurable: false},
    ar: {value: [1,2,3,4,5], writable: false, enumerable: true, configurable: false},
})

// Получить все дискрипторы
info = Object.getOwnPropertyDescriptors(x)
console.log(info)

#5

let user={
    name: 'Kat',
    surname:'Bet'
}

Object.defineProperty(user, 'fullName', {
    get(){
        return `${this.name} ${this.surname}`
    },
    set(value){
        [this.name, this.surname] = value.split(' ')
    }
})

console.log(user.fullName) // Kat Bet
user.fullName = 'Maikel Gordan'
console.log(user.fullName) // Maikel Gordan

#6
let user = {
    name: 'Katy',
    get nameData(){
        return `${this.name}`
    },
    set nameData(name){
        if(name.length <=3){
            console.log(`Имя слишком короткое`)
            return
        }
        return this.name = name
    }
}

console.log(user.nameData); // Katy
user.nameData = 'Kat' // Имя слишком короткое
user.nameData = 'Katerina'
console.log(user.nameData); // Katerina






