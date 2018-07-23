/**
 * weakset 对象允许你将若保持对象存储在一个集合中
 * weakset对象中只能存放对象引用，，不能存放值，而set对象都可以
 * weakset对象存储的对象值都是被弱引用的，如果没有其他的变量或属性引用这个对象值，
 *   那么这个对象值会被当成垃圾回收掉，正因为如此，weakset对象
 *
 */
let ws = new WeakSet();
let a = { a: 'sssf' };
let b = {
  b: 153
};
ws.add(a);
ws.add(b);
console.log('ws***', ws);
console.log(ws.has(a));
ws.delete(a);
console.log(ws.has(b));
//******************** */
/**
 * Map数据结构，它类似于对象，也是键值对的集合，但是，键 的范围不限于字符串，各种类型的值（包括对象哦都可以当作键。）
 *
 */
let map = new Map();
let a = { a: 562 };
let b = new Number(5000);

map.set(a, { age: 56 });
map.set(b, 12);
map.set('hung', b);
console.log('map***', map);

// 构建map对象，使用new关键字，可以传入可遍历的对象
let map = new Map([[{ a: 16 }, 22], [2, 'zhuwenlong', { kk: 'yy' }]]);
// size属性返回Map结构的成员总数。
console.log('map.size:', map.size); //2

// set方法返回的是当前的Map对象，因此可以采用链式写法
map.set(1, 'aicoder').set({ demo: 'zhuwenlong' }, 'wenlong_zhu@qq.com');
console.log('map:**', map);

// Map 可遍历方法
let makkk = new Map([[1, 1], [2, 'asdf'], [{ aaa: '333' }, 'asr**value']]);
console.log(
  'map.keys():',
  makkk.keys(), // MapIterator { 1, 2, { aaa: '333' } }
  '\n',
  makkk.values(), //MapIterator { 1, 'asdf', 'asr**value' }
  '\n',
  makkk.entries() //MapIterator { [ 1, 1 ], [ 2, 'asdf' ], [ { aaa: '333' }, 'asr**value' ] }
);
// 循环遍历for
// for (let key of makkk.keys()) {
//   console.log('hhhhh', makkk.get(key));
// }

// foreach()
makkk.forEach((item, key) => {
  console.log('item***', item, '*****key***', key);
});
