<!--
 * @Author: your name
 * @Date: 2020-02-08 15:56:36
 * @LastEditTime: 2020-02-26 18:49:28
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \lpw-app\src\views\PcGuestTwo.vue
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
import kzOne from "../assets/img/kz/kz06.jpg"
import kzTwo from "../assets/img/kz/kz07.jpg"
import kzThree from "../assets/img/kz/kz08.jpg"
import kzOFour from "../assets/img/kz/kz09.jpg"
import kzFive from "../assets/img/kz/kz10.jpg"
import kzSix from "../assets/img/kz/kz11.jpg"
import kzSeve from "../assets/img/kz/kz12.jpg"
import kzEight from "../assets/img/kz/kz13.jpg"
import kzNine from "../assets/img/kz/kz14.jpg"
import kzTen from "../assets/img/kz/kz15.jpg"
import kzEleven from "../assets/img/kz/kz16.jpg"
import kzTwelve from "../assets/img/kz/kz17.jpg"
import kzThirteen from "../assets/img/kz/kz18.jpg"

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
         handleImage16(){
            var url = "http://127.0.0.1:3000/guestPhotoTwo"
            this.axios.get(url).then(result=>{
                this.ones = result.data
            })
        }
    },
    created(){
        this.handleImage16();
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