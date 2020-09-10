<!--
 * @Author: your name
 * @Date: 2020-02-08 15:56:36
 * @LastEditTime: 2020-02-26 18:50:37
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \lpw-app\src\views\PcGuestEight.vue
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
    },
    /*
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
    }
    */
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