//Activity-1
//Arithmetic Operation
let num1 = 11;
let num2 = 5;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(`END OS AC-1`);

//Activity-2
//Assignment Operators
let arr = [1, 4, 2, 5, 3]
let element = 0;
for (let i = 0; i < 5; i++) {
    element += arr[i];
    console.log(element);
}//ans is 15 and next loop start with 15 and 15-1 ... 14-4... 10-2......
for (let i = 0; i < 5; i++) {
    element -= arr[i];
    console.log(element);
}
console.log(`END OS AC-2`);

//Activity-3
//comparison Operators
let first = 56;
let second = 34;
if (first < second)
    console.log("first is less than second");
else if(first > second)
    console.log("second is less than first");

let first1 = 34;
let second1 = 34;
if (first1 === second1)
    console.log("first1 and second1 is same");

console.log(`END OS AC-3`);


//Activity-4
//logical Operators
let a = 5;
let b = -5
console.log(a > 0 && b > 0);//and
console.log(a > 0 || b > 0);//or
console.log(!(a > 0 || b > 0));//not
console.log(`END OS AC-4`);


//Activity-5
//ternary Operators
function eligibility(age){
    return age >= 18 ? "eligible for vote" : "not eligible for vote"
}
console.log(eligibility(12));
console.log(eligibility(56));
console.log(`END OS AC-5`);






