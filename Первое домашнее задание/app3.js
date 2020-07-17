"use strict";

console.log("Третье задание!");
let result = 10 + 10 + "10";
console.log(result);
/*
1. 10 + 10 = 20
2. 20 + строка = "2010"
*/
result = 10 + "10" + 10;
console.log(result);
/*
1. 10 + строка = 1010
2. "1010" + 10 = 101010
*/
result = 10 + 10 + +"10";
console.log(result);
/*
1. 10 + 10 = 20
2. Перевод из строки в число: +"10"
3. 20 + 10 = 30
*/
result = 10 / -""; 
console.log(result);
/*
-Infinity
*/
result = 10 / +"2,5";
console.log(result);
/*
1. Перевод из строки в число не удастся, поэтому NaN
2. 10 / NaN = NaN
*/
