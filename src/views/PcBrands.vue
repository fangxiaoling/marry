<!--
 * @Author: your name
 * @Date: 2020-02-08 15:56:36
 * @LastEditTime: 2020-02-28 19:09:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lpw-app\src\views\PcBrands.vue
 -->

<template>
    <div>
        <div class="brands_box">
            <div class="brands_auto">
                <img v-for="br in brs" :key="br.id" v-lazy="br.img_url" alt="" lazy="loading">
            </div>
        </div>
    </div>
</template>
<script>
import whOne from "../assets/img/wh/wh01.jpg"
import whTwo from "../assets/img/wh/wh02.jpg"
import whThree from "../assets/img/wh/wh03.jpg"


export default {
    data(){
        return{
            brs:[
                {id:1,img_url: whOne},
                {id:2,img_url: whTwo},
                {id:3,img_url: whThree},
               
            ],
        }
    },
    
}
</script>
<style lang="scss">
    .brands_box{
        width: 100%;
        overflow: hidden;
        img{
            width: 100%;
             margin-top: -10px;
            
        }
    }
</style>