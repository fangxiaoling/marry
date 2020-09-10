<!--
 * @Author: your name
 * @Date: 2020-02-08 15:56:36
 * @LastEditTime: 2020-02-26 20:50:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lpw-app\src\views\PcSceneSeven.vue
 -->
<template>
    <div>
        <div class="scen_box1" v-for="hbOnes in hbOness" :key="hbOnes.id">
            <img v-lazy="hbOnes.img_url" alt="图片" lazy>
        </div>
       
    </div>
</template>
<script>
import xwOne from "../assets/img/hb/hb01.jpg"
import xwTwo from "../assets/img/hb/hb02.jpg"
import xwSea from "../assets/img/hb/hb03.jpg"
import xwFour from "../assets/img/hb/hb04.jpg" 
import xwFive from "../assets/img/hb/hb05.jpg"
import xwEight from "../assets/img/hb/hb06.jpg"
import xwNine from "../assets/img/hb/hb07.jpg"
import xwTen from "../assets/img/hb/hb08.jpg"
import xwTenOne from "../assets/img/hb/hb09.jpg"
import xwTenTwo from "../assets/img/hb/hb10.jpg"
import xwTenThress from "../assets/img/hb/hb11.jpg"
import xwTenFour from "../assets/img/hb/hb12.jpg"

export default {
     data(){
        return{
            hbOness:[
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
               
            ]
        }
    }
}
</script>
<style lang="scss">
   
    img{
            width: 100%;
           
    }
</style>