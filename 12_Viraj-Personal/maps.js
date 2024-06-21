// making the array to objectt
// let arrobj = [
//    100,200,300,400,500
// ]

// let obj2 = {
//     a:1,
//     b:{
//         c:3,
//         d:4
//     },
//     e:6
// }
// let obj4 = structuredClone(obj2);
// console.log(typeof obj2)


// *********************MAP FUnction *********************
// making the array to objectt
// let arrobj = [
//    100,200,300,400,500
// ]
// method 1

// using the inline  methpd 
// console.log("The original array is ", arrobj)

// let new_arr = arrobj.map(function(CurrValue){
//     return (CurrValue*2)
// },this)

// console.log(`The new value is ${new_arr}`)
// output 
// The original array is  [ 100, 200, 300, 400, 500 ]
// The new value is 200,400,600,800,1000

// method 2
// using the arrow function 
// console.log("The original array is ", arrobj)
// let new_arr = arrobj.map((CurrValue)=>{return CurrValue*2 })
// console.log(`The new value is ${new_arr}`)
// The original array is  [ 100, 200, 300, 400, 500 ]
// The new value is 200,400,600,800,1000

// method 3
// using the call back function

// function CallBackFunc(CurrValue){
//     return CurrValue*2;
// }
// console.log("The original array is ", arrobj)
// console.log(`The new array is ${arrobj.map(CallBackFunc)}`);

// output 
// The original array is  [ 100, 200, 300, 400, 500 ]
// The new array is 200,400,600,800,1000

//******************** */ Using JavaScript map() Function for String Processing***************
// creating th earray of objects
// let ArrOfObj = [
//     {
//         id: 101,
//         fname: "Viraj",
//         lname: "Mandlik"
//     },
//     {
//         id: 102,
//         fname: "John",
//         lname: "Doe"
//     },
//     {
//         id: 103,
//         fname: "Jane",
//         lname: "Smith"
//     },
//     {
//         id: 104,
//         fname: "Alice",
//         lname: "Johnson"
//     }
// ];

//i want to store the new full name of employees in new array along with there id
// i need to travers the original Array 
// function ConvFull(CurrValue){
//     return (
//         // now the current value is the object 
//         CurrValue = `${CurrValue.id}  ${CurrValue.fname} ${CurrValue.lname}`
//     )
// }


// let new_arr = ArrOfObj.map(ConvFull);

// console.log(`The full name new array is `)
// console.log(new_arr)

// *******Using JavaScript map() Function for HTML Generation***************
// const customers = [
//     {givenName : "Johan", surname: "Doe", score: "75"},
//     {givenName : "Jane", surname: "Client", score: "100"},
//     {givenName : "Bobby", surname: "Person", score: "82"}
// ];

// let queueEntries = customers.map(function(nextValue){
//     return `<h2>${nextValue.givenName} ${nextValue.surname}</h2>
//     <p>${nextValue.score}</p>`
// });
// document.body.innerHTML = queueEntries;


// const customers = [
//     {givenName : "Johan", surname: "Doe", score: "75"},
//     {givenName : "Jane", surname: "Client", score: "100"},
//     {givenName : "Bobby", surname: "Person", score: "82"}
// ];

// let queueEntries = customers.map(function(nextValue){
//     return `<h2>${nextValue.givenName} ${nextValue.surname}</h2>
//     <p>${nextValue.score}</p>`
// });
// document.body.innerHTML = queueEntries;

// LINK to study map easily 
// https://www.linode.com/docs/guides/how-to-use-javascript-map-function/


