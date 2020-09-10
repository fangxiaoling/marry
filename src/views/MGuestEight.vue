<!--
 * @Author: your name
 * @Date: 2020-02-08 15:56:36
 * @LastEditTime: 2020-02-26 20:52:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lpw-app\src\views\MGuestEight.vue
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
import kzOne from "../assets/img/kz/kz68.jpg"
import kzTwo from "../assets/img/kz/kz69.jpg"
import kzThree from "../assets/img/kz/kz70.jpg"
import kzOFour from "../assets/img/kz/kz71.jpg"
import kzFive from "../assets/img/kz/kz72.jpg"
import kzSix from "../assets/img/kz/kz73.jpg"
import kzSeve from "../assets/img/kz/kz74.jpg"
import kzEight from "../assets/img/kz/kz75.jpg"
import kzNine from "../assets/img/kz/kz76.jpg"

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
           ],
        }
    },/*
    methods:{
         handleImage22(){
            var url = "http://127.0.0.1:3000/guestPhotoEight"
            this.axios.get(url).then(result=>{
                this.ones = result.data
            })
        }
    },
    created(){
        this.handleImage22();
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