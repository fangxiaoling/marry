<!--
 * @Author: your name
 * @Date: 2020-02-08 15:56:36
 * @LastEditTime: 2020-02-24 22:03:49
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \lpw-app\src\views\MGuestTwelve.vue
 -->
<template>
    <div>
       
          <!--内容图片-->
        <div class="gust_boxm">
            <div class="box_auto">
             <img v-for="one in ones" :key="one.id" v-lazy="one.img_url" alt="图片" lazy="loading">
            </div>
        </div>
    </div>
</template>
<script>
import kzOne from "../assets/img/kz/kz111.jpg"
import kzTwo from "../assets/img/kz/kz112.jpg"
import kzThree from "../assets/img/kz/kz113.jpg"
import kzOFour from "../assets/img/kz/kz114.jpg"
import kzFive from "../assets/img/kz/kz115.jpg"
import kzSix from "../assets/img/kz/kz116.jpg"
import kzSeve from "../assets/img/kz/kz117.jpg"
import kzEight from "../assets/img/kz/kz118.jpg"
import kzNine from "../assets/img/kz/kz119.jpg"
import kzTen from "../assets/img/kz/kz120.jpg"


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
           ],
        }
    },/*
    methods:{
         handleImage26(){
            var url = "http://127.0.0.1:3000/guestPhotoTwelve"
            this.axios.get(url).then(result=>{
                this.ones = result.data
            })
        }
    },
    created(){
        this.handleImage26();
    }*/
}
</script>
<style lang="scss">
    //正文
    .gust_boxm{
        width: 100%;
        overflow: hidden;
        .box_auto{
            width: 100%;
            margin: auto;
           img{
            width: 100%;
          
        }
        }
    }
</style>