<template>
    <div>
        <!--视频轮播--> 
        <div class="video_box">   
            <el-carousel trigger="click" height="500px">
            <el-carousel-item v-for="video in videos" :key="video.id">
             <video :src="video.video_url" autoplay loop muted preload></video>
            </el-carousel-item>
            </el-carousel>
        </div>
         <!--视频图片标题-->
        <div class="title_box2">
            <img src="../assets/img/real_photo.png" alt="图片" lazy>
            <img src="../assets/img/beauty_photo (1).png" alt="图片" lazy>
        </div>
        <!--视频图片-->
        <div class="FilmBox">
            <div class="FilmAuto">
                <div v-for="film in userList.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="film.id">
                    <div class="filmImg" @click="changClick(film.id)">
                        <div class="box_text">
                            <p>{{film.title}}</p>
                         </div>
                    <div class="boxs"></div>
                    <img v-lazy="film.img_url" alt="图片" lazy="loading">
                    </div>
                </div>
            </div>
        </div>

         <div class="pasbox">
             <div class="pas_auto">
                  <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage"
                            :page-sizes="[4, 8, 10]" 
                            :page-size="pagesize"         
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="userList.length">    <!--//这是显示总共有多少数据，-->
                    </el-pagination>
             </div>
         </div>

    </div>
</template>
<script>
//最新客照轮播
import vidoOne from "../assets/vido/banner/banner02.mp4"
import vidoTwo from "../assets/vido/banner/banner03.mp4"
import vidoThree from "../assets/vido/banner/banner01.mp4"
//最新视频图片
import zsOne from "../assets/img/wd/wd01.jpg" 
import zsTwo from "../assets/img/wd/wd02.jpg"
import zsThree from "../assets/img/wd/wd03.jpg"
import zsOFour from "../assets/img/wd/wd04.jpg"
import zsFive from "../assets/img/wd/wd05.jpg"
import zsSix from "../assets/img/wd/wd06.jpg"
import zsSeve from "../assets/img/wd/wd07.jpg"
import zsEight from "../assets/img/wd/wd08.jpg"
import zsNine from "../assets/img/wd/wd09.jpg"
import zsTen from "../assets/img/wd/wd10.jpg"
//最新视频
import zsOnes from "../assets/vido/wdy01.mp4" 
import zsTwos from "../assets/vido/wdy02.mp4"
import zsThrees from "../assets/vido/wdy03.mp4"
import zsOFours from "../assets/vido/wdy04.mp4"
import zsFives from "../assets/vido/wdy05.mp4"
import zsSixs from "../assets/vido/wdy06.mp4"
import zsSeves from "../assets/vido/wdy07.mp4"
import zsEights from "../assets/vido/wdy10.mp4"
import zsNines from "../assets/vido/wdy09.mp4"
import zsTens from "../assets/vido/wdy08.mp4"

export default {
    data(){
        return{
          currentPage:1, //初始页
          pagesize:8,    //    每页的数据
          userList: [],
            videos:[
                {id:1,video_url: vidoOne},
                {id:2,video_url: vidoTwo},
                {id:3,video_url: vidoThree},
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
                {id:1,img_url: zsOne, video_url:zsOnes, title:"铂爵旅拍巴厘岛"},
                {id:2,img_url: zsTwo, video_url:zsTwos, title:"铂爵旅拍大理"},
                {id:3,img_url: zsThree, video_url:zsThrees, title:"铂爵旅拍巴厘岛"},
                {id:4,img_url: zsOFour, video_url:zsOFours, title:"铂爵旅拍香格里拉"},
                {id:5,img_url: zsFive, video_url:zsFives, title:"铂爵旅拍丽江"},
                {id:6,img_url: zsSix, video_url:zsSixs, title:"铂爵旅拍杭州"},
                {id:7,img_url: zsSeve, video_url:zsSeves, title:"铂爵旅拍香格里拉"},
                {id:8,img_url: zsEight, video_url:zsEights, title:"铂爵旅拍普吉岛"},
                {id:9,img_url: zsNine, video_url:zsNines, title:"铂爵旅拍杭州"},
                {id:10,img_url: zsTen, video_url:zsTens, title:"铂爵旅拍香格里拉"},
                ]
          },
        changClickOne(id){
               
                if(id==7){
                    this.$router.push("/PcMicroFilm7")
                }
                else if(id==8){
                    this.$router.push("/PcMicroFilm8")
                }
                else if(id==9){
                    this.$router.push("/PcMicroFilm9")
                }
                else{
                    this.$router.push("/PcMicroFilm10")
                } 
            },

         /*
        handleVideo(){
                var url = "http://127.0.0.1:3000/CustomerMicroFilm"
                this.axios.get(url).then(result=>{
                    this.films = result.data
                })
            },
            handleVideo01(){
                var url = "http://127.0.0.1:3000/CustomerMicroFilmVideos"
                this.axios.get(url).then(result=>{
                    this. videos = result.data
                })
            },*/
            changClick(id){
                if(id == 1){
                    this.$router.push("/PcMicroFilm1")
                }
                else if(id==2){
                    this.$router.push("/PcMicroFilm2")
                }
                else if(id==3){
                    this.$router.push("/PcMicroFilm3")
                }
                else if(id==4){
                    this.$router.push("/PcMicroFilm4")
                }
                else if(id==5){
                    this.$router.push("/PcMicroFilm5")
                }
                else if(id==6){
                    this.$router.push("/PcMicroFilm6")
                }
                else if(id==7){
                    this.$router.push("/PcMicroFilm7")
                }
                else if(id==8){
                    this.$router.push("/PcMicroFilm8")
                }
                else if(id==9){
                    this.$router.push("/PcMicroFilm9")
                }
                else{
                    this.$router.push("/PcMicroFilm10")
                } 
            }
    },/*
    created(){
        this.handleVideo();
        this.handleVideo01();
    }*/
}
</script>
<style lang="scss">
    //视频轮播
   .video_box{
       width: 100%;
       video{
           width: 100%;
           
       }
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
  
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
   }
    //视频图片
    .FilmBox{
        width: 100%;
        overflow: hidden;
        
        .FilmAuto{
            width: 80%;
            margin: auto;

            video{
                width: 100%;  
            }

            .filmImg{
                width: 48%;
                float: left;
                margin: 1% 1%;
                position: relative;

                img{
                    width: 100%;
                    
                }
                .box_text{
                    position: absolute;
                    background: rgba(0, 0, 0, 0.459);
                    width: 100%;
                    height: 15%;
                    margin-top:56.5%;
                   animation: animate 1s;
                    display: none;
                    
                    p{
                        font-size: 100%;
                        color: #fff;
                        text-align: center;
                        line-height: 310%;
                    }
                }
                .boxs{
                    width: 100%;
                    height: 100%;
                    background:linear-gradient(rgba(0, 0, 0, 0.781),rgba(255, 255, 255, 0));
                    position: absolute;
                    display: none;
                }

            }
            @keyframes animate{
                from {
                height: 0px;
                top : 15%;
                }
                to {
                    height: 15%;
                    top : 0px;
                    }
                    }
            .filmImg:hover .boxs{
                display: block;
                cursor:pointer;
            }
            .filmImg:hover .box_text{
              
                display: block;
            }
            
            
        }
    }
</style>