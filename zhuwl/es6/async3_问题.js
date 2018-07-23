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

async function fu() {
  return 'welcome';
}
// 调用函数，返回的是一个promise对象
console.log(fu()); //Promise
fu().then(res => {
  console.log(res); //welcome
});

//*********抛出错误版本 /**
async function fuu() {
  throw new Error('error出错了');
}

// 调用函数，返回的是一个promise对象
console.log(fuu()); //
fuu()
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });
//只要await语句后面promise状态变成reject，那么整个async函数会终端执行
//遇到 整个函数会中断
async function kk() {
  await Promise.resolve('成功了1111');
  try {
    await Promise.reject('粗线问题了');
  } catch (e) {
    console.log(e); // try中的内容
  }
  await Promise.resolve('成功了2222');
}
console.log(kk()); //
kk()
  .then(res => {
    console.log(res); //
  })
  .catch(err => {
    console.log(err);
  });
//******************
async function kkk() {
  await Promise.reject('粗线问题了').catch(err => {
    console.log(err); //
  });
  await Promise.resolve('成功了2222');
}
kkk();

// let { readFile } = require('fs');

//****保险写法
async function fourth() {
  try {
    let a1 = await readFile('data/a.txt');
    let a2 = await readFile('data/b.txt');
    let a3 = await readFile('data/c.txt');
  } catch (e) {
    console.log(e);
  }
  console.log(a1);
  console.log(a2);
  console.log(a3);
}
console.log(fourth());
