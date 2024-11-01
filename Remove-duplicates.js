//Remove Duplicates:
//Write a function that takes an array and removes any duplicate values,
//returning an array with only unique values.
let array = [5, 4, 3, 5, 3, 4, 6, 7, 8, 9, 10];

function unqValues(data) {
  let array2 = [...new Set(data)];
  return array2;
}

let unique = unqValues(array);
console.log(unique);

