// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



// ************************************** My Practice
// objects pratice in js 
// definfing thesingle ton objects using the literals
// definging the multiton objects using the Object .create() tmethod

// method 1

// using symbol in it 
let sym1 =  Symbol('123');
let obj1 = {
    id:1,
    name:'Viraj',
    [sym1]:'12345',
    age:21,
    email:'abc@xyz.com'
}
// console.table([obj1.age,obj1.email,obj1.id,obj1.name,obj1.sym1])  //symbol cannot be accesed by dot method
// console.table([obj1["name"],obj1["id"],obj1["age"],obj1["email"],obj1[sym1]])
// 
// changing the vlaue 
// obj1["name"] = "Rajendra"
// console.log(obj1.name)

// Object.freeze(obj1)
// obj1["name"] = "Rajendra01"
// console.log(obj1.name)

//  this keyword
// making the greeting 
// method1
// function greeting(obj1){
//     console.log(`Good Morning ${obj1.name}`)
// }

// greeting(obj1);

// method 2

// obj1.greeting()= function(){
//     console.log(`Good Morning ${this.name}`)
// }
// console.log(obj1.greeting());