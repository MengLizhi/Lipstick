<template>
  <div class="wrapper">
    <img class="header" :src="require(`./assets/${header}@2x.png`)" alt="">
    <div class="center">
      <img class="background" src="./assets/二维码@2x.png" alt="">  
        <img class="body" :src="require(`./assets/${img}@2x.png`)" alt="">
    </div>
    <div class="sticky" v-show="show">
      <img @click="showTips" class="tips" src="./assets/提示@2x.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Result',
  data() {
    return {
      header: "头部",
      img: "模特",
      show: true
    }
  },
  methods: {
    showTips() {
      this.show = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  position: absolute
  top: 0
  right: 0
  left: 0
  bottom: 0
  background-image: url("./assets/背景@2x.png")
  background-repeat: no-repeat
  background-size: 100% 100%
  .header
    height: 20%
    width: 90%
    margin: 2rem 5% 0 5%
    opacity: 0.9
  .sticky
    position: fixed
    z-index: 100
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: rgba(7, 17, 27, 0.8)
    overflow: auto
    display: flex
    align-items: center
    justify-content: center
    .tips
      width: 60%
  .center
    display: flex
    align-items: center
    justify-content: center
    .background
      width: 80%
      margin: -15% 10% 0 10%
    .body
      position: absolute
      top: 25%
      bottom: 0
      left: 0
      right: 0
      width: 100%
</style>
