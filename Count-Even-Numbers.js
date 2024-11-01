//Count Even Numbers:
//Create a function that counts the number of
//even numbers in an array and returns the count.
let array = [253, 498, 3647, 58, 24, 442, 4842, 2846, 2184];
let count = 0;

function countEven() {
  for (i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      count++;
    }
  }
  return count;
}

let even = countEven();
console.log(`The even numbers are ${even}`);
