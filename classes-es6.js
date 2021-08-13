#1
class Animal {
    static type = 'Animal' // .type будет доступен только у Animal.type
    constructor(options) {
        this.name = options.name
        this.age = options.age
    }

    sayData(){
        return `Name is ${this.name}, age is ${this.age}`
    }

    get realAge(){
        return `Real age like a humans is ${this.age * 5}`
    }

    set newName(newName){
        this.name = newName
    }
}

const animal  = new Animal({
    name: 'Zebra',
    age: 3
})

console.log( animal) // Animal{name: "Zebra", age: 3}
console.log(animal.sayData()); // Name is Zebra, age is 3
console.log(animal.realAge); // Real age like a humans is 15
animal.newName = 'Monkey'
console.log(animal.sayData()); // Name is Monkey, age is 3



// Создаем класс наследуемый от Animal чтобы добавить ему новые свойства и методы

class Cat extends Animal{
    static type = 'Cat'
    static data = 'Some data'

    constructor(options) {
        super(options);
        this.color = options.color
    }

    sayData() {
        super.sayData()
        return `Other data with ${this.name} and ${this.age}`
    }

    sayHello() {
        return `Hello ${this.name}`
    }

    set newAge(newAge){
        this.age = newAge
    }
}

const blackCat = new Cat({
    name: 'Bars',
    age: 5,
    color: 'black'
})

console.log(blackCat) // Cat{name: "Bars", age: 5, color: "black"}
console.log(blackCat.sayData()); // Other data with Bars and 5
blackCat.newName = 'Meo'
console.log(blackCat.sayData()); // Other data with Meo and 5
console.log(blackCat.sayHello()); // Hello Meo
blackCat.newAge = 10


#2
class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    hide(){
        this.$el.style.display = 'none'
    }

    show(){
        this.$el.style.display = 'block'
    }
}

class Box  extends Component{
    constructor(options) {
        super(options.selector);
        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.backgroundColor = options.color

    }
}

const box1 = new Box({
    selector: '#box1',
    size: 50,
    color: 'red'
})

const box2 = new Box({
    selector: '#box2',
    size: 50,
    color: 'green'
})

box1.show()
box2.show()

class Circle  extends Box{
    constructor(options) {
        super(options);
        this.$el.style.borderRadius = options.radius+'%'
    }
}

const circle1 = new Circle({
    selector: '#circle1',
    size: 50,
    color: 'pink',
    radius: 50
})

circle1.show()


// ###

function xxx(param) {
    return class {
        sayHi() {
            alert(param)
        }
    }
}

let User = xxx('HI')

new User().sayHi()

// ###

class User{
    constructor(param){
        this.name = param.name;
        this.age = param.age;
    }

    sayHi(){
        alert(this.name)
    }

    get name(){
        return this._name

    }
    set name(value){
        if (value.length < 4) {
            alert("Имя слишком короткое.");
            return;
          }
          this._name = value;
        
    }
}

let user1 = new User({
    name : 'Shon',
    age: 45
})

// ###

class User {

    pathName = 'Dorian'; // cвойсво

    constructor(name) {
        this.name = name;
    }

    get x() {
        return this._name // геттер

    }
    set x(value) {             // сеттер
        if (value.length < 4) {
            alert("Имя слишком короткое.");
            return;
        }
        this.name = value;
    }

    ['say' + 'Hi']() {
        alert(this.pathName) // вычисляемле свйство
    }


}

console.log(new User().sayHi()) // Dorian


// ###

class Animal{
    constructor(name){
        this.speed = 0;
        this.name = name;
    }

    run(speed){
        this.speed = speed;
        alert(`${this.name} бежит со скоростью ${this.speed}`);
    }

    stop(){
        this.speed = 0;
        alert(`${this.name} стоит`);
    }
}

class Rabbit extends Animal{
    constructor(name, age) {
        super(name);
        this.age = age
    }

    hide(){
        alert(`${this.name} прячется`);
    }
    stop(){
        super.stop()
        this.hide();
    }
}

let rabbit = new Rabbit('Djo', 20)

rabbit.run(20) // Djo бежит со скоростью 20
rabbit.stop()
// Djo стоит
// Djo прячется
console.log(rabbit.age) // 20

//
// ####
//

class Article{
    constructor(title, date){
        this.title = title;
        this.date = date;
    }

    static minus(article1, article2){
        return article1.date -article2.date
    }
}

let articles=[
    new Article('First', new Date(2021, 10, 1)),
    new Article('Second', new Date(1996, 0, 1)),
    new Article('Third', new Date(2022, 1, 1)),
]

articles.sort(Article.minus)
alert(articles[0].title)


//
// ###
//

class CoffeeMachine{
    _water = 0  // приватный метод, менять через него нельзя

    get waterAmount() { // у _water есть только get значит мы можем только читать но не изменять
        return this._water;
    }

    constructor(power) {
        this._power = power // приватный метод, менять через него нельзя
        alert(`мощность ${power}`)
    }
    get power() {
        return this._power;  // _power можно читать
    }
    set power(poser) {
        this._power = poser; // _power можно изменять
    }
}

let coffeeMachine = new CoffeeMachine(100)

//
// ###
//

class CoffeeMachine{
    #waterLimit = 200

    checkWaterLimit(value){
        if(value<0) throw new Error('Отрицательное значение')
        if(value > this.#waterLimit) throw new Error('Слишком много воды')
    }
}

let coffeeMachine = new CoffeeMachine()
console.log(coffeeMachine.checkWaterLimit(-1)); //  Uncaught Error: Отрицательное значение
console.log(coffeeMachine.checkWaterLimit(300)); //  Uncaught Error: Слишком много воды

//
// ###
//

class CoffeeMachine{
    #waterLimit = 100

    get waterLimit(){
        return this.#waterLimit

    }

    set waterLimit(value){
        if(value<0) throw new Error(`Отрицательное значение`)
        if(value>this.#waterLimit) throw new Error(`Слишком много воды`)
        return this.#waterLimit = value
    }
}

let coffeeMachine = new CoffeeMachine()

//
// ###
//

class PowerArray extends Array{
    isReset(){
        return this.length === 0
    }
}

let arr = new PowerArray(1,2,3,4,5)
alert(arr.isReset()) //false

let filteredArr = arr.filter(item => item < 3)
alert (filteredArr) //1,2
alert(filteredArr.isReset()) // false (Отфильтрованные массив наследуется от PowerArray)
console.log(filteredArr.constructor === PowerArray); // true

//
// ###
//

class PowerArray extends Array{
    isReset(){
        return this.length === 0
    }

    // встроенные методы массива будут использовать этот метод как конструктор
    static get [Symbol.species]() {
        return Array;
    }
}

let arr = new PowerArray(1,2,3,4,5)
alert(arr.isReset()) //false

let filteredArr = arr.filter(item => item < 3)

filteredArr.isReset() // TypeError: filteredArr.isReset is not a function
alert(filteredArr.constructor === Array); // true

//
// ###
//

// создаем прмиесь
let sayCombo={
    say(value){
        alert(value)
    }
}
// создаем примесь наследующую примесь sayCombo
let sayHiCombo={
    __proto__: sayCombo,
    sayHi(){
        super.say(`Привет, ${this.name}`)
    },
    sayBy(){
        super.say(`Пока, ${this.name}`)
    }
}

class User{
    constructor(name) {
        this.name = name
    }
}
// копируем методы
Object.assign(User.prototype, sayHiCombo)

new User('Mari').sayHi() // Привет, Mari
