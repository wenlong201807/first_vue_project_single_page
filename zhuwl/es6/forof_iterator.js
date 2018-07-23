/**
 * 具备原生iterator
 * Array
 * Map
 * set
 * String
 * TypedArray
 * 函数的arguments对象
 * NodeList对象
 *
 */

let s = {
  age: 19,
  name: 'aicoder'
};
// 变成对象
// for (let key of Object.values(s)) {
//   console.log('key:', key);
// }

// 将对象变成可遍历的对象
// 第一个对象
let s = {
  data: [1, 3, 9, 'aicoder'],
  [Symbol.iterator]() {
    return {
      next() {
        // {value:any,done:boolan}
      }
    };
  }
};
