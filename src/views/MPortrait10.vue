<template>
    <div>
        <!--标题-->
        <div class="PcPortraitOne_textm">
            <div class="text_auto">
                <img src="../assets/img/xzjtitle.png" alt="" lazy>
            </div>
        </div>
        <!--图片-->
        <div class="PcPortraitOne_imgm">
            <div class="img_auto">
                <img v-for="PcPortraitOne in PcPortraitOnes" :key="PcPortraitOne.id" v-lazy="PcPortraitOne.img_url" alt="" lazy="loading">
            </div>
        </div>
    </div>
</template>
<script>
import xzjOne from "../assets/img/xzj/xzjten01.jpg"
import xzjTwo from "../assets/img/xzj/xzjten02.jpg"
import xzjThree from "../assets/img/xzj/xzjten03.jpg"
import xzjFour from "../assets/img/xzj/xzjten04.jpg"
import xzjFive from "../assets/img/xzj/xzjten05.jpg"
import xzjSix from "../assets/img/xzj/xzjten06.jpg"

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
            ],
        }
    },
    /*
    methods:{
        handlePcPortraitOnes(){
            var url ="http://127.0.0.1:3000/ImgPortraitImageTen"
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
    .PcPortraitOne_textm{
        width: 100%;
        overflow: hidden;

        .text_auto{
            width: 100%;
            margin: auto;

            img{
                width: 100%;
            }
        }
    }

    // 图片
    .PcPortraitOne_imgm{
        width: 100%;
        overflow: hidden;

        .img_auto{
            width: 100%;
            margin: auto;

            img{
                width: 100%;
            }
        }
    }
</style>