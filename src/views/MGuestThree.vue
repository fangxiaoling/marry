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
import kzOne from "../assets/img/kz/kz19.jpg"
import kzTwo from "../assets/img/kz/kz20.jpg"
import kzThree from "../assets/img/kz/kz21.jpg"
import kzOFour from "../assets/img/kz/kz22.jpg"
import kzFive from "../assets/img/kz/kz23.jpg"
import kzSix from "../assets/img/kz/kz24.jpg"
import kzSeve from "../assets/img/kz/kz25.jpg"
import kzEight from "../assets/img/kz/kz26.jpg"
import kzNine from "../assets/img/kz/kz27.jpg"
import kzTen from "../assets/img/kz/kz28.jpg"
import kzEleven from "../assets/img/kz/kz29.jpg"
import kzTwelve from "../assets/img/kz/kz30.jpg"
import kzThirteen from "../assets/img/kz/kz31.jpg"
import kzFourteen from "../assets/img/kz/kz32.jpg"

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
                {id:14,img_url: kzFourteen},
           ],
        }
    },/*
    methods:{
         handleImage17(){
            var url = "http://127.0.0.1:3000/guestPhotoThree"
            this.axios.get(url).then(result=>{
                this.ones = result.data
            })
        }
    },
    created(){
        this.handleImage17();
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