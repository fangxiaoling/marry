<!--
 * @Author: your name
 * @Date: 2020-02-08 15:56:32
 * @LastEditTime: 2020-02-29 15:30:21
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \lpw-app\src\App.vue
 -->

<template>
  <div id="app">
    <Header v-show="isShow"></Header>
    <Mheader v-show="isShowm"></Mheader>
    <PcChat v-show="isShowChat"></PcChat>
    <PcLogins v-show="isShowLogin"></PcLogins>
    <router-view/>
    <Footer v-show="isShow"></Footer>
    <Mfooter v-show="isShowm"></Mfooter>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Mheader from "./components/Mheader.vue";
import Mfooter from "./components/Mfooter.vue";
import PcChat from "./components/PcChat.vue";
import PcLogins from "./components/PcLogins.vue";



export default {
  data(){
    return{
      isShow:false,
      isShowm:false,
      isShowChat:true,
      isShowLogin:true,
    }
  },
  components: {
    Header,
    Footer,
    Mheader,
    Mfooter,
    PcChat,
    PcLogins
   
  },
  methods: {
    // 判断移动端还是pc端
    _isMobile(){
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag;
    },
    
  },
  mounted: function() {
    if (this._isMobile()) {
      this.$router.replace('/MIndex');
      this.isShowm = true;
      this.isShowChat=false;
      this.isShowLogin=false;
    }else {
     
      this.$router.replace('/',);
      this.isShow = true;
      
    }
  },
  updated() {
    window.scroll(0, 0);
  },
  
}

</script>

<style lang="scss">
#app{border:0px solid red}
</style>
