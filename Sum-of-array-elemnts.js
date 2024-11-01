// Sum of Array Elements:
// Write a function that takes an array of numbers and returns the sum of all elements.
let arr = [4459, 9978, 269, 759, 256];
let sum = 0;

function sumOfArr() {
  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i]; //arr[i] gives the index at which value is placed.
  }
  return sum; // Yad rakhna ha kh function ma koi chiz lazmi return krwani ha
}

let result = sumOfArr();
console.log(result);
