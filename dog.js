function dog(name) {
  this.name = name;
}

const lucy = new dog('Lucy');
const maxx = new dog('maxx');

console.log(lucy);
console.log(maxx);

function hello() {
  return 'Hello, World!'
}

const fn = hello(),
  obj = {fn: hello},
  a = [hello];
console.log(fn)
console.log(obj)
console.log(a)

const f = function helloWorld() {
  console.log("Hello, World!");
}

f();
// ------------------------------------------
(function helloWorld() {
  console.log("Hello, World!");
})(); // 즉시 실행함수

(f)();




