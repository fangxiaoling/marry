<template>
    <div>
        <!--轮播图-->
        <el-carousel trigger="click" height="500px">
            <el-carousel-item v-for="portrait in portraits" :key="portrait.id">
                <img v-lazy="portrait.img_url" alt="" lazy="loading">
            </el-carousel-item>
        </el-carousel>
        
        <!--写真集标题-->
        <div class="portrait_text">
            <div class="text_auto">
                <img src="../assets/img/xztitle.png" alt="" lazy>
            </div>
        </div>
        
          <!--写真集图片-->
          <div class="portrait_img">
              <div class="img_auto"> 
                  <div class="portrait_box" v-for="portraitImg in userList.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="portraitImg.id" @click="portraitItemImg(portraitImg.id)">
                     <div class="portraitImg_two">
                         <div class="box_text">
                            <p>{{portraitImg.text}}</p>
                         </div>
                         <div class="box"></div>
                         <img v-lazy="portraitImg.img_url" alt="" lazy="loading">
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
            currentPage:1, //初始页
            pagesize:8,    //    每页的数据
            userList: [],
            portraits:[
                {id:1,img_url: xzbannerOne},
                {id:2,img_url: xzbannerTwo},
                {id:3,img_url: xzbannerThree},
                {id:4,img_url: xzbannerFour},
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
                {id:1,img_url: xzjOne ,text:"主题：战士的誓言"},
                {id:2,img_url: xzjTwo ,text:"主题：云蔚天歌"},
                {id:3,img_url: xzjThree ,text:"主题：元气薇薇安"},
                {id:4,img_url: xzjFour ,text:"主题：元气少女"},
                {id:5,img_url: xzjFive ,text:"主题：邂逅桃心"},
                {id:6,img_url: xzjSix ,text:"主题：夏晴花语"},
                {id:7,img_url: xzjSeve ,text:"主题：夏、至美"},
                {id:8,img_url: xzjEight ,text:"主题：唯密天使"},
                {id:9,img_url: xzjNine ,text:"主题：桃蕊初放"},
                {id:10,img_url: xzjTen ,text:"主题：拾玉记"},
                {id:11,img_url: xzjTenOne,text:"主题：时尚芭莎"},
                {id:12,img_url: xzjTenTwo,text:"主题：热浪女神"},
                ]
          },
        portraitItemImgOne(id){
             if(id == 1){
                this.$router.push("/PcPortrait9")
            }
            else if(id == 2){
                this.$router.push("/PcPortrait10")
            }
            else if(id == 3){
                this.$router.push("/PcPortrait11")
            }
            else{
                this.$router.push("/PcPortrait12")
            }
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
                this.$router.push("/PcPortrait1")
            }
            else if(id == 2){
                this.$router.push("/PcPortrait2")
            }
            else if(id == 3){
                this.$router.push("/PcPortrait3")
            }
            else if(id == 4){
                this.$router.push("/PcPortrait4")
            }
            else if(id == 5){
                this.$router.push("/PcPortrait5")
            }
            else if(id == 6){
                this.$router.push("/PcPortrait6")
            }
            else if(id == 7){
                this.$router.push("/PcPortrait7")
            }
            else{
                this.$router.push("/PcPortrait8")
            }
           
        }
    },/*
    created() {
       // this.hangdelportraits();
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
    .portrait_text{
        width: 100%;

        .text_auto{
            width: 80%;
            margin: auto;
            
            img{
                width: 100%;
            }
        }
    }

    //写真集图片
    .portrait_img{
        width: 100%;
        overflow: hidden;

        .img_auto{
            width: 80%;
            margin: auto;

            .portrait_box{
                width: 24%;
                float: left;
                margin-left: 1%;
                margin-top: 0.5%;
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
                    position: absolute;
                    background: rgba(0, 0, 0, 0.459);
                    width: 100%;
                    height: 15%;
                    margin-top: 132%;
                   animation: animate 1s;
                    display: none;
                    
                    p{
                        font-size: 18px;
                        color: #fff;
                        text-align: center;
                        line-height: 60px;
                    }
                }
            }

            .portrait_box:hover .box{
                display: block;
                cursor:pointer;
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
               
                 .portrait_box:hover .box_text{
              
                display: block;
                }
        }
    }
</style>