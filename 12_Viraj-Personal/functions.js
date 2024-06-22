// GLobal and Local Scope in Functions 

// 1) global Scope 

{
    //2)  Block Scope 
}

{
    {
        //3) Nested Scope
    }
}


// ******************8This Key WOrd**************


// let temp = 101;
// let obj1 ={
//     a:1,
//     b:21,
//     c:function(){
//         console.log('Inside the object ',this)
//         console.log(`The inside  a is${this.a}`)
//     }
// }

// obj1.c();
// obj1.a = 90;
// console.log(`the modified a is ${obj1.c()}`)
// console.log('outside the object ',this)


// use of this inside the function returns the undefined value 

// if you console.log(this) inside function you will get many values, matlab khali function ke andar bhi boot kuch he 
// example 
// function abc (){
//     let a = "hello";
//     console.table(this)
// }
// abc();

// o/p 
// may values inde the tables 


function abc (){
    let a = "hello";
    console.table(this.a)
}
abc();

// op 
// undefined

// you cannot use the this keyword inside the arrow function it return the undefined keyword 


