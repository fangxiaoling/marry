<template>
    <div>
        <!--轮播图-->
        <el-carousel trigger="click" height="200px">
            <el-carousel-item v-for="portrait in portraits" :key="portrait.id">
                <img v-lazy="portrait.img_url" alt="图片" lazy="loading">
            </el-carousel-item>
        </el-carousel>
        
        <!--写真集标题-->
        <div class="portrait_textm">
            <div class="text_auto">
                <img src="../assets/img/xztitle.png" alt="" lazy="loading">
            </div>
        </div>
        
          <!--写真集图片-->
          <div class="portrait_imgm">
              <div class="img_auto">
                  <div class="portrait_box" v-for="portraitImg in portraitImgs" :key="portraitImg.id" >
                     <div class="portraitImg_two" @click="portraitItemImg(portraitImg.id)">
                         <div class="box"></div>
                         <img v-lazy="portraitImg.img_url" alt="" lazy="loading">
                     </div>
                     <div class="box_text">
                            <p>{{portraitImg.text}}</p>
                    </div>
                  </div>
              </div>
          </div>

           <!--写真集图片1-->
          <div class="portrait_imgm" v-show="isShowsm">
              <div class="img_auto">
                  <div class="portrait_box" v-for="portraitImg in portraitImgss" :key="portraitImg.id" >
                     <div class="portraitImg_two" @click="portraitItemImgOne(portraitImg.id)">
                         <div class="box"></div>
                         <img v-lazy="portraitImg.img_url" alt="" lazy="loading">
                     </div>
                     <div class="box_text">
                            <p>{{portraitImg.text}}</p>
                    </div>
                  </div>
              </div>
          </div>

         <!--查看更多-->
        <div class="see_boxm">
            <div class="see_auto">
                <div class="see_bug">
                    <el-button type="primary" plain @click="handleShowsmm()">查看更多>></el-button>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
//轮播图
import xzbannerOne from "../assets/img/banner/xzbanner03.jpg"
import xzbannerTwo from "../assets/img/banner/xzbanner02.jpg"
import xzbannerThree from "../assets/img/banner/xzbanner01.jpg"
import xzbannerFour from "../assets/img/banner/xzbanner04.jpg"

//写真集
import xzjOne from "../assets/img/xzj/xzj01.jpg"
import xzjTwo from "../assets/img/xzj/xzj02.jpg"
import xzjThree from "../assets/img/xzj/xzj03.jpg"
import xzjFour from "../assets/img/xzj/xzj04.jpg"
import xzjFive from "../assets/img/xzj/xzj05.jpg"
import xzjSix from "../assets/img/xzj/xzj06.jpg"
import xzjSeve from "../assets/img/xzj/xzj07.jpg"
import xzjEight from "../assets/img/xzj/xzj08.jpg"
import xzjNine from "../assets/img/xzj/xzj09.jpg"
import xzjTen from "../assets/img/xzj/xzj10.jpg"
import xzjTenOne from "../assets/img/xzj/xzj11.jpg"
import xzjTenTwo from "../assets/img/xzj/xzj12.jpg"

export default {
    data(){
        return{
            isShowsm:false,
            portraits:[
                {id:1,img_url: xzbannerOne},
                {id:2,img_url: xzbannerTwo},
                {id:3,img_url: xzbannerThree},
                {id:4,img_url: xzbannerFour},
            ],
            portraitImgs:[
                {id:1,img_url: xzjOne ,text:"主题：战士的誓言"},
                {id:2,img_url: xzjTwo ,text:"主题：云蔚天歌"},
                {id:3,img_url: xzjThree ,text:"主题：元气薇薇安"},
                {id:4,img_url: xzjFour ,text:"主题：元气少女"},
                {id:5,img_url: xzjFive ,text:"主题：邂逅桃心"},
                {id:6,img_url: xzjSix ,text:"主题：夏晴花语"},
               
            ],
            portraitImgss:[
                {id:1,img_url: xzjSeve ,text:"主题：夏、至美"},
                {id:2,img_url: xzjEight ,text:"主题：唯密天使"},
                {id:3,img_url: xzjNine ,text:"主题：桃蕊初放"},
                {id:4,img_url: xzjTen ,text:"主题：拾玉记"},
                {id:5,img_url: xzjTenOne,text:"主题：时尚芭莎"},
                {id:6,img_url: xzjTenTwo,text:"主题：热浪女神"},
            ],
        }
    },
    methods:{
        portraitItemImgOne(id){
            if(id == 1){
                this.$router.push("/MPortrait7")  
            }
            else if(id == 2){
                this.$router.push("/MPortrait8")  
            }
            else if(id == 3){
                this.$router.push("/MPortrait9")  
            }
            else if(id == 4){
                this.$router.push("/MPortrait10")  
            }
            else if(id == 5){
                this.$router.push("/MPortrait11")  
            }
            else{
                this.$router.push("/MPortrait12")  
            }
        },
        handleShowsmm(){
            this.isShowsm = true;
        },
        /*
        hangdelportraits(){
            var url ="http://127.0.0.1:3000/ImgPortrait"
            this.axios.get(url).then(result=>{
                this.portraits = result.data
            })
        },
        hangdelPortraitImage(){
            var url ="http://127.0.0.1:3000/ImgPortraitImage"
            this.axios.get(url).then(result=>{
                this.portraitImgs = result.data
            })
        },*/
        portraitItemImg(id){
            if(id == 1){
                this.$router.push("/MPortrait1")
            }
            else if(id == 2){
                this.$router.push("/MPortrait2")
            }
            else if(id == 3){
                this.$router.push("/MPortrait3")  
            }
            else if(id == 4){
                this.$router.push("/MPortrait4")  
            }
            else if(id == 5){
                this.$router.push("/MPortrait5")  
            }
            else{
                this.$router.push("/MPortrait6")  
            }
            
        }
    },
    /*
    created() {
        this.hangdelportraits();
        this.hangdelPortraitImage();
    },*/
}
</script>
<style lang="scss">
    //轮播图
    .el-carousel{
        width: 100%;
       
        img{
            width: 100%;
        }
    }

    //写真集标题
    .portrait_textm{
        width: 100%;

        .text_auto{
            width: 100%;
            margin: auto;
            
            img{
                width: 100%;
            }
        }
    }

    //写真集图片
    .portrait_imgm{
        width: 100%;
        overflow: hidden;

        .img_auto{
            width: 100%;
            margin: auto;

            .portrait_box{
                width: 48%;
                float: left;
                margin-left: 1%;
                margin-top: 2%;
                position: relative;

                .box{
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    background:linear-gradient(rgba(0, 0, 0, 0.685),rgba(255, 255, 255, 0));
                    display: none;
                }
                img{
                    width: 100%;
                    height: 100%;
                    
                }
                .box_text{
                    background: rgb(243, 9, 9);
                    width: 100%;
                    height: 15%;
                    display: block;
                    margin-top: -2.5%;
                    
                    p{
                        font-size: 17px;
                        color: #fff;
                        text-align: center;
                        line-height: 40px;
                    }
                }
            }
            .portrait_box:hover .box{
                display: block;
            }

            

        }
    }
</style>