const arr = [1,2,3,4,5];

// const result = arr.map(a => a**2)

// const multi = arr.reduce((s, a) => s+a, 0); // 15

// function multi(array) {
//   result = array**2
//   return result
// };

// mulit(arr)

const f1 = v => v**2;
const f2 = v => Math.sqrt(v);
const f3 = v => v**3;

const result = [f1,f2,f3].reduce((pre,f) => pre.map(f), arr); 
console.log(result);

/*        pre            f         map
0 ==>  [1,2,3,4,5]       f1       [1,2,3].map(v => v ** 2)
1 ==>  [1,4,9,16,25]     f2       [1,4,9].map(v =>  Math.sqrt(v))
2 ==>  [1,2,3,4,5]       f3       [1,2,3].map(v => v ** 3)
result = [1,8,27,64,125]      
*/

//--------------------------------------------------------------------

