//Activity - 05
//Combining condition
//leap year

//Task-7

function isLeapyear(year){
    if((year % 4 === 0 && year % 100 === 0) || year % 400 === 0)
        return true

    else
        return false
}

let years = [1996 , 2004, 2100, 2021, 2024, 1900]

years.forEach((year) => {
    if(isLeapyear(year))
        console.log(`${year} is a leap year`);

    else
        console.log(`${year} is not a leap year`);
})