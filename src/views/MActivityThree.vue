<template>
    <div>
        <div class="activOne_box">
            <div class="one_auto">
                <img v-for="activOne in activOnes" :key="activOne.id" v-lazy="activOne.img_url" alt="" lazy="loading">
            </div>
        </div>
    </div>
</template>
<script>
import hdOne from "../assets/img/hd/hdtwo01.jpg"
import hdTwo from "../assets/img/hd/hdtwo02.jpg"
import hdThree from "../assets/img/hd/hdtwo03.jpg"
import hdOFour from "../assets/img/hd/hdtwo04.jpg"
import hdFive from "../assets/img/hd/hdtwo05.jpg"
import hdSix from "../assets/img/hd/hdtwo06.jpg"
import hdSeve from "../assets/img/hd/hdtwo07.jpg"
import hdEight from "../assets/img/hd/hdtwo08.jpg"
import hdNine from "../assets/img/hd/hdtwo09.jpg"

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
                {id:8,img_url: hdEight},
                {id:9,img_url: hdNine},
            ],
        }
    },/*
    methods:{
        handelImg1(){
            var url = "http://127.0.0.1:3000/CustomerMicroFilm03"
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