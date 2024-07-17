//Activity - 01  function declaration

//Task - 1
//check number is odd or even
function oddEven(num){
    if(num % 2 === 0) 
        console.log(`number is even`);
    else 
        console.log(`number is odd`);
}

oddEven(10)

//Task - 2
//square of a number
let squareOf = function (num){
    let result = `square of ${num} is ${num * num}`;
    return result;
}
console.log(squareOf(7));


//Activity - 02  function Expression

//Task - 3
//maximum of two numbers
let maxi = function(num1 , num2){
    if(num1 < num2)
        console.log(`${num2} is max number`);

    else
        console.log(`${num1} is max number`);
}
maxi(10,20);

//Task - 4
//concatinate two string
let concate = function(str1 , str2){
    return str1 + str2;
}
console.log(concate("hi " , "Yagnik"));