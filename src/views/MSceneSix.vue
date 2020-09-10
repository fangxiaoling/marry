<!--
 * @Author: your name
 * @Date: 2020-02-08 15:56:36
 * @LastEditTime: 2020-02-26 20:47:15
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \lpw-app\src\views\MSceneSix.vue
 -->
<template>
    <div>
        <div class="scen_box1" v-for="hjOnes in  hjOness" :key=" hjOnes.id">
            <img v-lazy="hjOnes.img_url" alt="图片" lazy>
        </div>
    </div>
</template>
<script>
import xwOne from "../assets/img/hj/hj01.jpg"
import xwTwo from "../assets/img/hj/hj02.png"
import xwSea from "../assets/img/hj/hj03.jpg"
import xwFour from "../assets/img/hj/hj04.jpg" 
import xwFive from "../assets/img/hj/hj05.jpg"
import xwEight from "../assets/img/hj/hj06.jpg"
import xwNine from "../assets/img/hj/hj07.jpg"
import xwTen from "../assets/img/hj/hj08.jpg"
import xwTenOne from "../assets/img/hj/hj09.jpg"
import xwTenTwo from "../assets/img/hj/hj10.jpg"
import xwTenThress from "../assets/img/hj/hj11.jpg"
import xwTenFour from "../assets/img/hj/hj12.jpg"
import xwTenFive from "../assets/img/hj/hj13.jpg"
import xwTenSix from "../assets/img/hj/hj14.jpg"
import xwTenEight from "../assets/img/hj/hj15.jpg"

export default {
    data(){
        return{
            hjOness:[
                {id:1,img_url: xwOne},
                {id:2,img_url: xwTwo},
                {id:3,img_url: xwSea},
                {id:4,img_url: xwFour},
                {id:5,img_url: xwFive},
                {id:6,img_url: xwEight},
                {id:7,img_url: xwNine},
                {id:8,img_url: xwTen},
                {id:9,img_url: xwTenOne},
                {id:10,img_url: xwTenTwo},
                {id:11,img_url: xwTenThress},
                {id:12,img_url: xwTenFour},
                {id:13,img_url: xwTenFive},
                {id:14,img_url: xwTenSix},
                {id:15,img_url: xwTenEight},
            ]
        }
    }
}
</script>
<style lang="scss">
    *{
        padding: 0;
        margin: 0;
    }
    
   img{
            width: 100%;
           
    }
</style>