//Activity - 5  Higher order function 

//Task - 9
//higher order function that takes a function and a number
function higherOrderFun(squareOf , num){
    return squareOf(num);
}

function squareOf(num)
{
    return num * num;
}

console.log(higherOrderFun(squareOf ,  11));


//Task - 10
//higher order function that takes TWO function and a number , check statment
function higherOrderFun1(squareOf ,additionOf, num){
    return squareOf1(num);
}

function squareOf1(num)
{
    return additionOf1(num * num)
}

function additionOf1(num)
{
    return num + num;
}

console.log(higherOrderFun1(squareOf , additionOf1, 10));
