<!--
 * @Author: your name
 * @Date: 2020-02-08 15:56:36
 * @LastEditTime: 2020-02-26 18:50:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lpw-app\src\views\PcGuestSeven.vue
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
import kzOne from "../assets/img/kz/kz63.jpg"
import kzTwo from "../assets/img/kz/kz64.jpg"
import kzThree from "../assets/img/kz/kz65.jpg"
import kzOFour from "../assets/img/kz/kz66.jpg"
import kzFive from "../assets/img/kz/kz67.jpg"

export default {
    data(){
        return{
           ones:[
                {id:1,img_url: kzOne},
                {id:2,img_url: kzTwo},
                {id:3,img_url: kzThree},
                {id:4,img_url: kzOFour},
                 {id:5,img_url: kzFive},
               
           ],
        }
    },/*
    methods:{
         handleImage21(){
            var url = "http://127.0.0.1:3000/guestPhotoSeven"
            this.axios.get(url).then(result=>{
                this.ones = result.data
            })
        }
    },
    created(){
        this.handleImage21();
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