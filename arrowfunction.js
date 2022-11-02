// 화살표 함수
// const f3 = function() {...}
// const f3 = () => {...}

const fn = (name) => console.log(`your name is ${name}`);

const ret = fn('Hong');

function sum1(n) {
  let tot = 0;
  for (let i = 1; i <= n; i+=1) {
    tot = tot + i;
  }
  return tot
}

console.log(sum1(100))


function sum2(n) {
  if (n === 1) 
    return 1;
  return n+sum2(n-1);
}

console.log(sum2(100))

