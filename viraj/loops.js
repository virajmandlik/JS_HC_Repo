// for-of loop 

// in array 
// let arr = [101,102,103]

// for(const i of arr){
//     console.log(i)

// }

// for objects 

// let obj  = {
//     a:21,
//     b:22,
//     c:23
// }

// for(const [key,value] of obj ){
//     console.log(`${key}: ${value}`)
// }

// Object are not iterable with the for-of loop 

// for map data structure 

// const temp_map = new Map();

// temp_map.set('name','viraj')
// temp_map.set('id',21)
// temp_map.set('city','Pune')

// for(const [key,value] of temp_map){
//     // console.log(`${key}, ${value}`)
// }

// console.log(typeof temp_map ) //object

// for strings 

// let str  = "hello world"

// for(const i of str){
//     console.log(i);
// }

// for of loops run ove the each element of Array, map, string 

//******************************** */ FOR IN LOOP*********************************8

// for OBJECTS 

// let obj1 = {
//     "Name":"VIraj",
//     "ID":101,
//     "City":"Pune"
// }

// for(let i in obj1){
//         console.log(i)
// }

// for(let i in obj1){
//         console.log(obj1[i])
// }


// FOR ARRAYS 
// const programming = ["js", "rb", "py", "java", "cpp"]

// for (const key in programming) {
//     // console.log(programming[key]);
// }

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }


// *************FOR EACH LOOP  ****************
// Syntax 

// forEach(callbackFn)
// forEach(callbackFn, thisArg)

// callbackFn(currval,index,arr )

// Rteutn type of forEach is undefined 

// the only method to come out of forEach loop is via throwing the exception 


// Flattening the array 
// Method 1
// const flatten = (arr) => {
//     const result = [];
//     arr.forEach((item) => {
//       if (Array.isArray(item)) {
//         result.push(...flatten(item));
//       } else {
//         result.push(item);
//       }
//     });
//     return result;
//   };
  
//   // Usage
//   const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
//   console.log(flatten(nested)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
  
// Method 2
// let temp_arr= [1,2,3,4,5,[21,22,23],56,['a','b']]
// console.log( temp_arr.flat(Infinity));

// let result=[];
// temp_arr.forEach(element => {
//     if(Array.isArray(element)){
//         result.push(element)
//     }
// });

// console.log(result)

//******************* */ FILTER METHOD ***************

// filter(callbackFn)
// filter(callbackFn, thisArg)


// it modifys the element in array and store them in its newly generated array 
// it doesnt make changes to the original array 
//************************************* */ REDUCE METHOD ************

// let fname =" ";

// let name = ['Viraj',"Rajendra","Mandlik"]

// let Full_Name = name.reduce((acc,currval)=>acc +" "+ currval,fname)

// console.log(Full_Name);

// // acc:- accumulator ko starting ne pata nahi he ki starting me uski value kya he, so for that we give the intial value to it, the intial value here is fname which gets intially only stored in acc /


// let user1 =[
//     {
//         id:21,
//         name:"py",
//         price:200
//     },
//     {
//         id:22,
//         name:"Java",
//         price:789
//     },
//     {
//         id:23,
//         name:"C++",
//         price:500
//     },
// ]

// let priceToPay = user1.reduce((acc,currval)=>acc + currval.price , 0)

// console.log(priceToPay)


