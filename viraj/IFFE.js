// immediatily invoked function 
// global scope chya pollution shi vachyanasathi use karto apan IFFE ccha 

// ()...declaration of function
// ()...exectuion of function

// ( ( )  ).....immeditate decalration and calling execution at the same time 

// named IIFFE
(
    function temp(){
        console.log("Hello World  !")
        
    }
)();  //this semicolon is important


// unamed IFFEE...VIa Arrow function 
(
    (name)=>{
        console.log(`Hello ${name}!`);
    }
)("Viraj");
