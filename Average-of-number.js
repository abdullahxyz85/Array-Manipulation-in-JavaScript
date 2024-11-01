//Find Average:
//Write a function that calculates the average of numbers in an array.
let array = [25, 5, 10];
let sum = 0;
let average;

function avrgNum() {
  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  average = sum / array.length;

  return average;
}

let answer = avrgNum();
console.log(`The average of number of array is ${answer}`);
