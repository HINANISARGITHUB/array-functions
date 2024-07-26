//Array,s

//Example 1 (array  length)
let fruits1: string[] = ["Apple", "Mango", "Grapes", "Kiwi", "Orange"];
let arr = fruits1.length;  
console.log(arr);    //5

//2nd Method
let fruits2: string[] = ["Apple", "Mango", "Grapes", "Kiwi", "Orange"];
console.log(fruits2.length);    //5  (array length 1 say count karay ga 0 say nahi)

///////////////////////////////////////////////////////////////////////////////////////////////////

//Example 2 (array index)
let fruits3: string[] = ["Apple", "Mango", "Grapes", "Kiwi", "Orange"];
console.log(fruits3[4]);   //Orange (array ka index 0 say start hota ha is liye (Apple zero (0)) say start hua )
console.log(fruits3[2]);  //Grapes

/////////////////////////////////////////////////////////////////////////////////////////////////

//Example (changes array index)
let fruits4: string[] = ["Apple", "Mango", "Grapes", "Kiwi", "Orange"];
console.log(fruits4);     //  ["Apple", "Mango", "Grapes", "Kiwi", "Orange"]
fruits4[3] = "Avacado";
console.log(fruits4);      //  ["Apple", "Mango", "Grapes", "Avacado", "Orange"] 

//////////////////////////////////////////////////////////////////////////////////////////////////

//Example 3 function (push)
//last may add karta h
let fruits5: string[] = ["Apple", "Mango", "Grapes", "Kiwi", "Orange"];
fruits5.push("Falsa");
console.log(fruits5);   // ["Apple", "Mango", "Grapes", "Kiwi", "Orange", "Falsa"]

//hum is tra bhi apnay array ko add karsaktay ky sub last may add ho
let fruits6: string[] = [];
fruits6.push("Apple");
fruits6.push("Mango");
fruits6.push("Grapes");
fruits6.push("Kiwi");
fruits6.push("Orange");
fruits6.push("Banana");
console.log(fruits6);   // ["Apple", "Mango", "Grapes", "Kiwi", "Orange", "Banana"]

///////////////////////////////////////////////////////////////////////////////////////////////

//Example 4 function (pop)
//(pop) last remove karta h
let fruits7: string[] = ["Apple", "Mango", "Grapes", "Kiwi", "Orange"];
fruits7.pop();
 console.log(fruits7); //  [ 'Apple', 'Mango', 'Grapes', 'Kiwi' ] 

// another Example
let fruits8: string[] = ["Apple", "Mango", "Grapes", "Kiwi", "Orange"];
fruits8.push("Lemon" , "Melon");
fruits8.pop();
console.log(fruits8);  //[ 'Apple', 'Mango', 'Grapes', 'Kiwi', 'Orange', 'Lemon' ] Melon is liye nahi aya k lemon push 
                       // hua then lemon (pop) may remove hua
//////////////////////////////////////////////////////////////////////////////////////////////////

 //Example 5 funtion (shift)
 //(shift) first element remove karta h 
 let fruits9: string[] = ["Apple", "Mango", "Grapes", "Kiwi", "Orange"]; 
 fruits9.shift();
 console.log(fruits9);   //  [ 'Mango', 'Grapes', 'Kiwi', 'Orange' ]

////////////////////////////////////////////////////////////////////////////////////////////////

 //Example 6 function (unshift) 
 //(unshift)first add karta h
 let fruits10: string[] = ["Apple", "Mango", "Grapes", "Kiwi", "Orange"];
 fruits10.unshift("Pine apple");
 console.log(fruits10);  //  [ 'Pine apple', 'Apple', 'Mango', 'Grapes', 'Kiwi', 'Orange' ]

///////////////////////////////////////////////////////////////////////////////////////////////

 /*Example 7 function (slice)
 (slice kia karta h 2 index layta h start or end (1 , 3) k.. 1 say start karo or 3 tak jao last number exclusive h
 tu 1 say 2 tak jaye ga or (1 , 2) tak show karay ga.. yani last wala number say 1 number peechay...
 or ya bhi ho sakhta (e.g) (1 , 3)  1 index say start karo or 3 length tak dekho.yani apple element (1).
 //note:or is process say variable ki original array par koi effect nahi hota.. ya copy k liye bhi use hota h */

 let fruits11: string[] = ["Apple", "Mango", "Grapes", "Kiwi", "Orange", "Lemon", "Melon", "Falsa", "Watermelon"];
 console.log(fruits11);  //  ["Apple", "Mango", "Grapes", "Kiwi", "Orange", "Lemon", "Melon", "Falsa", "Watermelon"];

 let arr1 = fruits11.slice(2 , 6);
 console.log(fruits11);    // ["Apple", "Mango", "Grapes", "Kiwi", "Orange", "Lemon", "Melon", "Falsa", "Watermelon"];
                            //...is slice k function say original array par koi effect nahi parta...

 console.log(arr1);   //  [ 'Grapes', 'Kiwi', 'Orange', 'Lemon' ]

 //another example (slice)
 let fruits12: string[] = ["Apple", "Mango", "Grapes", "Kiwi", "Orange", "Lemon", "Melon", "Falsa", "Watermelon"];
 let arr2 = fruits12.slice()
 console.log(arr2);  // ["Apple", "Mango", "Grapes", "Kiwi", "Orange", "Lemon", "Melon", "Falsa", "Watermelon"];

 //other Example (slice) k sirf 1 hi property di () may
 let fruits13: string[] =["Apple", "Mango", "Grapes", "Kiwi", "Orange", "Lemon", "Melon", "Falsa", "Watermelon"];
 let arr3 = fruits13.slice (2);  //2 k baat sub print karay ga
 console.log(arr3);  // [ 'Grapes', 'Kiwi', 'Orange', 'Lemon', 'Melon', 'Falsa', 'Watermelon' ]

 //example slice
 let fruits14: string[] =["Apple", "Mango", "Grapes", "Kiwi", "Orange", "Lemon", "Melon", "Falsa", "Watermelon"];
 let arr4 = fruits14.slice(5 , 8);
 console.log(arr4);   // [ 'Lemon', 'Melon', 'Falsa' ]

 //example slice k agar(5 , 2) do tu kia ho ga
 //qk hamaray programm left to right eviluate kartay h pehlay 5 par aya phir 2 par tu function khatam answer []..
 let fruits15: string[] =["Apple", "Mango", "Grapes", "Kiwi", "Orange", "Lemon", "Melon", "Falsa", "Watermelon"];
 let arr5 = fruits15.slice(5 , 2);
 console.log(arr5);   // [] 

/////////////////////////////////////////////////////////////////////////////////////////////////////// 

/*Example 8 function (splice)
 splice kia karta h k 2 index layta h pehla start or second end..(e.g) (1 , 5)
 ka 1 k baat 5 element remove karo or agar likha (1 , 5 , "guava") tu 1 say 5 element remove karo or phir 5
 say guava add karo 
 //note: slice ki khasiyat ya bhi h k ya remove element ko bhi return karta h.*/

 let fruits16: string[] =["Apple", "Mango", "Grapes", "Kiwi", "Orange", "Lemon", "Melon", "Falsa", "Watermelon"];
 fruits16.splice(2 , 3);
 console.log(fruits16);    // [ 'Apple', 'Mango', 'Lemon', 'Melon', 'Falsa', 'Watermelon' ]

// Example (2 ka baat 3 remove karo or 3 say 'chickoo' add karo) 
let fruits17 = ["Apple", "Mango", "GRApes", "Kiwi", "BAnana", "Falsa"];
fruits17.splice(2 , 3 , "Chickoo");
console.log(fruits17); //[ 'Apple', 'Mango' ,'Chickoo' ,'Falsa' ]

// Example
let fruits18 = ["Apple", "Mango", "GRApes", "Kiwi", "BAnana", "Falsa", "Avacado"]; 
// show just  [ 'Apple', 'Kiwi', 'Falsa', 'Avacado' ]
fruits18.splice(4 , 1);     //['Apple', 'Mango', 'Grapes', 'Kiwi', 'Falsa', 'Avacado']
fruits18.splice(1 , 2);     //[ 'Apple', 'Kiwi', 'Falsa', 'Avacado' ]
console.log(fruits18);

// Example (5 , 0 , "cherry") dia tu 5 par cherry add ho ga
let fruits19: string[] =["Apple", "Mango", "Grapes", "Kiwi", "Orange", "Lemon", "Melon", "Falsa", "Watermelon"];
fruits19.splice(5 , 0 , "Cherry");
console.log(fruits19);  // ['Apple', 'Mango', 'Grapes', 'kiwi' , 'Orange' , 'Cherry' , 'Lemon' , 'Melon' , 'Falsa' ,'Watermelon']

// Example
let fruits20: string[] = ["Apple", "Mango", "Grapes", "Kiwi"];
fruits20.splice(1 , 2 , "Orange");
console.log(fruits20);    //[ 'Apple', 'Orange', 'Kiwi' ]

////////////////////////////////////////////////////////////////////////////////////////////

// Example 9 (indexof) function
let fruits21: string[] = ["Apple", "Mango", "Grapes", "Kiwi", "Orange", "Lemon", "Kiwi", "Orange", "falsa"];
let fruits0 = fruits21.indexOf("Kiwi");                                 //5 k bad wali kiwi
console.log(fruits0);    // 3


let fruits22: string[] = ["Apple", "Mango", "Grapes", "Kiwi", "Orange", "Lemon", "Kiwi", "Orange", "falsa"];
let fruits = fruits22.indexOf("Kiwi", 5);                                 //5 k bad wali kiwi
console.log(fruits);    //6

////////////////////////////////////////////////////////////////////////////////////////////

// Example 10 (lastindexof)

let fruits23: string[] = ["Apple", "Mango", "Grapes", "Kiwi", "Orange", "Lemon", "Kiwi", "Orange", "falsa"];
let fruit_s = fruits21.lastIndexOf("Kiwi");                                
console.log(fruit_s);    //6

//////////////////////////////////////////////////////////////////////////

// Example 10 (concat)
let fruits24: string[] = ["Apple", "Mango", "Grapes", "Kiwi"];
let newFruit: string[] = ["Lichi", "Malta", "rassberry"];
let add = fruits24.concat(newFruit);
console.log(add);                             //1st method
console.log(fruits24.concat(newFruit));       //2nd Method

//[ 'Apple', 'Mango', 'Grapes', 'Kiwi', 'Lichi', 'Mailta', 'rassberry' ]

//////////////////////////////////////////////////////////////////////////////

//  example 11 (reverse) 
let vegetable: string[] = ["Carrot", "Tomato", "Lemon", "Bringle", "Spanish"];
let reverse_result = vegetable.reverse();   
console.log(reverse_result);               // [ 'Spanish', 'Bringle', 'Lemon', 'Tomato', 'Carrot' ]

let again_reverse = vegetable.reverse();
console.log(again_reverse);                // [ 'Carrot', 'Tomato', 'Lemon', 'Bringle', 'Spanish' ]

/////////////////////////////////////////////////////////////////////////////////

// Example 12 (map) new array banata h original array say is par koi effect nahi parhta.

let count_number: number[] = [1, 2, 3, 4, 5];
let doubleData: number[] = count_number.map((curval: number) => curval * 2);
console.log(count_number);           // [ 1, 2, 3, 4, 5 ] original array
console.log(doubleData);             // [ 2, 4, 6, 8, 10 ] new array

// 2nd example
let count_numbers: number[] = [1, 2, 3, 4, 5];
let convert_string: string[] = count_numbers.map((curval: number) => curval.toString());
console.log(convert_string);           // [ '1', '2', '3', '4', '5' ] mew array
console.log(count_numbers);            // [1, 2, 3, 4, 5] original array

// 3rd example
let persons_names: string[] = ["Hina", "Reena", "Humaira", "Maryam"];
                            //   1       1        1          1
let mapResults: string[] = persons_names.map((names: string) => names.charAt(1));
console.log(mapResults);        // [ 'i', 'e', 'u', 'a' ]

// 4th example

let personsNames: string[] = ["Hina", "Reena", "Humaira", "Maryam"];
let results: string[] = personsNames.map((names1: string) => names1.toUpperCase());
console.log(results);           //  [ 'HINA', 'REENA', 'HUMAIRA', 'MARYAM' ]

// 5th example

let personsNames1: string[] = ["Hina", "Reena", "Humaira", "Maryam"];
let map_name: boolean[] = personsNames1.map((names: string) => names.includes("Hina"));
console.log(map_name);         // [ true, false, false, false ]

// 6th example

let personsNames2: string[] = ["Hina", "Reena", "Humaira", "Maryam"];
                            //   4        5        7          6
let map_result: number[] = personsNames2.map((curstr: string) => curstr.length);
console.log(map_result);        // [ 4, 5, 7, 6 ]

// 7th example
let personsName3: number[] = [1, 2, 3, 4, 5, 6];
let map_greater = personsName3.map((currnames: number) => currnames > 4);
console.log(map_greater);     // [ false, false, false, false, true, true ]

let personsName4: string[] = ["Hina", "Reena", "Humaira", "Maryam", "Bina"];
let map_greater1 = personsName4.map((currnames: string) => currnames.length > 4);
console.log(map_greater1);         // [ false, true, true, true, false ]
// map say hum tamam elements ko target kar sakhtay h

//////////////////////////////////  filter   /////////////////////////////////////
// example1

let numbers: number[] = [1, 2, 3 ,4 ,5, 10];
let evenNumber: number[] = numbers.filter((currnum: number) => currnum % 2 ); // jo 2 say divide nahi hotay
console.log(evenNumber);  // 1, 3, 5

let evenNumber1: number[] = numbers.filter((currnum: number) => currnum % 2 ===0 ); // jo sirf 2 say divide ho sakay
console.log(evenNumber1);   // 2, 4, 10

// example2
let numbers1: number[] = [1, 2, 3 ,4 ,5, 10];
let numberGreater: number[] = numbers1.filter((currnum: number) => currnum < 5);
console.log(numberGreater);    // [ 1, 2, 3, 4 ]  new array
console.log(numbers1);         // [ 1, 2, 3, 4, 5, 10 ]  original array

/////////////////////////  find ///////////////////////////////
let number_s: number[] = [1, 2, 3, 4, 5];
















 









                  
                       





 