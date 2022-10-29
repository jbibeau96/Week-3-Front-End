let ages = [1, 3, 9, 23, 64, 2, 8, 28, 93, 100, 36]

let lastItemCalc = (ages.length - 1)
let lastItem = ages[lastItemCalc]
let newAges = lastItem - ages[0]

console.log(newAges)

// First program above. Takes the last element and subtracts the first element. Works at any length.
let sum = 0

for (number of ages) {
  sum += number;
}
  average = sum / ages.length;
  
  console.log(average)

//The above code calculates the average of the "ages" array

let sum2 = 0

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

for (amount of names) {
  
  sum2 += amount.length;
}
console.log(sum2)

  average2 = sum2 / names.length;

  console.log(average2)

//The above code finds the average number of letters in each name.

   let names2 = []
 for (i = 0; i < names.length; i++){
  names2.push(names[i])
 }
 console.log(names2)

 //The above code loops through the array and concatanates the names together.
 //The instructions were to "Use a loop to iterate through the array again and concatenate all the names together, separated by spaces." And that is what I did. I used a loop and concatenated the elements into a new array.
 //The instructions did not specifcy in what form the concatenated names were to take.

 let nameLengths = [names.length];
q = 0
 for(q = 0; q < names.length; q++){
     nameLengths[q] = names[q].length;
 }
 console.log(nameLengths);

//The above code adds the length of each element into a new array with a loop.

let answer = 0
for (sumOfAges of nameLengths) {
  answer += sumOfAges;
} console.log(answer)

//The above code finds the sum of the nameLengths array

function wordNumber(word, n) {
 let  wordRepeated = "";
 while (n > 0){
  wordRepeated += word;
  n--;
 }
  return wordRepeated
 } 
 console.log(wordNumber("Hello", 5));

 //The above code takes whatever you input in the function and returns that input multiplied by the number specified.

 function firstAndLastName(firstName, lastName){
    return firstName + " " + lastName
 }
console.log(firstAndLastName("Jerry", "Seinfeld"))

//The above code combines the two inputed names into one full name.

let hundred = [9, 5, 2, 1, 3, 56, 100]
let sum3 = 0
function hundredChecker(hundred){
  for (number2 of hundred) {
    sum3 += number2;
  }
    if (sum3 >= 100){
      return true
    } else
      return false
  }
 console.log(hundredChecker(hundred))

 //The above code returns true if the sum of the numbers in the hundred array is over 100 and false if it is under 100.

 let sum4 = 0

 hundred.forEach(function arrayAverage(hundred) {
  sum4 =+ hundred
 }); average4 = sum4 / hundred.length
  console.log(average4)

//The above code uses the forEach() method to add together all of the elements in the array so that I may find the average. 
//For some reason, the "for...of" loop that worked before wouldn't work in a function.

let arrayNumber1 = [55, 23, 124, 63 ,23, 54]
let arrayNumber2 = [23, 12, 32, 14, 53, 21]
let sum5 = 0
let sum6 = 0

for (number5 of arrayNumber1) {
  sum5 += number5;
} 
    for (number6 of arrayNumber2) {
      sum6 += number6;
}
average5 = sum5 / arrayNumber1.length
average6 = sum6 / arrayNumber2.length

function firstArrayAverage(arrayNumber1, arrayNumber2){
    if (average5 > average6){
      return true
    }
    else {return false}
    }
    console.log(firstArrayAverage())


//The above function returns true if the average of the first function is more than the average of the second function.

function willBuyDrink(isHotOutside, moneyInPocket) {
  if (isHotOutside === true) {
    if (moneyInPocket >= 10.50){
      return true
    } else return false
  } else return false
}
console.log(willBuyDrink(true, 10.50))

//The above function determines whether it is hot outside and if there is enough money in order to buy a drink and returns true if all of the criteria is met.

let fillArray = [1, 1, 2, 3, 5, 8, 13, 21]

function weFill(truth, number7){
  if (truth === true){
    return fillArray.fill(number7, 0)
  }else return false
} console.log(weFill(true, 10))

//The above code includes a function that takes an existing array and replaces selected elements with a different input. I wanted to try and use the fill method from the mdn website.