<template>
  <div class="foot">
    <div class="box">
      
    </div>
  </div>
</template>

<script>
// 引入bus
import Bus from './bus.js'
export default {
  name: 'foot',
  mounted () {
    Bus.$on('msg', (e) => {
      console.log(e)
    })
  }
}
</script>

<style scoped>
  .foot {
    height: 50px;
    background-color: yellow;
  }
</style>
