<template>
  <div class="wrapper layout-flex-column">
    <div class="layout-flex-column header" style="width: 90%;">
      <div class="layout-flex-row header-top">
        <div class="layout-flex-row layout-flex-center">
          <div class="avatar">
          </div>
          <div>
            <div class="layout-flex-row header-type-box">
              <div class="layout-flex-row layout-flex-align-center">
                <div class="header-type-icon"></div>
                <div class="header-type-text">姓名：</div>
              </div>
              <span>{{name}}</span>
            </div>
            <div class="header-top-subtitle">测颜：{{test}}</div>
          </div>
        </div>
      </div>
      <div class="layout-flex-row header-bottom">
        <div class="layout-flex-column">
          <div class="layout-flex-row header-type-box">
            <div class="layout-flex-row layout-flex-align-center">
              <div class="header-type-icon"></div>
              <div class="header-type-text">色素分析：{{skinAnalysis}}</div>
            </div>
          </div>
          <div class="layout-flex-row header-type-box">
            <div class="layout-flex-row layout-flex-align-center">
              <div class="header-type-icon"></div>
              <div class="header-type-text">肤龄：{{skinAge}}</div>
            </div>
          </div>
        </div>
        <div class="layout-flex-column">
          <div class="layout-flex-row header-type-box">
            <div class="layout-flex-row layout-flex-align-center">
              <div class="header-type-icon"></div>
              <div class="header-type-text">肤色：{{skinColor}}</div>
            </div>
          </div>
          <div class="layout-flex-row header-type-box">
            <div class="layout-flex-row layout-flex-align-center">
              <div class="header-type-icon"></div>
              <div class="header-type-text">色素分析：{{skinLips}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="body">
      <img class="title" :src="require(`./assets/${title}@2x.png`)" alt="">
      <img class="model" :src="require(`./assets/${model}@2x.png`)" alt="">
      <img class="button" src="./assets/skinButton@2x.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skin',
  data() {
    return {
      title: "skinTitle",
      model: "skinModel",
      name: '丸子胡了',
      test: '女丸子的神奇墨镜/ 美颜指数:98',
      skinAnalysis: '色素性皮肤',
      skinColor: '白皙',
      skinAge: '白皙',
      skinLips: '干性皮肤'
    }
  }
}
</script>

<style lang="stylus" scoped>
.layout-flex-row
  display flex
  flex-direction  row
.layout-flex-column
  display flex
  flex-direction  column
.layout-flex-center
  align-items: center
  justify-content: center
.layout-flex-align-center
  align-items center
.layout-flex-justify-center
  justify-content center
.header
  margin 1rem
.header-top
  background: -webkit-linear-gradient(-45deg, #23b6d9, #13a9aa);
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  padding 3rem 3rem 1rem 3rem

.header-top-subtitle
  color white
.header-bottom
  background-color white
  justify-content space-around
  padding 2rem 0rem 2rem 0rem
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
.header-type-box
  background: white;
  border-radius: 2rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  border: 1px solid #23b6d9;
  margin-bottom 1rem
.header-type-icon
  background: -webkit-linear-gradient(-45deg, #ffa1aa, #23b6d9);
  height: 85%;
  width: 3px;
  border-radius: 2px;
  margin-right: 0.3rem;
.header-type-text
  background: -webkit-linear-gradient(-45deg, #ffa1aa, #23b6d9);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  font-size 1.3rem
.avatar
  width 7rem
  height 7rem
  background: white;
  border-radius: 50%;
  text-align: center;
  margin-right 1rem;
.wrapper
  width 100vw
  height 100vh
  background-image: url("./assets/skinBackground@2x.png")
  background-size: 100% 100%
  background-repeat: no-repeat
  align-items: center;
  .body
    background: url("./assets/skinQR@2x.png")
    background-size: 100% 100%
    background-repeat: no-repeat
    width: 92%
    margin: 0 4% 0 4%
    height: 70%
    text-align: center
    .title
      width: 80%
      height: 20%
    .model
      width: 100%
      height: 40%
      position: absolute
      bottom: 17%
      left: 0
      right: 0
    .button
      position: absolute
      height: 5%
      width: 30%
      bottom: 13%
      left: 13%
</style>
