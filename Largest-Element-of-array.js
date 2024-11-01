// Find Maximum Number:
// Write a function that finds and returns the largest number in a given array.

let arr = [56, 85, 79, 98, 101, 235, 278, 6448, 45879, 47868979];
let largest;

function largestNum() {
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        largest = arr[i];
      } else {
        largest = arr[j];
      }
    }
  }
  return largest;
}
let greater = largestNum();
console.log(`The largest number is ${greater}`);
