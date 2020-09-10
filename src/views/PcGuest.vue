<template>
    <div>
        <!--轮播图-->
        <el-carousel :interval="5000" arrow="always" height="500px">
            <el-carousel-item v-for="scene in scenes" :key="scene.id">
            <img v-lazy="scene.img_url" alt="图片" lazy="loading">
            </el-carousel-item>
        </el-carousel>
         <!--标题-->
        <div class="title_box">
            <img src="../assets/img/beauty_photo.png" alt="图片" lazy="loading">
        </div>
         <!--当季热推-->
         <div class="season_box">
             <div class="season_auto">
                 <el-card class="box-card"> 
                <div slot="header" class="clearfix">
                <img class="img_item" src="../assets/img/kz_season.png" alt="图片" lazy="loading">
                <el-button style="float: right; padding: 20px 10px" type="text">MORE</el-button>
                </div>
                <div v-for="(itemk,index) in itemks" :key="index" class="text item">
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
      <div class="guest_box">
        <div class="guest_auto">
            <el-row >
                <el-col v-for="more in userList.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="more.id" >
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

         <div class="pasbox">
             <div class="pas_auto">
                  <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage"
                            :page-sizes="[4, 8, 10, 20]" 
                            :page-size="pagesize"         
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="userList.length">    <!--//这是显示总共有多少数据，-->
                    </el-pagination>
             </div>
         </div>

       


    </div>
</template>
<script>
//轮播图
import bannerOne from "../assets/img/banner/banner005.jpg"
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
         currentPage:1, //初始页
          pagesize:8,    //    每页的数据
          userList: [],

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
                {id:1,img_url: zsOne,title:"刘先生&尹小姐",text:"Golden Ladies"},
                {id:2,img_url: zsTwo,title:"谭先生&周小姐",text:"Golden Ladies"},
                {id:3,img_url: zsThree,title:"胡先生&王小姐",text:"Golden Ladies"},
                {id:4,img_url: zsOFour,title:"罗先生&蒋小姐",text:"Golden Ladies"},
                {id:5,img_url: zsFive,title:"敖先生&曹小姐",text:"Golden Ladies"},
                {id:6,img_url: zsSix,title:"kk先生&桃桃小姐",text:"Golden Ladies"},
                {id:7,img_url: zsSeve,title:"李先生&陈小姐",text:"Golden Ladies"},
                {id:8,img_url: zsEight,title:"王先生&陆小姐",text:"Golden Ladies"},
                {id:9,img_url: zsNine,title:"严先生&欧小姐",text:"Golden Ladies"},
                {id:10,img_url: zsTen,title:"李先生&吴小姐",text:"Golden Ladies"},
                {id:11,img_url: zsEleven,title:"胡先生&崔小姐",text:"Golden Ladies"},
                {id:12,img_url: zsTwelve,title:"陈先生&龙小姐",text:"Golden Ladies"},
                ]
          },

        chandleClickOne(id){
           if(id==1){
               this.$router.push("/PcGuestNine")
          }
           if(id==2){
               this.$router.push("/PcGuestTen")
          }
           if(id==3){
               this.$router.push("/PcGuestEleven")
          }
           if(id==4){
               this.$router.push("/PcGuestTwelve")
          }

        },
      chandleClick(id){
          if(id==1){
               this.$router.push("/PcGuestOne")
          }
           if(id==2){
               this.$router.push("/PcGuestTwo")
          }
           if(id==3){
               this.$router.push("/PcGuestThree")
          }
           if(id==4){
               this.$router.push("/PcGuestFour")
          }
           if(id==5){
               this.$router.push("/PcGuestFive")
          }
          if(id==6){
               this.$router.push("/PcGuestSix")
          }
           if(id==7){
               this.$router.push("/PcGuestSeven")
          }
           if(id==8){
               this.$router.push("/PcGuestEight")
          }
          
      }
       
    },
}
</script>
<style lang="scss">
    *{
        padding: 0;
        margin: 0;
    }
    //当季热推
    .season_box{
        width: 100%;
        overflow: hidden;
        background: #f3f2f2;
        .season_auto{
            width: 80%;
            margin: auto;

            .text {
            font-size: 14px;
          
            }
            .text_img{
                position: relative;
                width: 24%;
                float: left;
                margin-left: 1%;
                margin-top:10px;
                p{
                    font-size: 18px;
                    text-align: center;
                    line-height: 38px;
                }
            }
            .img_box{
                width: 100%;
                height: 100%;
                 position: absolute;
                background:linear-gradient(rgba(0, 0, 0, 0.466),rgba(255, 255, 255, 0));
                display:none;
            }
            .text_img:hover .img_box{
                display: block;
                cursor:pointer;
                
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
               width: 15%;
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
    .guest_box{
        width: 100%;
        overflow: hidden;
        .guest_auto{
            width: 80%;
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
                width: 24%;
                margin: 0.5% 0.5%;
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
                cursor:pointer;
            }
        }
    }

    

    .pasbox{
        width: 100%;
        .pas_auto{
            width: 80%;
            margin: auto;
        }
    }
     
</style>