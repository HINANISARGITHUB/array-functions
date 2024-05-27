"use strict";
//Array,s
//Example 1 (array  length)
let fruits1 = ["Apple", "Mango", "Grapes", "Kiwi", "Orange"];
let arr = fruits1.length;
console.log(arr); //5
//2nd Method
let fruits2 = ["Apple", "Mango", "Grapes", "Kiwi", "Orange"];
console.log(fruits2.length); //5  (array length 1 say count karay ga 0 say nahi)
//Example 2 (array index)
let fruits3 = ["Apple", "Mango", "Grapes", "Kiwi", "Orange"];
console.log(fruits3[4]); //Orange (array ka index 0 say start hota ha is liye (Apple zero (0)) say start hua )
console.log(fruits3[2]); //Grapes
//Example (changes array index)
let fruits4 = ["Apple", "Mango", "Grapes", "Kiwi", "Orange"];
console.log(fruits4); //  ["Apple", "Mango", "Grapes", "Kiwi", "Orange"]
fruits4[3] = "Avacado";
console.log(fruits4); //  ["Apple", "Mango", "Grapes", "Avacado", "Orange"] 
//Example 3 function (push)
//last may add karta h
let fruits5 = ["Apple", "Mango", "Grapes", "Kiwi", "Orange"];
fruits5.push("Falsa");
console.log(fruits5); // ["Apple", "Mango", "Grapes", "Kiwi", "Orange", "Falsa"]
//hum is tra bhi apnay array ko add karsaktay ky sub last may add ho
let fruits6 = [];
fruits6.push("Apple");
fruits6.push("Mango");
fruits6.push("Grapes");
fruits6.push("Kiwi");
fruits6.push("Orange");
fruits6.push("Banana");
console.log(fruits6); // ["Apple", "Mango", "Grapes", "Kiwi", "Orange", "Banana"]
//Example 4 function (pop)
//(pop) last remove karta h
let fruits7 = ["Apple", "Mango", "Grapes", "Kiwi", "Orange"];
fruits7.pop();
console.log(fruits7); //  [ 'Apple', 'Mango', 'Grapes', 'Kiwi' ] 
// another Example
let fruits8 = ["Apple", "Mango", "Grapes", "Kiwi", "Orange"];
fruits8.push("Lemon", "Melon");
fruits8.pop();
console.log(fruits8); //[ 'Apple', 'Mango', 'Grapes', 'Kiwi', 'Orange', 'Lemon' ] Melon is liye nahi aya k lemon push 
// hua then lemon (pop) may remove hua
//Example 5 funtion (shift)
//(shift) first element remove karta h 
let fruits9 = ["Apple", "Mango", "Grapes", "Kiwi", "Orange"];
fruits9.shift();
console.log(fruits9); //  [ 'Mango', 'Grapes', 'Kiwi', 'Orange' ]
//Example 6 function (unshift) 
//(unshift)first add karta h
let fruits10 = ["Apple", "Mango", "Grapes", "Kiwi", "Orange"];
fruits10.unshift("Pine apple");
console.log(fruits10); //  [ 'Pine apple', 'Apple', 'Mango', 'Grapes', 'Kiwi', 'Orange' ]
/*Example 7 function (slice)
(slice kia karta h 2 index layta h start or end (1 , 3) k.. 1 say start karo or 3 tak jao last number exclusive h
tu 1 say 2 tak jaye ga or (1 , 2) tak show karay ga.. yani last wala number say 1 number peechay...
or ya bhi ho sakhta (e.g) (1 , 3)  1 index say start karo or 3 length tak dekho.yani apple element (1).
//note:or is process say variable ki original array par koi effect nahi hota.. ya copy k liye bhi use hota h */
let fruits11 = ["Apple", "Mango", "Grapes", "Kiwi", "Orange", "Lemon", "Melon", "Falsa", "Watermelon"];
console.log(fruits11); //  ["Apple", "Mango", "Grapes", "Kiwi", "Orange", "Lemon", "Melon", "Falsa", "Watermelon"];
let arr1 = fruits11.slice(2, 6);
console.log(fruits11); // ["Apple", "Mango", "Grapes", "Kiwi", "Orange", "Lemon", "Melon", "Falsa", "Watermelon"];
//...is slice k function say original array par koi effect nahi parta...
console.log(arr1); //  [ 'Grapes', 'Kiwi', 'Orange', 'Lemon' ]
//another example (slice)
let fruits12 = ["Apple", "Mango", "Grapes", "Kiwi", "Orange", "Lemon", "Melon", "Falsa", "Watermelon"];
let arr2 = fruits12.slice();
console.log(arr2); // ["Apple", "Mango", "Grapes", "Kiwi", "Orange", "Lemon", "Melon", "Falsa", "Watermelon"];
//other Example (slice) k sirf 1 hi property di () may
let fruits13 = ["Apple", "Mango", "Grapes", "Kiwi", "Orange", "Lemon", "Melon", "Falsa", "Watermelon"];
let arr3 = fruits13.slice(2); //2 k baat sub print karay ga
console.log(arr3); // [ 'Grapes', 'Kiwi', 'Orange', 'Lemon', 'Melon', 'Falsa', 'Watermelon' ]
//example slice
let fruits14 = ["Apple", "Mango", "Grapes", "Kiwi", "Orange", "Lemon", "Melon", "Falsa", "Watermelon"];
let arr4 = fruits14.slice(5, 8);
console.log(arr4); // [ 'Lemon', 'Melon', 'Falsa' ]
//example slice k agar(5 , 2) do tu kia ho ga
//qk hamaray programm left to right eviluate kartay h pehlay 5 par aya phir 2 par tu function khatam answer []..
let fruits15 = ["Apple", "Mango", "Grapes", "Kiwi", "Orange", "Lemon", "Melon", "Falsa", "Watermelon"];
let arr5 = fruits15.slice(5, 2);
console.log(arr5); // 
/*Example 8 function (splice)
 splice kia karta h k 2 index layta h pehla start or second end..(e.g) (1 , 5)
 ka 1 k baat 5 element remove karo or agar likha (1 , 5 , "guava") tu 1 say 5 element remove karo or phir 5
 say guava add karo
 //note: slice ki khasiyat ya bhi h k ya remove element ko bhi return karta h.*/
let fruits16 = ["Apple", "Mango", "Grapes", "Kiwi", "Orange", "Lemon", "Melon", "Falsa", "Watermelon"];
fruits16.splice(2, 3);
console.log(fruits16); // [ 'Apple', 'Mango', 'Lemon', 'Melon', 'Falsa', 'Watermelon' ]
// Example (2 ka baat 3 remove karo or 3 say 'chickoo' add karo) 
let fruits17 = ["Apple", "Mango", "GRApes", "Kiwi", "BAnana", "Falsa"];
fruits17.splice(2, 3, "Chickoo");
console.log(fruits17); //[ 'Apple', 'Mango' ,'Chickoo' ,'Falsa' ]
// Example
let fruits18 = ["Apple", "Mango", "GRApes", "Kiwi", "BAnana", "Falsa", "Avacado"];
// show just  [ 'Apple', 'Kiwi', 'Falsa', 'Avacado' ]
fruits18.splice(4, 1); //['Apple', 'Mango', 'Grapes', 'Kiwi', 'Falsa', 'Avacado']
fruits18.splice(1, 2); //[ 'Apple', 'Kiwi', 'Falsa', 'Avacado' ]
console.log(fruits18);
// Example (5 , 0 , "cherry") dia tu 5 par cherry add ho ga
let fruits19 = ["Apple", "Mango", "Grapes", "Kiwi", "Orange", "Lemon", "Melon", "Falsa", "Watermelon"];
fruits19.splice(5, 0, "Cherry");
console.log(fruits19); // ['Apple', 'Mango', 'Grapes', 'kiwi' , 'Orange' , 'Cherry' , 'Lemon' , 'Melon' , 'Falsa' ,'Watermelon']
// Example
let fruits20 = ["Apple", "Mango", "Grapes", "Kiwi"];
fruits20.splice(1, 2, "Orange");
console.log(fruits20); //[ 'Apple', 'Orange', 'Kiwi' ]
// Example 9 (indexof) function
let fruits21 = ["Apple", "Mango", "Grapes", "Kiwi", "Orange", "Lemon"];
let fruit = fruits21.indexOf("Kiwi");
console.log(fruit); //3
let fruits22 = ["Apple", "Mango", "Grapes", "Kiwi", "Orange", "Lemon", "Kiwi", "Orange", "falsa"];
let fruits = fruits22.indexOf("Kiwi", 5); //5 k bad wali kiwi
console.log(fruits); //6
// Example 10 (concat)
let fruits23 = ["Apple", "Mango", "Grapes", "Kiwi"];
let newFruit = ["Lichi", "Mailta", "rassberry"];
let add = fruits23.concat(newFruit);
console.log(add); //1st method
console.log(fruits23.concat(newFruit)); //2nd Method
