<!--
 * @Author: your name
 * @Date: 2020-02-08 15:56:36
 * @LastEditTime: 2020-02-26 18:55:28
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \lpw-app\src\views\PcPortrait1.vue
 -->

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
import xzjOne from "../assets/img/xzj/xzjtwo01.jpg"
import xzjTwo from "../assets/img/xzj/xzjtwo02.jpg"
import xzjThree from "../assets/img/xzj/xzjtwo03.jpg"
import xzjFour from "../assets/img/xzj/xzjtwo04.jpg"
import xzjFive from "../assets/img/xzj/xzjtwo05.jpg"
import xzjSix from "../assets/img/xzj/xzjtwo06.jpg"
import xzjSeve from "../assets/img/xzj/xzjtwo07.jpg"

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
            ],
        }
    },
    /*
    methods:{
        handlePcPortraitOnes(){
            var url ="http://127.0.0.1:3000/ImgPortraitImageOne"
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