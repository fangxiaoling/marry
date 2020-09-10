
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
    },
    /*
    methods:{
         handleImage24(){
            var url = "http://127.0.0.1:3000/guestPhotoEleven"
            this.axios.get(url).then(result=>{
                this.ones = result.data
            })
        }
    },
    created(){
        this.handleImage24();
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