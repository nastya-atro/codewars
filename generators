function* generatorF(){
    yield 1;
    yield 2;
    return 3;
}

let x = generatorF()
console.log(JSON.stringify(x.next())) // {"value":1,"done":false}
console.log(JSON.stringify(x.next())) // {"value":2,"done":false}
console.log(JSON.stringify(x.next())) // {"value":3,"done":true}

//
//
//

function* generatorF(){
    yield 1;
    yield 2;
    return 3;
}

let x = generatorF()
for (let value of x){
    console.log(value)
}
// 1
// 2

//
//
//

function* generatorF(start, end){
    for(let i=start; i<= end; i++){
        yield i
    }
}

function* generatePasswordCodes() {

    // 0..9
    yield* generatorF(48, 57);

    // A..Z
    yield* generatorF(65, 90);

    // a..z
    yield* generatorF(97, 122);

}

let str = '';

for(let code of generatePasswordCodes()) {
    str += String.fromCharCode(code);
}

alert(str); // 0..9A..Za..z

//
//
//

function* generatorF(){
    let x = yield "2+2 = ?";
    alert(x); // 4
    let y = yield "3+3 = ?";
    alert(y); // 6
}

let generator = generatorF()
console.log(generator.next().value)
console.log(generator.next(4).value)
console.log(generator.next(6).value)

//
//
//

function* generatorF(){
    try{
        yield 1

    }catch(error) {
        console.log(error)
    }
}

let generator = generatorF()
let x = generator.next().value
console.log(x) // 1

generator.throw(new Error('Woops!!!'))
