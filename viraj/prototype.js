const { name } = require("ejs")

let arr = [1,2,3]
let str = 'mountain   '
let func1 = function(){
    console.log('this is sample function')
}
let a = {
    name:'viraj',
    id:101,
    greet:function(){
        console.log('good morning',this.name)
    }
}
console.log(a.prototype)

// object chya aatmadhi nacin functionality add keli  ani ti avalible karun dili a object la


Object.prototype.greetById = function(){
    console.log(`good morning ${this.id}`)
}

console.log(a.greetById())
// op 
// good morning 101
// now this funality made by me in prototype is avalible to object a, 
// but we also know that array will also pass throug the object, so will array have the greetById funcality?
// ANS :- yes... dig deeper sinto its prototype ...you will find the greetById method 
// in chrome 
// arr
// prototype->prototype(object)->greetById

// this behaviour goes true with String , function, array, object itself too 

// we know the herirchy 
// Array->object->null
// Function ->object->null
// Stirng->object->null

// we ave injected the property at object level...thats why they were having those property 
// but what if we inject it right at the leaf node itselef (array, function, string )

// lets see 

Array.prototype.arrPower = function(){
    console.log('this power was injected to array')
}

console.log(`Test for array`,arr.arrPower())
// console.log('Test for string',str.arrPower())...1
// console.log('Test for object',a.arrPower())..2
// console.log('Test for function',func1.arrPower())...3
//  all these 1,2,3 give us the error , so we get to know that its only for leaf node respectively 


// prototypical inheritance 
let company = {
    name:'kia',
    city:"pune"
}

let car = {
    name:'vector',
    price:'5lakh'
}
let truck = {
    name:'Monster',
    price:'50lakh'
}
let employee = {
    id:101,
    sal:50000,
    __proto__:company
    // methid 1 of inheritance ..old ...props of company are acces via emp
}

// method 2 ...old 
car.__proto__ = company
// car has compay props 

// method 3 modern 
// since both are objects so we are using the Object...
Object.setPrototypeOf(truck,company)

// example 1 
console.log('employee and city of company',employee.city)

console.log('truk and comany',truck.name)

// similary other things can be achived 

// so for trimming tall the stirng 

String.prototype.truelength = function(){
    return this.trim().length
}

let str1 = '   river'
 console.log('the mountain is',str.truelength())
 console.log('the mountain is',str1.truelength())
//  op 
// the mountain is 8
// the mountain is 5




