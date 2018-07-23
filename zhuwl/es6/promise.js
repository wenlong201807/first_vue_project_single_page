const fs = require('fs');

// 简单封装，fs封装成一个promise
const readFile = function(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

// promise
readFile('data/a.txt')
  .then(res => {
    console.log(res.toString());
    return readFile('data/b.txt');
  })
  .then(res => {
    console.log(res.toString());
    return readFile('data/c.txt');
  })
  .then(res => {
    console.log(res.toString());
  });

// generator
function* gen() {
  yield readFile('data/a.txt');
  yield readFile('data/b.txt');
  yield readFile('data/c.txt');
}
let g = gen();
g.next()
  .value.then(res => {
    console.log('g111**a*****' + res.toString());
    return g.next().value;
  })
  .then(res => {
    console.log('g22**b******' + res.toString());
    return g.next().value;
  })
  .then(res => {
    console.log('g33**c*******' + res.toString());
  });

// async // 异步的函数
async function fn() {
  let f1 = await readFile('data/a.txt');
  console.log('asyne*111****' + f1.toString());

  let f2 = await readFile('data/b.txt');
  console.log('asyne*222****' + f2.toString());

  let f3 = await readFile('data/c.txt');
  console.log('asyne*333****' + f3.toString());
}
// 需要调用才可以
fn();
/**
 * async 特点
 * 1.await 只能放到async函数中
 * 2.相比genetator语义更强
 * 3.await后面可以是promise对象，也可以是数字，字符串，布尔
 * 4. async函数返回是一个promise对象
 * 5.只要await语句后面promise状态变成reject，那么整个async函数会终端执行
 *
 */
