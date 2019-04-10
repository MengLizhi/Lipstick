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
import wx from 'weixin-js-sdk'

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
    async wxConfig(){
      console.log(this.userinfo.info);

      let _wx = await wx.config({
          debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: this.userinfo.info.appid, // 必填，公众号的唯一标识
          timestamp: this.userinfo.info.timestamp, // 必填，生成签名的时间戳
          nonceStr: this.userinfo.info.nonceStr, // 必填，生成签名的随机串
          signature: this.userinfo.info.signature,// 必填，签名
          jsApiList: [
            'chooseImage',
            'previewImage',
            'getLocalImgData'
          ] // 必填，需要使用的JS接口列表
      });
      console.log(_wx);
    },
    camera() {
      console.log("相机")
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['camera'],
        success: function (res) {
          var localIds = res.localIds; //localIds可以作为img标签的src属性显示图片
        }
      })
    },
    album() {
      console.log("本地相册")
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['ablum'],
        success: function (res) {
          var localIds = res.localIds; //localIds可以作为img标签的src属性显示图片
        }
      })
    },
    async _getUserinfo() {
      let _userinfo = await this.$API.userinfo({code: this.userinfo.code})
      console.log(_userinfo);
      this.userinfo.info = _userinfo;
      this.wxConfig();
    },
    async _login() {
      let loginCode = window.location.search;
      if(loginCode.length > 0){
        let _code = loginCode.substring(6,38)
        this.userinfo.code = _code
        this._getUserinfo();
      } else {
        let _test = await this.$API.login({redirect_url: 'http://zy.stark.wiki'});
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
