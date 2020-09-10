<template>
    <div>
        <div class="films_titleBox">
            <div class="titleBox_auto">
                <p>您当前位置： >铂爵(伯爵)旅拍婚纱摄影首页 > 客户微电影> 11月微电影（上） > 香格里拉 > 王先生&左女士</p>
                <video src="../assets/vido/wdy04.mp4" loop preload="metadata" autoplay controls></video>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
<style lang="scss">
    .films_titleBox{
        width: 100%;
        overflow: hidden;

        .titleBox_auto{
            width: 80%;
            margin: auto;

            p{
                font-size: 18px;
                line-height: 36px;
            }

            video{
                width: 100%;
            }
        }
    }
</style>