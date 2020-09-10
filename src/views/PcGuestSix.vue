<!--
 * @Author: your name
 * @Date: 2020-02-08 15:56:36
 * @LastEditTime: 2020-02-26 18:50:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lpw-app\src\views\PcGuestSix.vue
 -->
<template>
    <div>
        <!--标题-->
        <div class="gust_text">
        <img src="../assets/img/goldenladiesss.png" alt="图片" lazy>
        <img src="../assets/img/season_kz.png" alt="图片" lazy>
         <img src="../assets/img/beauty_photo.png" alt="图片" lazy>
         </div>
          <!--内容图片-->
        <div class="gust_box">
            <div class="box_auto">
             <img v-for="one in ones" :key="one.id" v-lazy="one.img_url" alt="图片" lazy>
            </div>
        </div>
    </div>
</template>
<script>
import kzOne from "../assets/img/kz/kz50.jpg"
import kzTwo from "../assets/img/kz/kz51.jpg"
import kzThree from "../assets/img/kz/kz52.jpg"
import kzOFour from "../assets/img/kz/kz53.jpg"
import kzFive from "../assets/img/kz/kz54.jpg"
import kzSix from "../assets/img/kz/kz55.jpg"
import kzSeve from "../assets/img/kz/kz56.jpg"
import kzEight from "../assets/img/kz/kz57.jpg"
import kzNine from "../assets/img/kz/kz58.jpg"
import kzTen from "../assets/img/kz/kz59.jpg"
import kzEleven from "../assets/img/kz/kz60.jpg"
import kzTwelve from "../assets/img/kz/kz61.jpg"
import kzThirteen from "../assets/img/kz/kz62.jpg"

export default {
    data(){
        return{
           ones:[
                {id:1,img_url: kzOne},
                {id:2,img_url: kzTwo},
                {id:3,img_url: kzThree},
                {id:4,img_url: kzOFour},
                {id:5,img_url: kzFive},
                {id:6,img_url: kzSix},
                {id:7,img_url: kzSeve},
                {id:8,img_url: kzEight},
                {id:9,img_url: kzNine},
                {id:10,img_url: kzTen},
                {id:11,img_url: kzEleven},
                {id:12,img_url: kzTwelve},
                {id:13,img_url: kzThirteen},
               
           ],
        }
    },/*
    methods:{
         handleImage20(){
            var url = "http://127.0.0.1:3000/guestPhotoSix"
            this.axios.get(url).then(result=>{
                this.ones = result.data
            })
        }
    },
    created(){
        this.handleImage20();
    }*/
}
</script>
<style lang="scss">
    //标题
    .gust_text{
        margin-top: 40px;
        img{
            width: 100%;
        }
    }
    //正文
    .gust_box{
        width: 100%;
        overflow: hidden;
        .box_auto{
            width: 80%;
            margin: auto;
            img{
            width: 100%;
           
    }   
        }
    }
</style>