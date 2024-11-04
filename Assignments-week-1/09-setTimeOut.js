// Set timeout & seInterval
function greet() {
  console.log("Hello in 3 Seconds");
}

setTimeout(() => {
  console.log("Hello World");
  greet();
}, 3000);

setInterval(() => {
  console.log("Hello World");
  greet();
}, 3000);
