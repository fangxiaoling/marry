<!--
 * @Author: your name
 * @Date: 2020-02-08 15:56:36
 * @LastEditTime: 2020-02-26 20:34:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lpw-app\src\views\PcSceneFour.vue
 -->
<template>
    <div>
        <div class="scen_box1" v-for="arOnes in arOness" :key="arOnes.id">
            <img v-lazy="arOnes.img_url" alt="图片" lazy>
        </div>
       
    </div>
</template>
<script>
import xwOne from "../assets/img/ar/ar01.jpg"
import xwTwo from "../assets/img/ar/ar02.jpg"
import xwThree from "../assets/img/ar/ar03.jpg"
import xwFour from "../assets/img/ar/ar04.jpg" 
import xwFive from "../assets/img/ar/ar05.jpg"
import xwEight from "../assets/img/ar/ar06.jpg"
import xwNine from "../assets/img/ar/ar07.jpg"
import xwTen from "../assets/img/ar/ar08.jpg"
import xwTenOne from "../assets/img/ar/ar09.jpg"
import xwTenTwo from "../assets/img/ar/ar10.jpg"

export default {
   data(){
       return{
           arOness:[
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