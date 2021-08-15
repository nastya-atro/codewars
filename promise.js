//1.
let promise = new Promise(function (resolve, reject) {
    let obj = { text: 'Hello', name: 'Nastya' }
    resolve(obj)
})

promise.then(res => {
    console.log(res.text)
    return 'ку-ку'
}).then(res => {
    console.log(res)
    return 'nihao'
}).then(data => {
    console.log(data)
}).finally(res => {
    console.log('я всегда выполнябсь не имея доступа к результату ' + res)
    throw new Error('error')
}).catch(err => console.log('error'))

//Hello
//ку-ку
//nihao
//я всегда выполнябсь не имея доступа к результату undefined
//error




//2.
let promise2 = new Promise(function (resolve, reject) {
    setTimeout(() => { reject(new Error('error')) }, 1000)

    let obj = { text: 'Hello', name: 'Nastya' }
    resolve(obj)
})

promise2.then(res => console.log(res.name))
promise2.catch(err => console.log('ooй'))

//Nastya



//3.
let promise = new Promise(function (resolve, reject) {
    let error = new Error('error')
    reject(error)
    let obj = { text: 'Hello', name: 'Nastya' }
    resolve(obj)
})

promise
    .finally(console.log('выводи всегда'))
    .then(
        res => console.log(res.name),
        err => console.log('error')
    )

//выводи всегда
//error  

promise
    .finally(console.log('выводи всегда'))
    .catch(
        err => console.log('error')
    )

//выводи всегда
//error  


//4.
fetch('https://api.github.com/users/nastya-atro')
    .then(res => {
        return res.json()
    })
    .then(res => console.log(res.login))
//nastya-atro

//5.

fetch('tps://api.github.com/users/nasya-atro')
    .then(res => {
        return res.json()
    })
    .then(res => console.log(res.login))
    .catch(err => console.log(err))
//:TypeError: Failed to fetch

//6.

new Promise((res, rej) => {
    res('1')
}).then((res) => {
    throw new Error('OШИБКА')
}).catch(err => console.log(err))

//:Error: OШИБКА


//7.
let numbers = [2, 3, 4]

let requests = numbers.map((n)=>fetch(`https://social-network.samuraijs.com/api/1.0/profile/${n}`))

Promise.all(requests)
.then(responses=>{
for (response of responses){
  console.log(resonse.status)
}
})
//200
//200
//200


//8

let numbers = [2, 3, 4]

    let requests = numbers.map((n) => axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${n}`))

    Promise.all(requests)
      .then((req)=>{
        for (let r of req){
          console.log(r.data.fullName)
        } 
      })
// samurai dimych
// AlexanderKhodaryonok
//marina




#9
const sleep = ms => {
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(ms)
        }, ms)
    })
}

sleep(2000).then((res)=>console.log(`After ${res} ms`))
sleep(5000).then((res)=>console.log(`After ${res} ms`))

Promise.all([sleep(200), sleep(5000)]).then(()=>{
    console.log('All promises')
})

Promise.race([sleep(200), sleep(5000)]).then((res)=>{
    console.log(res)
})


#10

console.log('request...')

const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const responseData ={
            port: 2000,
            statusCode: 'pending',
            resultDone : false
        }

        console.log(responseData)
        resolve(responseData)
    }, 1000)
})

promise.then((response)=>{
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            response.statusCode = 'done'
            console.log('changing status code...')
            console.log(response.statusCode )
            res(response)
        }, 2000)
    })
}).then((response)=>{
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            response.resultDone = true
            console.log('changing result...')
            console.log(response.resultDone )
            res(response)
        }, 2000)
    })
}).then((response)=>{
    console.log('saving result...')
    console.log(response)
    return response
}).catch((error)=>{
    console.log('Error' + '' + error)
}).finally(()=>{
    console.log('Stop')
})

// request...
// {port: 2000, statusCode: "pending", resultDone: false}
// changing status code...
// done
// changing result...
// true
// saving result...
// {port: 2000, statusCode: "done", resultDone: true}
// 41 Stop


//
// ###
//

setTimeout(function(){
    try{
        x
    }catch (err){
        console.log('error: '+ err.name) // error: ReferenceError
        console.log('error: '+ err.message) // error: x is not defined
        console.log('error: '+ err.stack) // error: ReferenceError: x is not defined at...
    }

},1000)

//
// ###
//

try{
    let user={
        age: 23
    }
    if(!user.name) throw new Error('WOOOPS')
}catch(err){
    console.log(err)
}

//
// ###
//
class NewError extends Error{
    constructor(message) {
        super(message);
        this.name = 'NewError'
    }
}

class EmptyValueError extends NewError{
    constructor(value) {
        super('Empty value: ' + value);
        this.name = 'EmptyValueError'
        this.value = value
    }
}

function start(){
    let user={
        name: 'z',
        age: 44
    }

    if(!user.name)throw new EmptyValueError('name')
    if(!user.age)throw new EmptyValueError('age')
    console.log(user)

}

try{
    start()
}catch(err){
    if(err instanceof NewError) {console.log('Error: '+err)}
    else if (err instanceof SyntaxError) {console.log('SYNTAX ERROR: '+err)}
    else if (err instanceof ReferenceError) {console.log('ReferenceError: '+err)}
    else{
        throw err}
}

//
// ###
//

class NewError extends Error{
    constructor(message) {
        super(message);
        this.name = 'NewError'
    }
}

class EmptyValueError extends NewError{
    constructor(value) {
        super('Empty value: ' + value);
        this.name = 'EmptyValueError'
        this.value = value
    }
}

function start(){
    let user={
        name: 'z',
        age: 44
    }

    if(!user.name)throw new EmptyValueError('name')
    if(!user.age)throw new EmptyValueError('age')
    console.log(user)

}

try{
    start()
}catch(err){
    if(err instanceof NewError) {console.log('Error: '+err)}
    else if (err instanceof SyntaxError) {console.log('SYNTAX ERROR: '+err)}
    else if (err instanceof ReferenceError) {console.log('ReferenceError: '+err)}
    else{
        throw err}
}



