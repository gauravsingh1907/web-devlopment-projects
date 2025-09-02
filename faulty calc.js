/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/
function sum(a, b) {
    return a + b
}
function sub(a, b) {
    return a - b
}
function expo(a, b) {
    return a * b
}
function div(a, b) {
    return a / b
}

let a = 2,
    b = 3

let rand = (Math.random())


if (rand < 0.1) {
    console.log("Addition is two number is", sub(a, b));        // 2 - 3 = -1
    console.log("Multiplication is two number is", sum(a, b));  // 2 + 3 = 5
    console.log("Subraction is two number is", div(a, b));      // 2 / 3 = 0.666...
    console.log("division is two number is", expo(a, b));       // 2 * 3 = 6
}


else {
    console.log("Addition is two number is",
        sum(a, b))
    console.log("Multiplication is two number is",
        expo(a, b))
    console.log("Subraction is two number is",
        sub(a, b))
    console.log("division is two number is",
        div(a, b))
}
console.log(rand)




