<template>
    <div>
       <!--视频轮播--> 
        <div class="video_boxm">   
           <el-carousel trigger="click" height="200px">
            <el-carousel-item v-for="video in videos" :key="video.id">
            <img v-lazy="video.img_url" alt="图片" lazy="loading">
            </el-carousel-item>
            </el-carousel>
        </div>

        <!--最新动态标题-->
        <div class="title_boxm">
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
        <div class="img_carouselm">
        <el-carousel height="200px" direction="vertical" :autoplay="false">
        <el-carousel-item v-for="(item,index) in items" :key="index">
        <img v-lazy="item.img_url" alt="图片" lazy="loading" @click="handleWhellm(item.id)">
        </el-carousel-item>
        </el-carousel>
        </div>


         <!--最新客照-->
        <div class="tltle_box11">
            <div class="box4_auto">
                 <img class="imgTitle" src="../assets/img/sample_top.png" alt="图片" lazy="loading">
                <el-row>
                <el-col  v-for="index in indexs" :key="index.id">
                <el-card :body-style="{ padding: '0px' }">
                <img v-lazy="index.img_url" class="image" lazy="loading" @click="handleIndex(index.id)">
                <div style="padding: 14px;">
                <span>{{index.title}}</span>
                <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                </div>
                </div>
                </el-card>
                </el-col>
                </el-row>
            </div>
        </div>

         <!--视频图片标题-->
        <div class="title_box2">
            <img src="../assets/img/real_photo.png" alt="图片" lazy="loading">
            <img src="../assets/img/beauty_photo.png" alt="图片" lazy="loading">
        </div>


         <!--客照影片-->
        <el-carousel :interval="4000" type="card" height="150px">
            <el-carousel-item v-for="videeo in videeos" :key="videeo.id">
                <img v-lazy="videeo.video_url"
                @click="handlevideo(videeo.id)">
             </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
//轮播图
import bannerOne from "../assets/img/banner/banner01.jpg"
import bannerTwo from "../assets/img/banner/banner02.jpg"
import bannerThree from "../assets/img/banner/banner03.jpg"
import bannerFour from "../assets/img/banner/banner04.jpg"
import bannerFive from "../assets/img/banner/banner007.jpg"
import bannerSix from "../assets/img/banner/xzbanner03.jpg"
import bannerSeve from "../assets/img/banner/banner02.jpg"
//最新客照
import zsOne from "../assets/img/zs/zs01.jpg"
import zsTwo from "../assets/img/zs/zs02.jpg"
import zsThree from "../assets/img/zs/zs03.jpg"
import zsOFour from "../assets/img/zs/zs04.jpg"
import zsFive from "../assets/img/zs/zs05.jpg"
import zsSix from "../assets/img/zs/zs06.jpg"

//最新客照
import vidoOne from "../assets/img/wd/wd04.jpg"
import vidoTwo from "../assets/img/wd/wd05.jpg"
import vidoThree from "../assets/img/wd/wd06.jpg"


export default {
    data(){
        return{
             currentDate:"GOLDEN LADIES",
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
             ],
              videeos:[
                {id:1,video_url: vidoOne},
                {id:2,video_url: vidoTwo},
                {id:3,video_url: vidoThree},
              ],
               videos:[
                {id:1,img_url: bannerFive},
                {id:2,img_url: bannerSix},
                {id:3,img_url: bannerSeve},
            ],
        }
    },
     methods:{
         /*
        handleImage(){
              //1.发送ajax请求给服务器
              var url = "http://127.0.0.1:3000/imageList"
              this.axios.get(url).then(result=>{
                this.items = result.data
              })
             },
            handleImage3(){
                var url = "http://127.0.0.1:3000/imageList3"
                this.axios.get(url).then(result=>{
                    this.indexs = result.data
                })
            },*/
             handleWhellm(id){
                if(id == 1){
                    this.$router.push("/MSceneFour")
                }
                else if(id == 2){
                    this.$router.push("/MSceneOne")
                }
                else if(id == 3){
                    this.$router.push("/MSceneSeven")
                }
                else{
                    this.$router.push("/MSceneTwo")
                }
            },
            /*
             handleVideoOne(){
                var url = "http://127.0.0.1:3000/CustomerMicroFilmVideos"
                this.axios.get(url).then(result=>{
                    this. videeos = result.data
                })
            },
            */
            handlevideo(id){
               if(id == 1){
                   this.$router.push("/MMicroFilm1")
               }
               else if(id == 2){
                   this.$router.push("/MMicroFilm2")
               }
               else{
                   this.$router.push("/MMicroFilm3")
               }
           }, handleIndex(id){
               if(id == 1){
                   this.$router.push("/MGuestOne")
               }
                else if(id == 2){
                   this.$router.push("/MGuestTwo")
               }
               else if(id == 3){
                   this.$router.push("/MGuestThree")
               }
               else if(id == 4){
                   this.$router.push("/MGuestFour")
               }
               else if(id == 5){
                   this.$router.push("/MGuestFive")
               }
               else {
                   this.$router.push("/MGuestSix")
               }
              
           }

    },
    /*
    created(){
        this.handleImage();
        this.handleImage3();
        this.handleVideoOne();
    }*/
}
</script>
<style lang="scss">
//动态图
.banner_box{
    width: 100%;

    video{
        width: 100%;
    }
}
//最新动态
.title_boxm{
    width: 100%;
    background: #f4f4f4;
    margin: -3px 0;
    .box3_auto{
        width: 100%;
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
            margin-top: 0.5%;
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
.img_carouselm{
    width: 100%;
    margin-top: 1%;

    .el-carousel__container{
    background: #f4f4f4;
    }

    .el-carousel__item img{
     width: 100%;
     height: 200px;
    }
}
 
//最新客照
 .box-card1{
    width: 100%;
    h2{
        font-size: 16px;
    }

    p{
        font-size: 12px;
    }
    .boxcard_img{
        float: left;
        max-width: 100%;
    }

    .el-card{
        max-width: 100%;
        float: right;
         padding: 0;
         margin: 0;
         margin-top:1.5%; 
    }
    .el-card:hover{
        background: orangered;
        color: #fff;
    }
    .el-card__body{
        padding: 0;
    }
    .item_img{
       width: 28%;
       float: left; 
       
    }
    span{
        float: right;
        margin-top:8%;

        h2{
            font-size: 0.8rem;
            font-weight: bold;
        }
        p{
            font-size: 0.5rem;
        }
       
    }
}

//最新客照
.tltle_box11{
    width: 100%;
    background:#f4f4f4;

    .imgTitle{
        width: 100%;
    }

    .el-col{
        width: 49%;
        margin-left: 1%;
         margin-top: 1%;
    }

    .el-card:hover{
        background:orangered;
    }
    .el-card:hover .time{
        color: #fff
    }

    .el-card:hover span{
        color: #fff
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