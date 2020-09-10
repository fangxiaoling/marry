<!--
 * @Author: your name
 * @Date: 2020-02-08 15:56:36
 * @LastEditTime: 2020-02-24 22:02:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lpw-app\src\views\MGuestEleven.vue
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
import kzOne from "../assets/img/kz/kz100.jpg"
import kzTwo from "../assets/img/kz/kz101.jpg"
import kzThree from "../assets/img/kz/kz102.jpg"
import kzOFour from "../assets/img/kz/kz103.jpg"
import kzFive from "../assets/img/kz/kz104.jpg"
import kzSix from "../assets/img/kz/kz105.jpg"
import kzSeve from "../assets/img/kz/kz106.jpg"
import kzEight from "../assets/img/kz/kz107.jpg"
import kzNine from "../assets/img/kz/kz108.jpg"
import kzTen from "../assets/img/kz/kz109.jpg"
import kzEleven from "../assets/img/kz/kz110.jpg"

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
           ],
        }
    },/*
    methods:{
         handleImage25(){
            var url = "http://127.0.0.1:3000/guestPhotoEleven"
            this.axios.get(url).then(result=>{
                this.ones = result.data
            })
        }
    },
    created(){
        this.handleImage25();
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