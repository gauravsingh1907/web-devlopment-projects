console.log("let's begin")
function calc(a) {
      if (typeof a !== 'number') {
      throw new Error("Input must be a valid number");
   }
    if(a < 0){
       throw new Error("enter a positive value"); 
       
    }
    else if (a == 0) {
        return 1;
    }
    else {

        let arr = []
        for (let i = 1; i <= a; i++) {
            arr.push(i)


        }

        const result = arr.reduce((n, b) => { return n * b })
        return result
    }

}

function testCalc(input) {
    try {
        console.log(calc(input));
    } catch (error) {
        console.error("Error caught:", error.message);
    }
}


testCalc(6)           
testCalc(1)        
testCalc(0)         
testCalc(-5)         
testCalc("dffdfddf") 

