
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);

function subtractValues(first, last) {
   return last - first;
}
console.log(subtractValues(ages[0], ages[ages.length-1]));

ages.push(16);
console.log(subtractValues(ages[0], ages[ages.length-1]));

let total = 0;
let average

for(let value of ages) {
    total += value;
    average = total / ages.length;
}
console.log(total);
console.log(average); 


let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

console.log(names[0].length);

let nameTotal = 0
let nameAverage
for(let i = 0; i < names.length; i++) {
    nameTotal = nameTotal += names[i].length;
    nameAverage = nameTotal / names.length;
}
console.log(nameTotal);
console.log(nameAverage);

let nameList = names[0];
for(let i = 0; i < names.length; i++){
    if(names[i] == names[0]){

    }
    else {
    nameList = nameList + ' ' + names[i];     
    }
    
}
console.log(nameList);



let namesArray = ['Kelly', 'Sam', 'Kate'];
let nameLengths = [];

for(let i = 0; i < namesArray.length; i++){
    nameLengths.push(namesArray[i].length);
}
console.log(nameLengths);


let sum = 0
for(let i = 0; i < nameLengths.length; i++){
    sum = sum += nameLengths[i];
}
console.log(sum);





function repeatMyself(word, n) {
   console.log(word.repeat(n));
}

repeatMyself('hello', 3);


function fullName(firstName, lastName){
    return firstName + ' ' + lastName;
}

console.log(fullName('Tony', 'Recluse'));



function isGreaterThan100(array){
let sum = 0;
for(let i = 0; i < array.length; i++){   
sum = sum += array[i]; 
}
if(sum > 100){
    console.log(true);
}
}
isGreaterThan100([40, 62, 3]);



function doMath(array){
    let sum = 0;
    let answer
    for(let i = 0; i < array.length; i++){
        sum = sum += array[i];
    }
    answer = sum / array.length;
    console.log(answer);
}

doMath([13, 5, 56]);



function isAverageBigger(array1, array2){
    let array1Sum = 0;
    let array2Sum = 0;
    for(let i = 0; i < array1.length; i++){
        array1Sum = array1Sum += array1[i];
        array2Sum = array2Sum += array2[i];
    }
    let array1Avg = array1Sum / array1.length;
    let array2Avg = array2Sum / array2.length;
    if(array1Avg > array2Avg){
        console.log('true');
    }
}

isAverageBigger([100, 100, 100], [1, 1, 1]);



function willBuyDrink(isHotOutside, moneyInPocket){
    if((isHotOutside = true) && (moneyInPocket > 10.5)){
        console.log(true);
    }
}

willBuyDrink(true, 11);



function findThird(array) {
    for(let i = 0; i < array.length; i++){
        if(i == 2){
            console.log(array[i]);
        }
    }
}
findThird([1, 2, 3, 4]);

// This function I've created takes an array and returns only the third number in it.
