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

#2
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (like the name of this kata).

Strings passed in will consist of only letters and spaces.
Spaces will be included only when more than one word is present.

function spinWords(str){
  let a=str.split(' ').map(el=>el.length>=5 ? el.split('').reverse(): el.split('')).map(el=>el.join('')).join(' ')
  return a
}


spinWords('Hey wollef sroirraw')

Output spinWords("Hey fellow warriors") => "Hey wollef sroirraw" 



#3
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.


function XO(str) {
   let a=str.toLowerCase().split('')
    let x=[]
    let y=[]
    for(let i=0; i<=a.length; i++){    
      a[i]==='x' && x.push('x')
      a[i]==='o' && y.push('o')   
    }
    
    if(x.length === y.length){
      return true
    }else {
      return false
    }
  }

Output 
XO("ooxx") => true
XO("xooxx") => false



на вход функции print отправляется массив строк, выведите их в консоль следующим образом : номер: Имя

При этом помните 2 правила:

нумерация должна начинаться с 1, а не с 0
Имя всегда должно начинаться с заглавной буквы

Sample Input 1:

["ivan","Igor","ingvar"]
Sample Output 1:

1: Ivan
2: Igor
3: Ingvar

function print(arr){
 for (let i=0; i<arr.length; i++){
 console.log((i+1)+": " + arr[i][0].toUpperCase()+arr[i].slice(1))
 }
}



На вход вашей функции поступает строка, представляющая собой список имён через запятую, в таком виде:
"Tom,Alice,Bob,Sam". Вам нужно вернуть строку, состоящую из всех имён, кроме Sam, перечисленных без пробела : "TomAliceBob"

Sample Input 1:

Tom,Bob,Alice,Sam
Sample Output 1:

TomBobAlice

function filterPersons(str){
 var res="";
 var arr = str.split(",");
    for (let i=0; i<arr.length; i++){
        if(arr[i]==="Sam") {continue}
        res = res+arr[i]
    }
    
 return res;   
}


На вход вашей функции подаётся массив. На основе входного массива формируйте отфильтрованный новый, состоящий из частичных произведений до каждого элемента включительно.

Sample Input 1:

3 3 9
Sample Output 1:

3 9 81

function modify(arr){
 var result = [];
let a = arr.filter(el=> el%2!=0)

for(let i=1; i<a.length; i++){
a[i]=a[i-1]*a[i]
}
    
    return a
// return result;   
}


На вход вашей функции подаётся объект, который хранит в качестве свойств численные значения и возможно массивы с численными значениями (Смотрите пример Input ниже).

Sample Input 1:

{"nums":[1,2,3],"a":4,"b":5}
Sample Output 1:

"1;2;3;4;5"


function allNumsToString(obj){
 var arr = [];
for (let i in obj){
arr.push(obj[i])
}
    
  arr = arr.reduce((acc, val) => acc.concat(val),[]); 
    arr.sort((a,b)=>a-b);
    arr=arr.join(";")
    
    
 return arr;   
}


Напишите свою реализацию метода startsWith.
Отличие вашего метода от оригинального будет заключаться в том, что ваш метод beginWith(str,subs) должен проверять начинается ли строка str с подстроки subs не обращая внимания на регистр (то есть "Hello" и "hello" равны), и возвращать соответствующий результат логического типа (true или false).

Sample Input 1:

JavaScript java
Sample Output 1:

true

function beginWith(str, subs){
 var result = '';
    
    
    if((str.toLowerCase()).substr(0, subs.length) ===(subs.toLowerCase()))
 {result="true"} 
    else{result="false"}
    
 return result;   
}


На вход вашей функции подаётся строка из нескольких слов через пробел, вам нужно первую букву каждого слова сделать заглавной и объединить все слова через "-", как показано в примере.
*Вам может понадобится метод массивов join().

Sample Input 1:

Java script
Sample Output 1:

Java-Script

function modify(str){
 var result='';
 
     str=str.split(" ");

   result= str.map(n=> n.replace(n[0], n[0].toUpperCase())).join("-");
    
 return result;   
}


На вход вашей фунции swap(map,key) подаются 2 аргумента:
map - собственно Map(не объект) с парами ключей и значений
key - название искомого ключа

Ваша задача:
Найти пару по ключу keyи поменять ключ и значение местами, при этом удалить старую пару, смотрите пример.
Возвратить из функции обновлённый map , а если такого ключа нет, то возвратить false

Sample Input 1:

{"user":"Tom","confirm":"isConfirmed"};confirm
Sample Output 1:

confirm

function swap(map, key){
  let res; 
   if(map.has(key)===true){
       res = map.get(key);
       map.delete(key);
       map.set(res, key)
   }
    else{return false}
 
    return map;
}


На вход вашей функции подаётся Map преобразованная из входных данных.

Вам нужно заменить все значения, являющиеся массивом(помним, что массив имеет тип object) на Set, чтобы убрать дубликаты, а все остальные пары ключ-значение удалить.

Затем выведите всё оставшееся содержимое Map c помощью console.log() единой строкой как показано ниже и в примерах вывода:

key1:val1val2val3;key2:val1val2;

Sample Input 1:

{"log14":[1,2,3,3,2,1],"log15":"none data","log16":["s","S"]}
Sample Output 1:

log14:123;log16:sS;



function modifyMap(map){
  let resStr = '';
  
    for(let x of map){
        
        if (typeof(x[1])=='object'){
        let objSet = new Set(x[1]);
           
            resStr+= x[0] +':';
            
            objSet.forEach(el => resStr +=el);
            resStr += ';';
           
        }
    }
    
    console.log(resStr)
    
    
}


Верните строкой день недели.
На вход вашей функции getWeekDay(date) отправляется объект Даты, верните название дня недели на русском языке.

Sample Input:

Mon May 06 2019
Sample Output:

Понедельник

function getWeekDay(date){
 var result;
 var x = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
   
    
   
    
 return x[date.getDay()];   
}

Определите является ли строка изограммой, при этом без учета регистра. Изограммы - это слова, в которых нет повторяющихся букв. Возвратите из функции isIsogram true если это так и false в противном случае.

Sample Input 1:

hello
Sample Output 1:

false

function isIsogram(str){
 var s=str.toLowerCase().split('');
   let set= new Set (s);
if (s.length===set.size)
return true;


else return false;

}


Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]

function arrayDiff(a, b) {
  let d = []

  for (let i = 0; i <= a.length; i++) {
    let x = 0
    for (let y = 0; y <= b.length; y++) {
      if (a[i] === b[y]) {
        x += 1
      }
    }
      x === 0 && d.push(a[i])

    }
  return d
}

//
//###
//

// На вход вашей функции подаётся 3 аргумента, первым аргументом utilObj является объект с набором методов, вторым (targetObj) - другой объект, и третьим параметр примитивного типа param.
// Ваша задача - вызвать каждый метод(функцию) первого объекта по порядку с контекстом второго объекта и параметром param.

// Sample Input 1:
// obj1;{"name":"Tom","id":"3"};ID
// Sample Output 1:
// Tom ID:3

function func(utilObj,targetObj,param){
    let f;
       for (let key in utilObj) {
       if (typeof utilObj[key]  === 'function') {
           
           f = utilObj[key].call(targetObj, param);   
         
       }
      }
}

//
// ###
//
// Реализуйте функцию mergeLeft, которая должна вызываться у любого объекта (быть в прототипе Object) - obj.mergeLeft(obj2)и возвращать модифицированный объект (obj).
// Суть функции в том, чтобы складывать свойства двух объектов, а вернее в объект, на котором был осуществлен вызов этой функции (выше это obj) добавлять свойства из объекта-аргумента (obj2), при этом если свойство из obj2 уже существует в obj, то оставить его без изменений в obj.
// Также mergeLeft должна вести список "неродных свойств объекта"(добавленных в него функцией mergeLeft) в самом объекте, на котором был совершен вызов, в виде одномерного массива в поле mergedProperties. Если не зафиксировано никаких изменений, то и поле mergedProperties добавлять не нужно!

// Sample Input 1:

// {"a":1};{"a":10,"b":20,"c":30};{"c":300,"d":400}
// Sample Output 1:

// a:1
// b:20
// c:30
// d:400
// mergedProperties:b,c,d

function mergeLeft(obj){

    let a =[]
    if('mergedProperties' in this) a = this.mergedProperties
    let result = this;
   delete result['mergedProperties']
    for(let key in obj){
        if (obj.hasOwnProperty(key)){
          if(!(key in this)){
              result[key] = obj[key]
              a.push(key)
          }
        }
    }
    result['mergedProperties'] = a
    return result
}
Object.prototype.mergeLeft = mergeLeft

//
// ###
//
//На вход вашей функции computeJSON(json,obj) поступает 2 аргумента, json - json-строка содержащая объект, obj - javascript объект. Ваша задача, спарсить полученый json-объект и добавить в него все свойства из obj, которых нет в json ,и вернуть из функции обновлённый json объект.
// Sample Input:

// {"name":"valuesObj","value":[1,2,3]};{"name":"valuesObj","id":7}
// Sample Output:

// {"name":"valuesObj","value":[1,2,3],"id":7}


function computeJSON(json,obj){
         return JSON.stringify({...JSON.parse(json), ...obj})
}



// Найдите и верните из функции findMiddle() средний элемент, по следующему правилу:
// ['a','b','c'] => 'b'
// ['a','b','c','d'] => 'b'
// ['a','b','c','d','e'] => 'c'
// //Крайние случаи:
// [] => null
// ['a'] => 'a'
// [null] => undefined
// ['a',null,'c'] => 'a'
// ['a','b','c',null, null] => 'b'

const findMidlle = (arr) => {
    if (arr.length === 0)
        return null;
    arr = arr.filter(el => el !== null);
    return arr[Math.floor((arr.length - 1)/2)];
}


// Верните длину самой длинной подстроки из повторяющихся символов из функции repeatSub без учета регистра. Если строка пустая то вернуть 0;

function repeatSub(str){
    let arr = [...str.toUpperCase()]
    let x = new Set(arr)
    let y = []
    if(arr.length === 0){
        return 0
    } else {
        x.forEach((el)=>{
            let results = arr.filter((item, index, array)=> item ===el);
            y.push(results.length)
        })
        return Math.max(...y)
    }

}

repeatSub('sdsfffa')

