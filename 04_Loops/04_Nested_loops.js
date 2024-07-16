//Activity - 04

//Task - 7
//print a pattern
let num = 5

//--------------------------------------------------------------------------------
for (let i = 1; i <= num; i++) {
    let str = "* ";
    console.log(str.repeat(i)); 
}
for (let i = 1; i <= num; i++) {
    let str = "* ";
    let space = "  ";
    console.log(space.repeat(num-i)+str.repeat(i)); 
}
for (let i = 1; i <= num; i++) {
    let str = "* ";
    let space = "  ";
    console.log(str.repeat(i)+space.repeat(num-i)+space.repeat(num-i)+str.repeat(i)); 
}

//--------------------------------------------------------------------------------
console.log("DOWN");

for (let i = num; i >= 1; i--) {
    let str = "* ";
    console.log(str.repeat(i)); 
}
for (let i = num; i >= 1; i--) {
    let str = "* ";
    let space = "  ";
    console.log(space.repeat(num-i)+str.repeat(i)); 
}
for (let i = num; i >= 1; i--) {
    let str = "* ";
    let space = "  ";
    console.log(str.repeat(i)+space.repeat(num-i)+space.repeat(num-i)+str.repeat(i)); 
}

//--------------------------------------------------------------------------------
console.log('FULL');

for (let i = num; i >= 1; i--) {
    let str = "* ";
    let space = "  ";
    console.log(str.repeat(i)+space.repeat(num-i)+space.repeat(num-i)+str.repeat(i)); 
}
for (let i = 1; i <= num; i++) {
    let str = "* ";
    let space = "  ";
    console.log(str.repeat(i)+space.repeat(num-i)+space.repeat(num-i)+str.repeat(i)); 
}

//--------------------------------------------------------------------------------
console.log('KAJU KATARI');

for (let i = 1; i <= num; i++) {
    let str = "* ";
    let space = "  ";
    console.log(space.repeat(num-i)+str.repeat(i)+str.repeat(i-1)); 
}
for (let i = num; i >= 1; i--) {
    let str = "* ";
    let space = "  ";
    console.log(space.repeat(num-i)+str.repeat(i)+str.repeat(i-1)); 
}
//
for (let i = 1; i <= num-1; i++) {
    let str = "* ";
    let space = "  ";
    console.log(space.repeat(num-i)+str.repeat(i)+str.repeat(i-1)); 
}
for (let i = num; i >= 1; i--) {
    let str = "* ";
    let space = "  ";
    console.log(space.repeat(num-i)+str.repeat(i)+str.repeat(i-1)); 
}




