<!--
 * @Author: your name
 * @Date: 2020-02-08 15:56:36
 * @LastEditTime: 2020-02-29 13:26:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Ed
 * @FilePath: \lpw-app\src\components\Mheader.vue
 -->
<template>
    <div>
        <div class="m-nav">
          <el-page-header @back="goBack" ></el-page-header>

           <img src="../assets/img/logo.png" alt="图片">
          
            <el-dropdown trigger="click">
            <span class="el-dropdown-link">
            导航栏<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><router-link to="/MIndex" class="a_text">首页</router-link></el-dropdown-item>
            <el-dropdown-item><router-link to="/MScene" class="a_text">七大外景</router-link></el-dropdown-item>
            <el-dropdown-item ><router-link to="/MGuest" class="a_text">真实客照</router-link></el-dropdown-item>
            <el-dropdown-item ><router-link to="/MMicroFilm" class="a_text">微电影区</router-link></el-dropdown-item>
            <el-dropdown-item ><router-link to="/MActivity" class="a_text">人气活动</router-link></el-dropdown-item>
            <el-dropdown-item ><router-link to="/MPortrait" class="a_text">写真集区</router-link></el-dropdown-item>
            <el-dropdown-item ><router-link to="/MBrands" class="a_text">品牌文化</router-link></el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
           
        </div>
         <el-input
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            v-model="input1">
         </el-input>
    </div>
</template>
<script>
export default {
  data(){
    return{
      input1: '',
    }
  },
  methods: {
      goBack() {
        this.$router.go(-1);
      }
    }
}
</script>
<style lang="scss">
  .a_text{
        color: #636b77;
    }
 .m-nav{
     width: 100%;
     height: 50px;
     background: #000;
     display: flex;
     justify-content : space-around;
     
   .el-page-header{
     color: #fff;
     line-height: 50px;
   }

    img{
        width: 20%;
        height: 80%;
        margin-top:4px;
    }
    .el-dropdown-link {
    cursor: pointer;
    color: #ffd04b;
    font-size: 20px;
    line-height: 47px;
    }
  .el-icon-arrow-down {
    font-size: 16px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 30px;
    margin-bottom: 20px;
  }
    h4{
        color: #fff;
        font-size: 16px;
        line-height: 45px;
    }
    
 }
    
</style>