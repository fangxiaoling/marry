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
import kzOne from "../assets/img/kz/kz77.jpg"
import kzTwo from "../assets/img/kz/kz78.jpg"
import kzThree from "../assets/img/kz/kz79.jpg"
import kzOFour from "../assets/img/kz/kz80.jpg"
import kzFive from "../assets/img/kz/kz81.jpg"
import kzSix from "../assets/img/kz/kz82.jpg"
import kzSeve from "../assets/img/kz/kz83.jpg"
import kzEight from "../assets/img/kz/kz84.jpg"
import kzNine from "../assets/img/kz/kz85.jpg"

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
         handleImage23(){
            var url = "http://127.0.0.1:3000/guestPhotoNine"
            this.axios.get(url).then(result=>{
                this.ones = result.data
            })
        }
    },
    created(){
        this.handleImage23();
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