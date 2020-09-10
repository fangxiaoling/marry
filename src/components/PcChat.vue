
<template>
    <div>
        <div class="Chat_box">
            <el-button  round   
                 class="el-icon-s-custom">
                 <span @click="isShowBut()">点击留言</span> |
                 <span @click="backTop()">回到顶部</span> 
            </el-button>
            
            
            <div class="dwrt_box" v-show="isShowchat">
                <div class="item_box">
                    <span>给我们留言
                        <div class="el-icon-chat-dot-square"></div>
                    </span>
                    <router-link to="#"><i class="el-icon-arrow-down" @click="isShowChat()"></i></router-link>
                </div>
                <div class="item_Boxs">
                    <el-input type="text" placeholder="电话"
                        v-model="input">
                    </el-input>

                    <el-input type="textarea" :rows="8"
                        placeholder="留言内容" v-model="textarea">
                    </el-input>
                    
                    <el-button type="danger" @click="handleSubimt()">提交</el-button>
                    <p>版权归婚纱摄影工作室所有
                        <i class="el-icon-close-notification"></i>
                    </p>
                </div>
            </div>
            
            
    </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        isShowchat:false,
        input: '',
        textarea: '',
       
      }
      
    },
    methods:{
        isShowChat(){
            this.isShowchat = false;
        },
        isShowBut(){
            this.isShowchat = true;
        },
        handleSubimt(){
            alert("提交成功")
        },
        backTop(){
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
        }
    }
    
    
    
  };
</script>
<style lang="scss">
.Chat_box{
    width: 100%;
    position: fixed;
    top: 93%;
    left:84%;
    z-index: 99;

    .el-button{
        background: #f791bc;
        border: none;
        color: #fff;
    }
    .el-button:hover{
        background: #f16ba3;
        color: #fa0808
    }
    
    .dwrt_box{
        width: 25%;
        height: 70%;
        background: #fff;
        position: fixed;
        z-index: 100;
        bottom: 0%;
        left: 75%;

        .item_box{
            width: 100%;
            height: 50px;
            background: #f791bc;
            display: flex;
            justify-content: space-between;
            span{
                font-size: 15px;
                color: #fff;
                padding: 15px 10px;
            }
            i{
                color: rgb(255, 255, 255);
                padding: 15px 10px;
            }
        }
        .item_Boxs{
            width: 93%;
            margin: auto;
            
            input{
                margin:15px 0;
            }
            .el-button{
                width: 100%;
                margin-top: 15px;
                background: #f791bc;
                border: 1px solid #f791bc;
            }
            p{
                font-size: 12px;
                color: rgb(179, 177, 177);
                margin-top: 35px;
            }
        }
    }
    
}
</style>
