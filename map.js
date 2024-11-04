// 2. Write a program to print the biggest number in an arrya

let arr = [0,70,20, 10, 90, 40, 60];
let max = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
   max= arr[i]
}
}
console.log(max)
