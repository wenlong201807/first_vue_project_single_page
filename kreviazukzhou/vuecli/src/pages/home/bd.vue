<template>
  <div class="bd">
    <table>
      <thead>
        <td>编号</td>
        <td>姓名</td>
        <td>操作</td>
      </thead>
      <tbody v-for="item in products" :key="item.id" >
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <!-- 为什么这里的item是当前行 -->
        <td class="on" @click="add(item)">添加</td>
      </tbody>
    </table>
  </div>
</template>

<script>
// 引入bus
import Bus from './bus.js'
export default {
  name: 'bd',
  data () {
    return {
      products: [
        { id: '1', name: '鳄鱼' },
        { id: '2', name: '蛇' },
        { id: '3', name: '兔子' },
        { id: '4', name: '驴' },
        { id: '5', name: '孔雀' }
      ]
    }
  },
  methods: {
    add (item) {
      // 拿到当前行的数据并传给foot组件
      Bus.$emit('msg', item)
    }
  }
}
</script>

<style scoped>
  .bd {
    height: 200px;
    background-color: #ffffff;
  }
  .on {
    background: red;
    cursor: pointer;
  }
</style>
