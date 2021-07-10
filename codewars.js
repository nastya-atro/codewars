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


