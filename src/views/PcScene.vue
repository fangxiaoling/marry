<template>
    <div>
        <!--轮播图-->
        <el-carousel :interval="5000" arrow="always" height="500px">
            <el-carousel-item v-for="scene in scenes" :key="scene.id">
            <img v-lazy="scene.img_url" alt="图片" lazy="loading">
            </el-carousel-item>
        </el-carousel>
         <!--标题-->
        <div class="scene_box">
            <div class="box_auto">
               <img src="../assets/img/title001.png" alt="图片" lazy> 
                <img src="../assets/img/outdoor.png" alt="图片" lazy> 
            </div>
        </div>
        <!--正文图片内容-->
        <div class="scen-box1">
            <div class="box_auto1">
                <el-row>
                <el-col v-for="(scenep,index) in userList.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="index" >
                <el-card :body-style="{ padding: '0px' }" >
                    <div class="el-img" @click="handleClick(scenep.id)">
                    <div class="box"></div>
                    <img v-lazy="scenep.img_url" class="image" lazy="loading">
                    </div>
                   <div style="padding: 14px;" >
                    <span>{{scenep.title}}</span>
                    <div class="bottom clearfix">
                    <time class="time">{{ scenep.text }}</time>
                    </div>
                    </div>
                </el-card>
                </el-col>
                </el-row>
            </div>
        </div>

        <div class="pasbox">
             <div class="pas_auto">
                  <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage"
                            :page-sizes="[2, 5, 7]" 
                            :page-size="pagesize"         
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="userList.length">    <!--//这是显示总共有多少数据，-->
                    </el-pagination>
             </div>
         </div>

         <!--标题-->
        <div class="scene_box2">
               <img  src="../assets/img/end.png" alt="图片" lazy="loading"> 
        </div>
        
    </div>
</template>
<script>
//轮播图
import bannerOne from "../assets/img/banner/201709231506152550.jpg"
import bannerTwo from "../assets/img/banner/banner006.jpg"
import bannerThree from "../assets/img/banner/banner007.jpg"

//正文图片内容
import zwOne from "../assets/img/zw/zw01.jpg"
import zwTwo from "../assets/img/zw/zw02.jpg"
import zwThree from "../assets/img/zw/zw03.jpg"
import zwFour from "../assets/img/zw/zw04.jpg"
import zwFive from "../assets/img/zw/zw05.jpg"
import zwSix from "../assets/img/zw/zw06.jpg"
import zwSeve from "../assets/img/zw/zw07.jpg"

export default {
    data(){
        return{
            currentPage:1, //初始页
            pagesize:2,    //    每页的数据
            userList: [],

            scenes:[
                {id:1,img_url: bannerOne},
                {id:2,img_url: bannerTwo},
                {id:3,img_url: bannerThree},
            ], 
        }
    },
    created() {
        this.handleUserList()
      },
    methods:{
        // 初始页currentPage、初始每页数据数pagesize和数据data
          handleSizeChange: function (size) {
                  this.pagesize = size;
                 
          },
          handleCurrentChange: function(currentPage){
                  this.currentPage = currentPage;
                 
          },
          handleUserList() {
              // this.$http.get('http://localhost:3000/userList').then(res => {  //这是从本地请求的数据接口，
              //     this.userList = res.body
              // })
              this.userList = [
               {id:1,img_url: zwOne,title:"巴比伦花海，梦幻丨唯美丨轻潮",text:"15000㎡智慧型私家花海，365天绝美花期不间断，多种拍摄元素打造唯美外景婚照"},
                {id:2,img_url: zwTwo,title:"台山浪琴湾，大气丨轻旅丨纪实",text:"100000㎡私享海域，360度畅拍无游人，开启两天一夜浪漫蜜月轻旅拍"},
                {id:3,img_url: zwThree,title:"爱尔兰马场，典雅丨英伦丨纪实",text:"占地15000㎡，集园林为一地的实景真马拍摄地，更有户外神圣仪式感婚礼现场"},
                {id:4,img_url: zwFour,title:"奥斯汀湖畔，法式丨优雅丨梦幻",text:"绝美宽阔的丛林与湖泊风光，打造大场景森系清新婚照"},
                {id:5,img_url: zwFive,title:"皇家城堡，仪式丨幸福丨传承",text:"300万巨资打造的白亚教堂，尽显皇家高贵典雅气质,婚礼情感纪实记录，让照片更有故事感"},
                {id:6,img_url: zwSix,title:"塞纳河畔，轻旅丨森系丨清新",text:"原生态绿植环绕万米江岸公路，拍出年轻人喜爱的轻旅风style，爱情巴士是文艺年轻人钟爱的拍摄元素。"},
                {id:7,img_url: zwSeve,title:"戛纳明星广场，欧式丨优雅丨经典",text:"1：1：1高度还原欧洲建筑，罗马风情的轻奢大景。不出国门，拍遍全球浪漫欧式美景"},
                ]
          },

        /*
        handleImage5(){
            var url = "http://127.0.0.1:3000/imageList8"
            this.axios.get(url).then(result=>{
                this.scenes = result.data
            })
        },
        handleImage6(){
            var url = "http://127.0.0.1:3000/icons"
            this.axios.get(url).then(result=>{
                this.sceneps = result.data
            })
        },*/
        handleClick(id){
         if(id==1){
             this.$router.push("/PcSceneOne")
         }else if(id==2){
             this.$router.push("/PcSceneTwo")
         }
         else if(id==3){
             this.$router.push("/PcSceneThree")
         }
         else if(id==4){
             this.$router.push("/PcSceneFour")
         }
         else if(id==5){
             this.$router.push("/PcSceneFive")
         }
          else if(id==6){
             this.$router.push("/PcSceneSix")
         }
         else{
             this.$router.push("/PcSceneSeven") 
         }
        }
       
    },/*
    created(){
        //this.handleImage5();
        this.handleImage6();
        
    }*/
    
}
</script>
<style lang="scss">

 //轮播图
 .el-carousel{
     margin-top:0px;
 }
 .el-carousel__item img{
     width: 100%;
     height: 500px;
 }
//正文
.scen-box1{
    width: 100%;

    .box_auto1{
        width: 80%;
        margin: auto;

    .el-col{
        margin-top:2%;
    }

    .el-img{
        position: relative;
        cursor:pointer;
    }
    .box{
        width: 100%;
        height: 100%;
        position: absolute;
        background: rgba(0, 0, 0, 0.575);
        display: none;   
    }
    .el-col:hover .box{
        display: block;
    }

    .el-card:hover{
       background: orangered;
       color: #fff;
       .time{
           color: #fff;
       }
    }

    .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
 }
}
 
//标题
.scene_box2{
    width: 100%;
    img{
        width: 100%;
        margin-top: 40px;
    }
}
</style>