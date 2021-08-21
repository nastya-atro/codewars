let products = new Proxy([
    { name: 'Firefox', type: 'browser' },
    { name: 'SeaMonkey', type: 'browser' },
    { name: 'Thunderbird', type: 'mailer' }
],{
    get(target, prop){
        if(prop in target){
            return target[prop]
        }
        if(prop === 'number'){
            return target.length
        }

        let result, types = {}
        for (let product of target){
            if(product.name === prop){
                result = product
            }
            if (types[product.type]) {
                types[product.type].push(product);
            } else {
                types[product.type] = [product];
            }
        }
        if(result) return result
        if (prop in types) {
            return types[prop];
        }
    }
})

console.log(products[0]); // {name: "Firefox", type: "browser"}
console.log(products['Firefox']); // {name: "Firefox", type: "browser"}
console.log(products.browser);
// 0: {name: "Firefox", type: "browser"}
// 1: {name: "SeaMonkey", type: "browser"}
console.log(products.mailer); // 0: {name: "Thunderbird", type: "mailer"}
console.log(products.number); // 3

//
// ###
//

let user = {
    name: 'Pi',
    age: 25,
}

user = new Proxy(user, {
    get(obj, prop){
        return obj[prop]
    },
    set(obj, prop,val){
        if(prop in obj){
            obj[prop] = val
        } else{
            throw new Error('Woops..')
        }
    },
    has(obj, prop){
        return ['name'].includes(prop)
    },
    deleteProperty(obj, prop) {
        console.log(`Deleting ${prop}`)
        delete obj[prop]
        return true
    }
})

console.log(user.name) // Pi
console.log(user.age = 25) // 25
// console.log(user.job = 'Js dev') // Uncaught Error: Woops..
console.log('age' in user) // false
console.log('name' in user) // true
delete user.age
console.log(user) //Proxy{name: "Pi"}

//
// ###
//

let fn=(text)=>{
    return text
}

fn = new Proxy(fn, {
    apply(target, thisArg, argArray) {
        console.log(`Func start`)
        return target.apply(thisArg, argArray).toUpperCase()
    }
})

console.log(fn('Some text'))
// Func start
// SOME TEXT

//
// ###
//

class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const X = new Proxy(Person, {
    construct(target, argArray, newTarget) {
        return new Proxy( new target(...argArray), {
            get(t, prop){
                return t[prop]
            }
        })
    }
})

const x = new X('Via', 30)
console.log(x) // Proxy{name: "Via", age: 30}

//
// ###
//

const wrapperFunc = (func, defaultValue)=>{
    return new Proxy(func, {
        get:(obj, p)=>(p in obj ? obj[p] : defaultValue )
    })
}

const val = wrapperFunc({
    x: 10,
    y: 20
}, 0)

console.log(val.x) // Proxy{x: 10, y: 20}
console.log(val.z) // 0

//
// ###
//

const hiddenUVal = (target, prefix='_')=>{
    return new Proxy(target, {
        has:(obj, prop)=>prop in obj && !prop.startsWith(prefix),
        ownKeys:(obj) => Reflect.ownKeys(obj).filter(el=> el.startsWith(prefix)),
        get:(obj, prop, receiver)=>(prop in receiver ? obj[prop] : void 0)
    })
}

let x = hiddenUVal({
    name: 'HH',
    age: 15,
    _id: 8889
})

console.log(x) // Proxy{name: "HH", age: 15, _id: 8889}
console.log(x._id) // undefined

//
// ###
//

const IndexArray = new Proxy(Array,{
    construct(target, [args]) {
        const index = {}
        args.forEach( item => (index[item.id] = item))

        return new Proxy(new target(...args), {

            get(arr, prop){
                switch (prop){
                    case 'findById':
                        return id => index[id]
                    default:
                        return arr[prop]
                }
            }
        })
    }
})

users = new IndexArray([
    {id: 45, name: 'dd'},
    {id: 2, name: 'ee'},
    {id: 3, name: 'll'},
    {id: 4, name: 'pp'},
])

console.log(users.findById(3)) // {id: 3, name: 'll'},