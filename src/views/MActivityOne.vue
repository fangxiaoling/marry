<!--
 * @Author: your name
 * @Date: 2020-02-08 15:56:36
 * @LastEditTime: 2020-02-26 20:51:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lpw-app\src\views\MActivityOne.vue
 -->
<template>
    <div>
        <div class="activOne_box">
            <div class="one_auto">
                <img v-for="activOne in activOnes" :key="activOne.id" v-lazy="activOne.img_url" alt="图片" lazy="loading">
            </div>
        </div>
    </div>
</template>
<script>
import hdOne from "../assets/img/hd/hdThree01.jpg"
import hdTwo from "../assets/img/hd/hdThree02.jpg"
import hdThree from "../assets/img/hd/hdThree03.jpg"
import hdOFour from "../assets/img/hd/hdThree04.jpg"
import hdFive from "../assets/img/hd/hdThree05.jpg"
import hdSix from "../assets/img/hd/hdThree06.jpg"
import hdSeve from "../assets/img/hd/hdThree07.jpg"

export default {
    data(){
        return{
            activOnes:[
                {id:1,img_url: hdOne},
                {id:2,img_url: hdTwo},
                {id:3,img_url: hdThree},
                {id:4,img_url: hdOFour},
                {id:5,img_url: hdFive},
                {id:6,img_url: hdSix},
                {id:7,img_url: hdSeve},
            ],
        }
    },/*
    methods:{
        handelImg1(){
            var url = "http://127.0.0.1:3000/CustomerMicroFilm04"
            this.axios.get(url).then(result=>{
                this.activOnes = result.data
            })
        }
    },
    created(){
        this.handelImg1();
    }*/
}
</script>
<style lang="scss">
    .activOne_box{
        width: 100%;
        overflow: hidden;
        img{
            width: 100%;
             margin-top: -10px;

        }
    }
</style>