// 4. Write a program that reverses all the elements of an array

let arr = [20, 30, 40, 50];
for (let i = 0; i < arr.length / 2; i++) {
  let temp = arr[i];
  arr[i] = arr[arr.length - 1 - i];
  arr[arr.length - 1 - i] = temp;
}

console.log(arr); 
