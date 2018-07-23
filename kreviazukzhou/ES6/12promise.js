// function callback() {
//   console.log('done')
// };
// console.log('before settimeout()');
// setTimeout(callback,1000)
// console.log('after settimeout()');

// 生成一个0-2之间的随机数，如果小于1，则等待一段时间后返回成功，否则返回失败
// new Promise(function (resolve, reject) {
//   console.log('start new Promise...');
//   var timeOut = Math.random() * 2;
//   console.log('set timeout to: ' + timeOut + ' seconds.');
//   setTimeout(function () {
//       if (timeOut < 1) {
//           console.log('call resolve()...');
//           resolve('200 OK');
//       }
//       else {
//           console.log('call reject()...');
//           reject('timeout in ' + timeOut + ' seconds.');
//       }
//   }, timeOut * 1000);
// }).then(function (r) {
//   console.log('Done: ' + r);
// }).catch(function (reason) {
//   console.log('Failed: ' + reason);
// });

// 0.5秒后返回input*input的计算结果:
// function multiply(input) {
//   return new Promise(function (resolve, reject) {
//       log('calculating ' + input + ' x ' + input + '...');
//       setTimeout(resolve, 500, input * input);
//   });
// }

// 0.5秒后返回input+input的计算结果:
// function add(input) {
//   return new Promise(function (resolve, reject) {
//       console.log('calculating ' + input + ' + ' + input + '...');
//       setTimeout(resolve, 500, input + input);
//   });
// }

// var p = new Promise(function (resolve, reject) {
//   console.log('start new Promise...');
//   resolve(123);
// });

// p.then(multiply)
// .then(add)
// .then(multiply)
// .then(add)
// .then(function (result) {
//   console.log('Got value: ' + result);
// });

const repos = [
  {name:'youxuan',owner:'zhou',descriotion:'i"m zhouzhiqin',id:1},
  {name:'shunfeng',owner:'zhi',descriotion:'i"m shunfeng',id:2},
  {name:'wangyi',owner:'qin',descriotion:'i"m wangyi',id:3}
]
const owners = [
  {name:"zhou",location:"usa",flollowers:100},
  {name:"zhi",location:"china",flollowers:200},
  {name:"qin",location:"UK",flollowers:300}
]
function getRepoById(id) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      const repo = repos.find(repo => repo.id === id);
      if(repo) {
        resolve(repo)
      } else {
        reject(Error('no repo found'))
      }
    },2000)
  })
}
function combondOwner(repo) {
  return new Promise((resolve,reject) => {
    const owner = owners.find(owner => owner.name === repo.owner);
    if(owner) {
      repo.owner = owner;
      resolve(repo)
    } else {
      reject(Error('can"t find the owner'))
    }
  })
}
getRepoById(3)
  .then(repo => {
    return combondOwner(repo)
  })
  .then(repo => {
    console.log(repo)
  })
  .catch(err => {
    console.error(err)
  })