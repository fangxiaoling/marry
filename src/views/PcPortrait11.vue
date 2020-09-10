<template>
    <div>
        <!--标题-->
        <div class="PcPortraitOne_text">
            <div class="text_auto">
                <img src="../assets/img/xzjtitle.png" alt="" lazy>
            </div>
        </div>
        <!--图片-->
        <div class="PcPortraitOne_img">
            <div class="img_auto">
                <img v-for="PcPortraitOne in PcPortraitOnes" :key="PcPortraitOne.id" v-lazy="PcPortraitOne.img_url" alt="" lazy>
            </div>
        </div>
    </div>
</template>
<script>
import xzjOne from "../assets/img/xzj/xzjeleven01.jpg"
import xzjTwo from "../assets/img/xzj/xzjeleven02.jpg"
import xzjThree from "../assets/img/xzj/xzjeleven03.jpg"
import xzjFour from "../assets/img/xzj/xzjeleven04.jpg"
import xzjFive from "../assets/img/xzj/xzjeleven05.jpg"
import xzjSix from "../assets/img/xzj/xzjeleven06.jpg"
import xzjSeve from "../assets/img/xzj/xzjeleven07.jpg"
import xzjEight from "../assets/img/xzj/xzjeleven07.jpg"

export default {
    data(){
        return{
            PcPortraitOnes:[
                {id:1,img_url: xzjOne},
                {id:2,img_url: xzjTwo},
                {id:3,img_url: xzjThree},
                {id:4,img_url: xzjFour},
                {id:5,img_url: xzjFive},
                {id:6,img_url: xzjSix},
                {id:7,img_url: xzjSeve},
                {id:8,img_url: xzjEight},
            ],
        }
    },
    /*
    methods:{
        handlePcPortraitOnes(){
            var url ="http://127.0.0.1:3000/ImgPortraitImageEleven"
            this.axios.get(url).then(result=>{
                this.PcPortraitOnes = result.data
            })
        }
    },
    created() {
        this.handlePcPortraitOnes();
    },*/
}
</script>
<style lang="scss">
    //标题
    .PcPortraitOne_text{
        width: 100%;
        overflow: hidden;

        .text_auto{
            width: 80%;
            margin: auto;

            img{
                width: 100%;
            }
        }
    }

    // 图片
    .PcPortraitOne_img{
        width: 100%;
        overflow: hidden;

        .img_auto{
            width: 80%;
            margin: auto;

            img{
                width: 100%;
            }
        }
    }
</style>