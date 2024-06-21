// object combining

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// method1
const obj5 = Object.assign({},obj1,obj2,obj4)

// key use karun iterate karta yet ove the keys of the object , using the for in loop

for (const key in obj5){
    console.log(`the values are ${key}: ${obj5[key]}`)
}

// method2
// using the spreading method 

let obj6 = {...obj1,...obj2,...obj4}
console.log("Method 2")
for (const key in obj6){
    console.log(`the values are ${key}: ${obj6[key]}`)
}

// Accessing the values in Objects 
// from the DB we get the array of objetcs 
let car = [
    {
        id: 1,
        name: "BMW",
        color: "Black"
    },
    {
        id: 2,
        name: "BMW1",
        color: "Black"
    },
    {
        id: 3,
        name: "BMW2",
        color: "Black"
    }
];

// now to print the objects present in this array 
// car[0]  ...1st element of array...it is object
console.log("The id car is ", car[0].id);

let temp_arr = [];
for (const temp_obj of car) {
    let temp_keys = Object.keys(temp_obj);
    let values = Object.values(temp_obj);
    
    // Log the current temp_keys and values
    console.log("Current keys:", temp_keys);
    console.log("Current values:", values);

    // Append to temp_arr
    temp_arr = [...temp_arr, ...temp_keys, ...values];
}

// Log the final temp_arr
console.log("Final temp_arr:", temp_arr);

// for checking ki isss object me ye key present he ya anahi
let obj_temp = {
    id :21,
    name:"xyz"
}
console.log(obj_temp.hasOwnProperty('email'))
//falso

// destructuring of values coming from Array, object 
const userProfile = {
    id: 101,
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "1-800-555-5555",
    address: {
        street: "123 Main St",
        city: "Springfield",
        zipcode: "12345"
    }
};

// now to access the value of property of userProfile by 
// method1...car.concat.lazy..and tired
// userProfile.address
// userProfile.id.....etc

// method 2
const {id}=userProfile;
console.log("The id is: ",id)

// you can change the name of key too 
const {name:naav}=userProfile;
console.log("The name is: ",naav)

// this conept of destructuting is used in react toolbar.visible. insted of writng the PaymentResponse.name, props,id.toExponential.apply.etc etc 

// also the API are nothing but the array , and objects, and theree intermix 

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]