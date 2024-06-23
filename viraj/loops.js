// for-of loop 

// in array 
let arr = [101,102,103]

// for(const i of arr){
//     console.log(i)

// }

// for objects 

let obj  = {
    a:21,
    b:22,
    c:23
}

// for(const [key,value] of obj ){
//     console.log(`${key}: ${value}`)
// }

// Object are not iterable with the for-of loop 

// for map data structure 

const temp_map = new Map();

temp_map.set('name','viraj')
temp_map.set('id',21)
temp_map.set('city','Pune')

for(const [key,value] of temp_map){
    console.log(`${key}, ${value}`)
}

console.log(typeof temp_map ) //object

