let json = {
  name:'zhou',
  age:27
}
var map = new Map();
// key可以设置成数组，值也可以设置成字符串，让它不规律对应起来
map.set('zhiqin',json);
console.log(map)
// 增删插槽方法类似set