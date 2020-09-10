<template>
    <div>
        <div class="scen_box1" v-for="asOnes in asOness" :key="asOnes.id">
            <img v-lazy="asOnes.img_url" alt="图片" lazy>
        </div>
       
    </div>
</template>
<script>
import xwOne from "../assets/img/as/as01.jpg"
import xwTwo from "../assets/img/as/as02.jpg"
import xwThree from "../assets/img/as/as03.jpg"
import xwFour from "../assets/img/as/as04.jpg" 
import xwFive from "../assets/img/as/as05.jpg"
import xwEight from "../assets/img/as/as06.jpg"
import xwNine from "../assets/img/as/as07.jpg"
import xwTen from "../assets/img/as/as08.jpg"
import xwTenOne from "../assets/img/as/as09.jpg"

export default {
    data(){
       return{
           asOness:[
                {id:1,img_url: xwOne},
                {id:2,img_url: xwTwo},
                {id:3,img_url: xwThree},
                {id:4,img_url: xwFour},
                {id:5,img_url: xwFive},
                {id:6,img_url: xwEight},
                {id:7,img_url: xwNine},
                {id:8,img_url: xwTen},
                {id:9,img_url: xwTenOne},
               
                
               
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