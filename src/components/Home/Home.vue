<template>
<div class="home-wrapper">
  <div class="header-wrapper">
    <img class="header" src="./assets/homeTitle@2x.png" alt="">
    <img class="body" src="./assets/test@2x.png" alt="">
    <img @click="showBtn" class="button" src="./assets/homeButton@2x.png" alt="">
    <div class="home-sticky" v-show="show">
      <div class="photo">
        <img style="width:25%;height:15%; margin-top: 10%" src="./assets/camera@2x.png" alt="">
        <img class="icon" src="./assets/photograph@2x.png" alt="">
        <img class="icon" src="./assets/phoneSelection@2x.png" alt="">
        <img @click="back" class="icon" src="./assets/cancel@2x.png" alt="">
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
      show: false,
      userinfo: {
        code: '',
        info: {},
      },
    }
  },
  methods: {
    showBtn() {
      this.show = !this.show
    },
    back() {
      this.show = false
    },
    async _getUserinfo() {
      let _userinfo = await this.$API.userinfo({code: this.userinfo.code})
      this.userinfo.info = _userinfo.data;
    },
    async _login() {
      let loginCode = window.location.search;
      if(loginCode.length > 0){
        let _code = loginCode.substring(6,38)
        this.userinfo.code = _code
        this._getUserinfo();
      } else {
        let _test = await this.$API.login({redirect_url: 'https://zy.stark.wiki'});
        let _url = '';
        console.log(_test);
        _test.forEach(item => {
          _url = _url + item;
        });
        window.location = _url;
      }
    }
  },
  created () {
    this._login();
  }
}
</script>

<style lang="stylus" scoped>
.home-wrapper
  position: absolute
  background-image: url("assets/homeBackground@2x.png")
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
