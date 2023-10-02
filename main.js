//1 задание:

// var name = 'Джон';
// var admin;
// admin = name;
// alert(admin);

//2 задание:

// let a = prompt("Первое число?", 21);
// let b = prompt("Второе число?", 5);

// var c = Number(a) + Number(b)
// alert(c);

//3 задание:

// for(var i = 2; i <= 10; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }

//4 задание:

// var count = 0;
// while(count < 3){
//     count++;
//     alert( `number ${count}!` );
// }

//5 задание:

// var a = prompt("введите число > 100");
// if (a > 100){
//     alert("Клево");
// }
// else {
//     while (a < 100){
//         a = prompt("введите число > 100");
//         if (a == null){
//             break;
//         }
//     }
//     alert("Клево");
// }


// 6 задание:

// var n = prompt();
// var count = 0;


// for (var p = 1; p <= n; p++){
//     for(var k = 1; k <= n; k++){
//         if (p % k == 0){
//             count++;
//         }
//     }
//     if(count == 2){
//         console.log(p);
//     }
//     count = 0;
// }

// 2 часть 1.1 задание

// var a = 123;
// var c = a;
// var b = 0;
// var count = 0;
// while(c > 1){
//     c/=10;
//     count++;
// }   
// for (var i = 1; i <= count ; i++){
//     b = b * 10 + a % 10;
//     a = Math.floor(a / 10);
// }
// alert(b);

// 2 часть 1.2 задание

// const arr = [1,1,1,3,3,3,4,5,6];
// var c;
// var count = 0;
// var chto;

// const arr2 = Array.from(new Set(arr));
// alert(arr2); 

// 2 часть 1.3 задание

// var count = 0;
// var count2 = 0;
// var arr = [1,3,5,5,5,6,7];
// var chislo = prompt("1,3,5,5,5,6,7");
// for (var i = 0; i <= arr.length ; i++){
//         if(arr[i] == chislo){
//             count++;
//         }
//         else{
//             alert("Такого числа нет")
//             break;
//         }
//     }
// alert(count);

// 2 часть 1.4 задание

// var a = prompt("Введите число");
// var b;
// var c = a;

// var arr2 =[];
// var count = 0;

// var count2 = 1;

// var count3 = 1;

// var MaxCount = 1;

// var IndexCount = null;

// var MaxKolvo = 0;

// var chislo = 0;

// var ChisloIndex = 0;

// var countDEB = 0;

// var len_max = 1;
// var len_current = 1;
// var start_current = 1;
// var start_max = null;

// while(c > 1){
//     c/=10;
//     count++;
// }   
// var arr =[];

// var arr2 =[];

// var arr3 =[];

// while(a > 0){
//     arr.push(a % 2)
//     a = Math.floor(a / 2);
// }  
// arr.reverse();
// alert(arr);

// for (var i = 0; i <= arr.length; i++){
//     if(arr[i] == arr[i+1]){
//         IndexCount = arr[i];
//         count2++;
//         if (count2 > MaxCount){
//             MaxCount = count2;
//         }
//     }
//     else{
//         arr2.push(MaxCount);
//         MaxCount = 1;
//         IndexCount = arr[i];
//         arr3.push(IndexCount);
//         IndexCount = null;
//         count2 = 1;
//     }
// }

// function findmax(arr2){
//     let max = arr2[0];
//     for (let num of arr2){
//         if (max < num){
//             max = num;
//         }
//     }
//     return max;
// }

// chislo = findmax(arr2);

// for(var h = 0; h <= arr2.length ; h++){
//             if(arr2[h] == chislo){
//                 ChisloIndex++;
//             }
//         }

// for(var q = 0; q <= arr2.length ; q++){
//     if(arr2[q] == arr2[q+1]){
//         countDEB++;
//         }
//     }

// if(countDEB == arr2.length){
//     ChisloIndex = 0;
//     alert(chislo);
//     alert(arr3[0]);
//     }
    
// else if(chislo > 1){
//     alert(chislo);
//     alert(arr3[ChisloIndex]);
// }

// else{
//     alert("Нет максимального элемента");
// }

// Задание 2.1

// function check (s) {
//     for (let l of s)
//         if (s.indexOf(l) === s.lastIndexOf(l))
//         return l
//     return null
// }
// var s = 'фывфавыапрс' ;
// alert(check(s))

// Задание 2.2

// function GenaNa(length) {
//     var result = '';
//     var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
//     var charactersLength = characters.length;
    
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
    
//     return result;
// }

// var a = prompt("Введите кол-во символов");

// var b = '';

// for(var i = 1; i <= a; i++){
//     b += GenaNa();
// }
// alert(b);

// Задание 2.3

// const str = 'позволяеткопироватьтекстиз';
// const arr = [...str];
// const arr2 = Array.from(new Set(arr));

// alert(arr2.join('')); 

//4 ЛАБА
// Задача 1.1
// function* randomizer(){
//     while(true){
//         i = Math.round(Math.random() * (+max - +min) + +min);
//     yield i
// }
// }
// let min = prompt("Введите число с которого начинатся диапозон")
// let max = prompt("Введите число конца диапозона")
// const a = randomizer(min,max)
// let b = prompt("Сколько чисел вы хотите получить?")
// for (let i = 0; i < b; i++){
//     alert(a.next().value)
// }

// Задача 1.3
// function* simple(count, n = 1000){
//     for (let p = 1; p <= n; p++){
//         for(let k = 1; k <= n; k++){
//             if (p % k == 0){
//                 count++;
//             }
//         }
//         if(count == 2){
//             yield p;
//         }
//         count = 0;
//     }
// }

// let count = 0;
// const a = simple()
// let b = prompt("Сколько чисел вы хотите получить?")
// for (let i = 0; i < b; i++){
//     alert(a.next().value)
// }

// Задача 2.1
// let str = "The neighbors cat even walks on the street in winter."
// let b =prompt("Введите искомый символ или слово")
// let count = 0
// i = str.split(' ')
// const map = new Map()
// let a = i.map(item => {
// if (item == b){
//     count++
// }
// })

// let c = [...str]
// a = c.map(item => {
// if (item == b){
//     count++
// }
// })
// alert(count)

// Задание 2.2
// function getPrime(kaka){

//     let n = kaka;
//     n = BigInt(n)
//     var arr = [];
//     var count = 0;

//     for (var p = 1; p <= n*10n; p++){
//         for(var k = 1; k <= n*10n; k++){
//             if (p % k == 0){
//                 count++;
//             }
//         }
//         if(count == 2){
//             arr.push(p);
//         }
//         count = 0;
//     }
//     var chislo = arr[n]
//     console.log(chislo)
// }
// var kaka = prompt()

// getPrime(kaka)
