<template>
<div class="home-wrapper">
  <div class="header-wrapper">
    <img class="header" src="./assets/标题@2x.png" alt="">
    <img class="body" src="./assets/测一测@2x.png" alt="">
    <img @click="showBtn" class="button" src="./assets/按钮@2x.png" alt="">
    <div class="home-sticky" v-show="show">
      <div class="photo">
        <img style="width:25%;height:15%; margin-top: 10%" src="./assets/相机@2x.png" alt="">
        <img class="icon" src="./assets/拍照@2x.png" alt="">
        <img class="icon" src="./assets/手机选@2x.png" alt="">
        <img @click="back" class="icon" src="./assets/取消@2x.png" alt="">
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      show: false
    }
  },
  methods: {
    showBtn() {
      this.show = !this.show
    },
    back() {
      this.show = false
    }
  },
  created () {
    this.$API.projectList();
  }
}
</script>

<style lang="stylus" scoped>
.home-wrapper
  position: absolute
  background-image: url("assets/背景@2x.png")
  background-size: 100% 100%
  top:0
  right: 0
  left: 0
  bottom: 0
  .header-wrapper
    text-align: center
    .header
      width: 90%
      margin-top: 2rem
      margin-bottom: -6rem
    .body
      width: 90%
    .button
      width: 35%
      margin-top: -20%
    .home-sticky
      position: fixed
      z-index: 100
      top: 0
      left: 0
      width: 100%
      height: 100%
      background: rgba(7, 17, 27, 0.8)
      overflow: auto
      display: flex
      justify-content: center
      align-items: center
      .photo
        width: 50%
        height: 40%
        background: white
        border-radius: 2rem
        .icon
          width: 70%
          height: 15%
          margin: 5% 15% 0 15%
</style>
