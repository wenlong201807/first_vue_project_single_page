// set类似于数组，但他成员值都是唯一的，没有重复的值
const s = new Set();
[2,43,2,12,2,23,213,2,1].forEach(x => s.add(x));
console.log(s) //=>Set { 2, 43, 12, 23, 213, 1 }
// 追加
s.add('sfs');
console.log(s);
// 删除
s.delete(1);
console.log(s);
// 查找
console.log(s.has('sfs'))
// 循环
for (let item of s) {
  console.log(item)
}
// size
console.log(s.size)
// forEach
s.forEach(value => console.log(value*2))
