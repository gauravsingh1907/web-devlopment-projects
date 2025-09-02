
// Write a program to calculate factorial of a number using reduce and using for loops


// 6! = 6*5*4*3*2*1

let arr=[]
const value = 5
// let number= prompt("Enter a number for facotrial")
for (let index = 1; index <=value; index++) {
    const element = arr[index];
    arr.push(index)
    
}
console.log(arr)
const red=(a,b)=>{
    return a*b
}
console.log("The Factorial of the given number is: " ,arr.reduce(red))