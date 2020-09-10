<!--
 * @Author: your name
 * @Date: 2020-02-08 15:56:36
 * @LastEditTime: 2020-02-29 00:15:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lpw-app\src\views\PcSceneOne.vue
 -->
<template>
    <div>
        <div class="scen_box1" v-for="xwOnes in xwOness" :key="xwOnes.id">
            <img v-lazy="xwOnes.img_url" alt="图片" lazy>
        </div>
    </div>
</template>
<script>
import xwOne from "../assets/img/xw/xhw01.jpg"
import xwTwo from "../assets/img/xw/pc.png"
import xwThree from "../assets/img/xw/xhw02.jpg"
import xwFour from "../assets/img/xw/xhw03.jpg" 
import xwFive from "../assets/img/xw/xhw04.jpg"
import xwEight from "../assets/img/xw/xhw07.jpg"
import xwNine from "../assets/img/xw/xhw08.jpg"
import xwTen from "../assets/img/xw/xhw09.jpg"
import xwTenOne from "../assets/img/xw/xhw10.jpg"
import xwTenTwo from "../assets/img/xw/xhw11.jpg"
import xwTenThress from "../assets/img/xw/xhw12.jpg"
import xwTenFour from "../assets/img/xw/xhw13.jpg"
import xwTenFive from "../assets/img/xw/xhw14.jpg"
import xwTenSix from "../assets/img/xw/xhw15.jpg"
import xwTenEight from "../assets/img/xw/xhw17.jpg"

export default {
    data(){
        return{
            xwOness:[
                {id:1,img_url: xwOne},
                {id:2,img_url: xwTwo},
                {id:3,img_url: xwThree},
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