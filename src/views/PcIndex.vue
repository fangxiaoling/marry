<template>
    <div>
        <!--动态图-->
        <div class="banner_box" >
            <video class="vido" autoplay loop muted preload >
                <source src="../assets/vido/banner/banner02.mp4" type="video/mp4">
                
            </video>
            <div class="img" v-for="vidoGif in vidoGifs" :key="vidoGif.id">
                <img v-lazy="vidoGif.img_url" alt="图片">
            </div>
            <div class="text">
                <h5>如实记录绽放的爱情</h5>
                <p>他说你任何为人称道的美丽都不及此时的你</p>
            </div>
          
        </div>
        <!--最新动态标题-->
        <div class="title_box">
            <div class="box3_auto">
                <img src="../assets/img/newstate_top.png" alt="图片" lazy="loading">
                <el-card class="box-card1">
                    
                 <div class="img_Box">
                      <router-link to="/PcActivityOne"><div class="box"></div></router-link>
                    <img src="../assets/img/001.jpg" alt="" lazy="loading">
                 </div>
                  <div class="img_Box2">
                     <router-link to="/PcActivityTwo"><div class="box"></div></router-link>
                     <img src="../assets/img/002.jpg" alt="" lazy="loading">
                 </div>
                 <div class="img_Box3">
                     <router-link to="/PcActivityThree"><div class="box"></div></router-link>
                     <img src="../assets/img/003.jpg" alt="" lazy="loading">
                 </div>
                 <div class="img_Box3">
                     <router-link to="/PcActivityThree"><div class="box"></div></router-link>
                      <img src="../assets/img/004.jpg" alt="" lazy="loading">
                 </div>  
                </el-card>
            </div>
        </div>
        <!--轮播图-->
        <div class="img_carousel">
        <el-carousel height="500px" direction="vertical" :autoplay="false">
        <el-carousel-item v-for="(item,index) in items" :key="index">
        <img v-lazy="item.img_url" alt="图片" lazy="loading" @click="handleWhell(item.id)">
        </el-carousel-item>
        </el-carousel>
        </div>
        <!--最新客照-->
        <div class="tltle_box1">
            <div class="box4_auto">
                 <img class="imgTitle" src="../assets/img/sample_top.png" alt="图片" lazy="loading"> 
                <el-row>
                <el-col  v-for="indx in indexs" :key="indx.id" >
                <el-card :body-style="{ padding: '0px' }" >
                <img v-lazy="indx.img_url" class="image" lazy="loading" @click="handleIndx(indx.id)">
                <div style="padding: 14px;"> 
                <span>{{indx.title}}</span>
                <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                </div>
                </div>
                </el-card>
                </el-col>
                </el-row>
            </div>
        </div>
    
         <!--视频图片标题 -->
        <div class="title_box2">
            <img src="../assets/img/real_photo.png" alt="图片" lazy>
            <img src="../assets/img/beauty_photo.png" alt="图片" lazy>
        </div>
        

         <!--客照影片-->
        <el-carousel :interval="4000" type="card" height="400px">
            <el-carousel-item v-for="videeo in videeos" :key="videeo.id">
                <video :src="videeo.video_url" autoplay loop muted preload></video>
             </el-carousel-item>
        </el-carousel>
        
       
        
    </div>
</template>
<script>

import videoGif from "../assets/vido/banner/banner01.jpg"
//轮播图
import bannerOne from "../assets/img/banner/banner01.jpg"
import bannerTwo from "../assets/img/banner/banner02.jpg"
import bannerThree from "../assets/img/banner/banner03.jpg"
import bannerFour from "../assets/img/banner/banner04.jpg"
//最新客照
import zsOne from "../assets/img/zs/zs01.jpg"
import zsTwo from "../assets/img/zs/zs02.jpg"
import zsThree from "../assets/img/zs/zs03.jpg"
import zsOFour from "../assets/img/zs/zs04.jpg"
import zsFive from "../assets/img/zs/zs05.jpg"
import zsSix from "../assets/img/zs/zs06.jpg"
import zsSeve from "../assets/img/zs/zs07.jpg"
import zsEight from "../assets/img/zs/zs08.jpg"

//最新客照
import vidoFour from "../assets/vido/banner/banner01.mp4"
import vidoFive from "../assets/vido/banner/banner02.mp4"
import vidoSix from "../assets/vido/banner/banner03.mp4"

export default {
    data(){
        return{
            currentDate:"GOLDEN LADIES",
            vidoGifs:[
                {id:1,img_url: videoGif}
            ],
            items:[
                {id:1,img_url: bannerOne},
                {id:2,img_url: bannerTwo},
                {id:3,img_url: bannerThree},
                {id:4,img_url: bannerFour},
            ],
            indexs:[
                 {id:1,img_url: zsOne, title:"缤纷假日"},
                 {id:2,img_url: zsTwo, title:"费加罗的婚礼"},
                 {id:3,img_url: zsThree, title:"传世爱恋"},
                 {id:4,img_url: zsOFour, title:"摩登时代"},
                 {id:5,img_url: zsFive, title:"梦中の婚礼"},
                 {id:6,img_url: zsSix, title:"繁花世界"},
                 {id:7,img_url: zsSeve, title:"海的嫁纱"},
                 {id:8,img_url: zsEight, title:"爱情交响曲"},
            ],
            videeos:[
                {id:1,video_url: vidoFour},
                {id:2,video_url: vidoFive},
                {id:3,video_url: vidoSix},
            ],
            
        }
    },
    
    methods:{
        /* handleImage(){
              //1.发送ajax请求给服务器
              var url = "http://127.0.0.1:3000/imageList"
              this.axios.get(url).then(result=>{
                this.items = result.data
              })
             }, */
            handleWhell(id){
                if(id == 1){
                    this.$router.push("/PcSceneFour")
                }
                else if(id == 2){
                    this.$router.push("/PcSceneOne")
                }
                else if(id == 3){
                    this.$router.push("/PcSceneSeven")
                }
                else{
                    this.$router.push("/PcSceneTwo")
                }
            },
           
           handlevideo(id){
               if(id == 1){
                   this.$router.push("/PcMicroFilm1")
               }
               else if(id == 2){
                   this.$router.push("/PcMicroFilm2")
               }
               else{
                   this.$router.push("/PcMicroFilm3")
               }
           },
           handleIndx(id){
               if(id == 1){
                   this.$router.push("/PcGuestOne")
               }
               else if(id == 2){
                   this.$router.push("/PcGuestTwo")
               }
               else if(id == 3){
                   this.$router.push("/PcGuestThree")
               }
               else if(id == 4){
                   this.$router.push("/PcGuestFour")
               }
               else if(id == 5){
                   this.$router.push("/PcGuestFive")
               }
               else if(id == 6){
                   this.$router.push("/PcGuestSix")
               }
               else if(id == 7){
                   this.$router.push("/PcGuestSeven")
               }
               else{
                   this.$router.push("/PcGuestEight")
               }
           },
          
    },
    
    
}
</script>
<style lang="scss">
//动态图
.banner_box{
    width: 100%;
    height: 480px;
    overflow: hidden;

    .vido{
        width: 100%;
        position: relative;
    }
    img{
        position: relative;
        width: 100%;
        height: 480px;
        top: -763px;
        -moz-animation: cssAnimation 0s ease-in 5s forwards;
        -webkit-animation: cssAnimation 0s ease-in 5s forwards;
        -o-animation: cssAnimation 0s ease-in 5s forwards;
        animation: cssAnimation 0s ease-in 5s forwards;
        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;

    }
    @keyframes cssAnimation {
    to {
        width:0;
        height:0;
        overflow:hidden;
        }
    }
    @-webkit-keyframes cssAnimation {
    to {
        width:0;
        height:0;
        visibility:hidden;
        }
    }

    .text{
        position: relative;
       top: -600px;
       h5{
           font-size: 40px;
           color: #fff;
           text-shadow: -3px 2px 4px rgba(29, 0, 14, 0.623);
           text-align: center;
       }
       p{
           font-size: 25px;
           text-align: center;
           color: rgb(255, 255, 255);
           text-shadow: -3px 2px 4px rgba(29, 0, 14, 0.651);
           line-height: 45px;
       }
    }
}
//最新动态
.title_box{
    width: 100%;
    background: #f4f4f4;
    margin: -3px 0;
    .box3_auto{
        width: 80%;
        margin: auto;
    }
    .box-card1{
        margin-top:-1%;
        width: 100%;
        
        .img_Box{
            width: 38%;
            float: left; 
           position: relative;
        }

        .img_Box2{
            width: 60%;
            float: left;
            margin-left: 2%;
            position: relative; 
        }
        
        .img_Box3{
            width: 29%;
            float: left;
            margin-left: 2%;
            margin-top: 2%;
            position: relative; 
        }
        
    }

          .box{
            width: 100%;
            height: 100%;
            position: absolute;
           background:linear-gradient(rgba(0, 0, 0, 0.466),rgba(255, 255, 255, 0));
            display: none;
        }
    
        img{
                width: 100%;
               
            }
    
    .img_Box:hover .box{
        display: block;
    }
    .img_Box1:hover .box{
        display: block;
    }
    .img_Box2:hover .box{
        display: block;
    }
    .img_Box3:hover .box{
        display: block;
    }
  
}

//轮播图
.img_carousel{
    width: 100%;
    margin-top: 1%;
    cursor:pointer;
}
 .el-carousel__container{
    
   background: #f4f4f4;
 }
 .el-carousel__item img{
     width: 100%;
     height: 500px;
 }

//最新客照
.tltle_box1{
    width: 100%;
    background:#f4f4f4;
    display: flex;
    justify-content: space-between;

    .box4_auto{
        width: 80%;
        margin: auto;
    }

    
    .imgTitle{
        width: 100%;
        height: 100px;
    }

    .el-col{
        width: 24%;
        margin-left: 1%;
         margin-top: 1%;
    }

    .el-card:hover{
        background:orangered;
         cursor:pointer;
    }
    .el-card:hover .time{
        color: #fff;
         cursor:pointer;
    }

    .el-card:hover span{
        color: #fff;
         cursor:pointer;
    }

    .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 8px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
    transition: transform 0.5s;
  }
  .image:hover{
    transform: scale(1.05);
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


.el-carousel__container{
        background: #fff;  
}

</style>