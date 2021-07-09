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





CODEWARS

№1
Function receive a two-dimensional square array of random integers. On the main diagonal, all the negative integers must be changed to 0, while the others must be changed to 1 (Note: 0 is considered non-negative, here).


function matrix(array) {
  
    for(let i=0; i<array.length; i++){

     if(array[i][i]>=0){
       array[i][i]=1
     } else {array[i][i]=0}
    }
    return array
  
}

matrix([
  [-1,  4, -5, -9,  3 ],
  [ 6, -4, -7,  4, -5 ],
  [ 3,  5,  0, -9, -1 ],
  [ 1,  5, -7, -8, -9 ],
  [-3,  2,  1, -5,  6 ]
])

Output array
[
  [ 0,  4, -5, -9,  3 ],
  [ 6,  0, -7,  4, -5 ],
  [ 3,  5,  1, -9, -1 ],
  [ 1,  5, -7,  0, -9 ],
  [-3,  2,  1, -5,  1 ]
]

