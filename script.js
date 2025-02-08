function square(num) {
return num * num;
}
console.log(square(5));
console.log(square(10));

const greet = (name) => 'Hello,${name}!';
console.log(greet(""));
console.log(greet(""));

const createCounter = () => {
let count = 5;
return () => count++;
