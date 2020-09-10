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
         <!--视频图片标题-->
        <div class="title_box2">
            <img src="../assets/img/real_photo.png" alt="图片" lazy="loading">
            <img src="../assets/img/beauty_photo (1).png" alt="图片" lazy="loading">
        </div>
        <!--视频图片-->
        <div class="FilmBoxm" >
            <div class="FilmAuto">
                <div v-for="(film,index) in films" :key="index">
                <div class="filmImg" @click="changClick(film.id)">
                <div class="box_text">
                    <p>{{film.title}}</p>
                </div>
                <div class="box"></div>
                <img v-lazy="film.img_url" alt="图片" lazy="loading">
                </div>
            </div>
            </div>
        </div>

        <!--视频图片1-->
        <div class="FilmBoxm" v-show="isShowsm">
            <div class="FilmAuto">
                <div v-for="(film,index) in filmss" :key="index">
                <div class="filmImg" @click="changClickOne(film.id)">
                <div class="box_text">
                    <p>{{film.title}}</p>
                </div>
                <div class="box"></div>
                <img v-lazy="film.img_url" alt="图片" lazy="loading">
                </div>
            </div>
            </div>
        </div>

        <!--查看更多-->
        <div class="see_boxm">
            <div class="see_auto">
                <div class="see_bug">
                    <el-button type="primary" plain @click="handleShowsm()">查看更多>></el-button>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
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
            films:[
                 {id:1,img_url: zsOne, video_url:zsOnes, title:"铂爵旅拍巴厘岛"},
                {id:2,img_url: zsTwo, video_url:zsTwos, title:"铂爵旅拍大理"},
                {id:3,img_url: zsThree, video_url:zsThrees, title:"铂爵旅拍巴厘岛"},
                {id:4,img_url: zsOFour, video_url:zsOFours, title:"铂爵旅拍香格里拉"},
                {id:5,img_url: zsFive, video_url:zsFives, title:"铂爵旅拍丽江"},
                {id:6,img_url: zsSix, video_url:zsSixs, title:"铂爵旅拍杭州"},
            ],
             filmss:[
                {id:1,img_url: zsSeve, video_url:zsSeves, title:"铂爵旅拍香格里拉"},
                {id:2,img_url: zsEight, video_url:zsEights, title:"铂爵旅拍普吉岛"},
                {id:3,img_url: zsNine, video_url:zsNines, title:"铂爵旅拍杭州"},
                {id:4,img_url: zsTen, video_url:zsTens, title:"铂爵旅拍香格里拉"},
            ],
            videos:[
                {id:1,img_url: zsOne},
                {id:2,img_url: zsTwo},
                {id:3,img_url: zsThree},
            ],
            isShowsm:false,
           
        }
    },
    methods:{
       handleShowsm(){
            this.isShowsm = true
        },

        changClickOne(id){
                
                if( id == 7){
                    this.$router.push("/MMicroFilm7")
                }
                 else if( id == 8){
                    this.$router.push("/MMicroFilm8")
                }
                 else if( id == 9){
                    this.$router.push("/MMicroFilm9")
                }
                 else{
                    this.$router.push("/MMicroFilm10")
                }
            },

        handleShows(){
            this.isShows = true;
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
                    this.$router.push("/MMicroFilm1")
                }
                else if( id == 2){
                    this.$router.push("/MMicroFilm2")
                }
                 else if( id == 3){
                    this.$router.push("/MMicroFilm3")
                }
                 else if( id == 4){
                    this.$router.push("/MMicroFilm4")
                }
                 else if( id == 5){
                    this.$router.push("/MMicroFilm5")
                }
                 else{
                    this.$router.push("/MMicroFilm6")
                }
                 
            }
    },
    /*
    created(){
        this.handleVideo();
        this.handleVideo01();
    }*/
}
</script>
<style lang="scss">
    //视频轮播
   .video_boxm{
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
    .FilmBoxm{
        width: 100%;
        overflow: hidden;
        
        .FilmAuto{
            width: 100%;
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
                        font-size: 10px;
                        color: #fff;
                        text-align: center;
                        line-height: 18px;
                    }
                }
                .box{
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
            .filmImg:hover .box{
                display: block;
            }
            .filmImg:hover .box_text{
              
                display: block;
            }
            
            
        }
    }
</style>