<template>
 <div class="wrapper">
   <div class="circular"></div>
 </div>
</template>

<script>
export default {
  name: 'Photo'
}
</script>

<style lang="stylus" scoped>
.wrapper
  position: absolute
  background-image: url("./assets/背景@2x.png")
  background-size: 100% 100%
  top: 0
  right: 0
  left: 0
  bottom: 0
  display: flex
  justify-content: center
  align-items: center
  .circular
    width: 18rem
    height: 18rem
    border-radius: 50%
    background-color: white
</style>
