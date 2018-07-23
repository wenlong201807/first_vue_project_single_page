<template>
<div class="head">
  我是头部 {{z}}
  <hr>
  <input type="button" value="向父组件发送数据" @click="send">
</div>
</template>

<script>
export default {
  name: 'hd',
  props: {
    z: Function
  },
  methods:{
    send: function() {
      this.$emit("listenToChild","this is from son")
    }
  }
}
</script>

<style scoped>
.head {
  height: 200px;
  background-color: #cccccc;
}
</style>
