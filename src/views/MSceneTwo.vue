<!--
 * @Author: your name
 * @Date: 2020-02-08 15:56:36
 * @LastEditTime: 2020-02-29 00:19:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lpw-app\src\views\PcSceneTwo.vue
 -->
<template>
    <div>
        <div class="Pcscen_box1" v-for="hhOnes in hhOness" :key="hhOnes.id">
            <img v-lazy="hhOnes.img_url" alt="图片" lazy>
        </div>  
    </div>
</template>
<script>
import xwOne from "../assets/img/hh/hh01.jpg"
import xwTwo from "../assets/img/hh/hh02.png"
import xwSea from "../assets/img/hh/hh03.jpg"
import xwFour from "../assets/img/hh/hh04.jpg" 
import xwFive from "../assets/img/hh/hh05.jpg"
import xwEight from "../assets/img/hh/hh06.jpg"
import xwNine from "../assets/img/hh/hh07.jpg"
import xwTen from "../assets/img/hh/hh08.jpg"
import xwTenOne from "../assets/img/hh/hh09.jpg"
import xwTenTwo from "../assets/img/hh/hh10.jpg"
import xwTenThress from "../assets/img/hh/hh11.jpg"
import xwTenFour from "../assets/img/hh/hh12.jpg"
import xwTenFive from "../assets/img/hh/hh13.jpg"
import xwTenSix from "../assets/img/hh/hh14.jpg"
import xwTenEight from "../assets/img/hh/hh15.jpg"

export default {
    data(){
        return{
            hhOness:[
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
    .Pcscen_box1{
        width: 100%;
        img{
            width: 100%;
           
    }
    }
    
</style>