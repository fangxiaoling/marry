<!--
 * @Author: your name
 * @Date: 2020-02-08 15:56:36
 * @LastEditTime: 2020-02-28 19:44:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lpw-app\src\views\PcActivity.vue
 -->

<template>
    <div>
        <div class="activity_box">
            <div class="box_auto">
                <img src="../assets/img/activities.png" alt="" lazy>
            </div>
        </div>
        <div class="activity_box1">
            <div class="box_auto01">
               
                <div class="img_box" v-for="activ in activs" :key="activ.id">
                <div class="box" @click="handelClick(activ.id)"></div>
                <img v-lazy="activ.img_url" alt="" lazy>
                </div>
               
            </div>
        </div>

       

    </div>
</template>
<script>
import hdOne from "../assets/img/hd/hd01.jpg"
import hdTwo from "../assets/img/hd/hd04.jpg"
import hdThree from "../assets/img/hd/hd02.jpg"

export default {
    data(){
        return{
            activs:[
                {id:1,img_url: hdOne},
                {id:2,img_url: hdTwo},
                {id:3,img_url: hdThree},
            ],
        }
    },
    methods:{
        /*
        handelImg(){
            var url = "http://127.0.0.1:3000/CustomerMicroFilm01"
            this.axios.get(url).then(result=>{
                this.activs = result.data
            })
        },*/
        handelClick(id){
            if( id == 1 ){
                this.$router.push("/PcActivityOne")
            }
            else if( id == 2){
                this.$router.push("/PcActivityTwo")
            }
            else{
                this.$router.push("/PcActivityThree")
            }
        }
    },
    /*
    created(){
        this.handelImg();
    }*/
}
</script>
<style lang="scss">
    .activity_box1{
        width: 100%;
        overflow: hidden;

        .box_auto01{
            width: 80%;
            margin: auto;

            .img_box{
                position: relative;
                margin-top:20px;
                 img{
                width: 100%;
                
                }

                .box{
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    background:linear-gradient(rgba(0, 0, 0, 0.801),rgba(255, 255, 255, 0));
                    display: none;
                }
            }

            .img_box:hover .box{
                display: block;
                cursor:pointer;
            }
           
        }
    }
</style>