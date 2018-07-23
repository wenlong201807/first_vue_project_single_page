<template>
<div class="home">
  我是home
  <hd :z="zhou" v-on:listenToChild="showMsg"></hd>
  <bd></bd>
  <foot></foot>
  <router-view></router-view>
</div>
</template>

<script>
import hd from './hd'
import bd from './bd'
import foot from './foot'
import axios from 'axios'

export default {
  name: 'home',
  components: {
    hd,
    bd,
    foot
  },
  data () {
    return {
      zhou: String
    }
  },
  methods: {
    getHomeinfo () {
      axios.get('../../../static/mock/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      const data = res.data.data
      const zhou = data.zhou[0].name
      console.log(zhou)
    },
    showMsg: function (data) {
      console.log(data)
    }
  },
  mounted () {
    this.getHomeinfo()
  }
}
</script>

<style scoped>
</style>
