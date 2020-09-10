<!--
 * @Author: your name
 * @Date: 2020-02-08 15:56:36
 * @LastEditTime: 2020-02-26 20:28:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lpw-app\src\views\MSceneThree.vue
 -->
<template>
    <div>
        <div class="scen_box1" v-for="glOnes in glOness" :key="glOnes.id">
            <img v-lazy="glOnes.img_url" alt="图片" lazy>
        </div>
      
    </div>
</template>
<script>
import xwOne from "../assets/img/gl/gl01.jpg"
import xwTwo from "../assets/img/gl/gl02.png"
import xwThree from "../assets/img/gl/mgl03.jpg"
import xwFour from "../assets/img/gl/mgl04.jpg" 
import xwFive from "../assets/img/gl/mgl05.jpg"
import xwEight from "../assets/img/gl/mgl06.jpg"
import xwNine from "../assets/img/gl/mgl07.jpg"
import xwTen from "../assets/img/gl/mgl08.jpg"
import xwTenOne from "../assets/img/gl/mgl09.jpg"
import xwTenTwo from "../assets/img/gl/mgl10.jpg"
import xwTenThress from "../assets/img/gl/mgl11.jpg"
import xwTenFour from "../assets/img/gl/mgl12.jpg"

export default {
    data(){
        return{
            glOness:[
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