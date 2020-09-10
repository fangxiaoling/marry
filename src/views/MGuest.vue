<!--
 * @Author: your name
 * @Date: 2020-02-08 15:56:36
 * @LastEditTime: 2020-02-26 20:52:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lpw-app\src\views\MGuest.vue
 -->
<template>
    <div>
        <!--轮播图-->
        <el-carousel :interval="3000" arrow="always" height="200px">
            <el-carousel-item v-for="scene in scenes" :key="scene.id">
            <img v-lazy="scene.img_url" alt="图片" lazy="loading">
            </el-carousel-item>
        </el-carousel>
         <!--标题-->
        <div class="title_box">
            <img src="../assets/img/beauty_photo.png" alt="图片" lazy="loading">
        </div>
         <!--当季热推-->
         <div class="season_boxmm">
             <div class="season_auto">
                 <el-card class="box-card">
                <div slot="header" class="clearfix">
                <img class="img_item" src="../assets/img/kz_season.png" alt="图片" lazy="loading">
                <el-button class="text" style="float: right; padding: 0px 0px" type="text">MORE</el-button>
                </div>
                <div v-for="(itemk,index) in itemks" :key="index" class="text_item">
                    <div class="text_img">
                        <div class="img_box"></div>
                        <img v-lazy="itemk.img_url" alt="图片" lazy="loading">
                        <div class="text_box">
                         <p>{{itemk.title}}</p>
                        </div>
                    </div>
                    
                </div>
                </el-card>
                
             </div>
         </div>
         <!--标题-->
        <div class="title_box2">
            <img src="../assets/img/real_photo.png" alt="图片" lazy="loading">
            <img src="../assets/img/beauty_photo (1).png" alt="图片" lazy="loading">
        </div>
         <!--客照展示-->
      <div class="guest_boxm">
        <div class="guest_auto">
             <el-row >
                <el-col v-for="(more, index) in mores" :key="index" >
                    <el-card :body-style="{ padding: '0px' }">
                        <div class="el_imgBox" @click="chandleClick(more.id)">
                        <div class="img_box"></div>
                            <img v-lazy="more.img_url" class="image" lazy="loading">
                        </div>
                        <div style="padding: 14px;">
                            <span>{{more.title}}</span>
                            <div class="bottom clearfix">
                            <time class="time">{{more.text}}</time>
                        </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
      </div>

        <!--客照展示1-->
      <div class="guest_boxm" v-show="isShows">
        <div class="guest_auto">
            <el-row >
                <el-col v-for="(more, index) in moress" :key="index" >
                    <el-card :body-style="{ padding: '0px' }">
                    <div class="el_imgBox" @click="chandleClickOne(more.id)">
                        <div class="img_box"></div>
                            <img v-lazy="more.img_url" class="image" lazy="loading">
                        </div>
                    <div style="padding: 14px;">
                        <span>{{more.title}}</span>
                    <div class="bottom clearfix">
                        <time class="time">{{more.text}}</time>
                    </div>
                    </div>
                    </el-card>
                </el-col>
            </el-row>
            </div>
        </div>


        <!--查看更多-->
        <div class="see_boxm">
            <div class="see_auto">
                <div class="see_bug">
                    <el-button type="primary" plain @click="handleShows()">查看更多>></el-button>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
//轮播图
import bannerOne from "../assets/img/banner/xzbanner01.jpg"
import bannerTwo from "../assets/img/banner/banner006.jpg"
import bannerThree from "../assets/img/banner/banner007.jpg"

//当季热推
import djOne from "../assets/img/dj/dj01.jpg"
import djTwo from "../assets/img/dj/dj02.jpg"
import djThree from "../assets/img/dj/dj03.jpg"
import djFour from "../assets/img/dj/dj04.jpg"

//最新客照
import zsOne from "../assets/img/zs/zs01.jpg"
import zsTwo from "../assets/img/zs/zs02.jpg"
import zsThree from "../assets/img/zs/zs03.jpg"
import zsOFour from "../assets/img/zs/zs04.jpg"
import zsFive from "../assets/img/zs/zs05.jpg"
import zsSix from "../assets/img/zs/zs06.jpg"
import zsSeve from "../assets/img/zs/zs07.jpg"
import zsEight from "../assets/img/zs/zs08.jpg"
import zsNine from "../assets/img/zs/zs09.jpg"
import zsTen from "../assets/img/zs/zs10.jpg"
import zsEleven from "../assets/img/zs/zs11.jpg"
import zsTwelve from "../assets/img/zs/zs12.jpg"

export default {
    data(){
        return{
             scenes:[
                {id:1,img_url: bannerOne},
                {id:2,img_url: bannerTwo},
                {id:3,img_url: bannerThree},
             ], 
             itemks:[
                {id:1,img_url: djOne,title:"自然森系系列"},
                {id:2,img_url: djTwo,title:"玩趣视觉系列"},
                {id:3,img_url: djThree,title:"优雅白纱系列"},
                {id:4,img_url: djFour,title:"甜宠活力系列"},
             ],
             currentDate: new Date(),
             mores:[
                {id:1,img_url: zsOne,title:"刘先生&尹小姐",text:"Golden Ladies"},
                {id:2,img_url: zsTwo,title:"谭先生&周小姐",text:"Golden Ladies"},
                {id:3,img_url: zsThree,title:"胡先生&王小姐",text:"Golden Ladies"},
                {id:4,img_url: zsOFour,title:"罗先生&蒋小姐",text:"Golden Ladies"},
                {id:5,img_url: zsFive,title:"敖先生&曹小姐",text:"Golden Ladies"},
                {id:6,img_url: zsSix,title:"kk先生&桃桃小姐",text:"Golden Ladies"},
               
             ],
             
             moress:[
                {id:1,img_url: zsSeve,title:"李先生&陈小姐",text:"Golden Ladies"},
                {id:2,img_url: zsEight,title:"王先生&陆小姐",text:"Golden Ladies"},
                {id:3,img_url: zsNine,title:"严先生&欧小姐",text:"Golden Ladies"},
                {id:4,img_url: zsTen,title:"李先生&吴小姐",text:"Golden Ladies"},
                {id:5,img_url: zsEleven,title:"胡先生&崔小姐",text:"Golden Ladies"},
                {id:6,img_url: zsTwelve,title:"陈先生&龙小姐",text:"Golden Ladies"},
                
             ],
             
             isShows:false,
            
        }
    },
    methods:{

        chandleClickOne(id){
            if(id==1){
               this.$router.push("/MGuestNine")
          }
           if(id==2){
               this.$router.push("/MGuestTen")
          }
           if(id==3){
               this.$router.push("/MGuestEleven")
          }
           if(id==4){
               this.$router.push("/MGuestTwelve")
          }
        },
        /*
         handleImage5(){
            var url = "http://127.0.0.1:3000/imageList8"
            this.axios.get(url).then(result=>{
                this.scenes = result.data
            })
        },
        handleImage7(){
            var url = "http://127.0.0.1:3000/icons10"
            this.axios.get(url).then(result=>{
                this.itemks = result.data
            })
        },
        handleImage8(){
            var url = "http://127.0.0.1:3000/icons11"
            this.axios.get(url).then(result=>{
                this.mores = result.data
                
            })
        },*/
         handleShows(){
            this.isShows = true;
        },
      chandleClick(id){
          if(id==1){
               this.$router.push("/MGuestOne")
          }
          if(id==2){
               this.$router.push("/MGuestTwo")
          }
          if(id==3){
               this.$router.push("/MGuestThree")
          }
           if(id==4){
               this.$router.push("/MGuestFour")
          }
          if(id==5){
               this.$router.push("/MGuestFive")
          }
          if(id==6){
               this.$router.push("/MGuestSix")
          }
           if(id==7){
               this.$router.push("/MGuestSeven")
          }
           if(id==8){
               this.$router.push("/MGuestEight")
          }
           
      }
       
    },/*
    created(){
        this.handleImage5();
        this.handleImage7();
        this. handleImage8();
        
        
    }*/
}
</script>
<style lang="scss">
    *{
        padding: 0;
        margin: 0;
    }

    //当季热推
    .season_boxmm{
        width: 100%;
        overflow: hidden;
        background: #bdbdbd;
        .season_auto{
            width: 100%;
            margin: auto;

            .text {
            font-size: 14px;
          
            }
            
            .text_img{
                width: 48%;
                float: left;
                margin:10px 1%;
                p{
                    font-size: 18px;
                    text-align: center;
                   
                   
                }
            }
            
            .text{
                font-size: 20px;
                margin:20px 10px;
            }
             .text_img:hover{
                 color: rgb(255, 94, 0);
             }

            .clearfix:before,
            .clearfix:after {
                    display: table;
                    content: "";
                    }
            .clearfix:after {
                clear: both
                }

            .box-card {
                width: 100%;
                }
           .img_item{
               width: 50%;
           }
           .el-card__header{
               padding: 0;
           }  
           
        }
    }
    //标题
    .title_box2{
        margin-top: 20px;
    }
    //客照展示
    .guest_boxm{
        width: 100%;
        overflow: hidden;
        .guest_auto{
            width: 100%;
            margin: auto;

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
            
            .el-col{
                width: 48%;
                margin: 1% 1%;
            }
            .el_imgBox{
                position: relative;
                
            }

            .img_box{
                position: absolute;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.37);
                display: none;
            }
            .el_imgBox:hover .img_box{
                display: block;
            }
        }
    }

     //查看按钮
    .see_boxm{
        width: 100%;
        overflow: hidden;
        background: #ffffff; 
        padding-top:10px;

        .see_auto{
            width: 100%;
            margin: auto;

            .see_bug{
                width: 30%;
                margin: auto;
                margin-bottom: 10px;

               
            }
        }
    }
</style>