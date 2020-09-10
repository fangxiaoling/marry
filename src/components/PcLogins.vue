<!--
 * @Author: your name
 * @Date: 2020-02-27 10:33:04
 * @LastEditTime: 2020-02-27 17:47:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lpw-app\src\components\PcLogins.vue
 -->
<!--
 * @Author: your name
 * @Date: 2020-02-27 10:18:07
 * @LastEditTime: 2020-02-27 10:30:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lpw-app\src\views\PcLogin.vue
 -->
<template>
    <div class="login-wrap" v-show="isShowLogin">
        <div class="ms-login">
            <div class="ms-title">婚纱摄影登陆界面</div>
            <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
                <el-form-item prop="username">
                    <el-input v-model="param.username" placeholder="请输入用户名">
                        <el-button slot="prepend" icon="el-icon-user"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        type="password"
                        placeholder="请输入密码"
                        v-model="param.password"
                        @keyup.enter.native="submitForm()"
                    >
                        <el-button slot="prepend" icon="el-icon-lock"></el-button>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm()">登录</el-button>
                </div>
                <p class="login-tips">登录可输入任何账号密码</p>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            isShowLogin:true,
            param: {
                username: '婚纱摄影',
                password: '123',
            },
            rules: {
                username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
            },
        };
    },
    methods: {
        submitForm() {
            this.$refs.login.validate(valid => {
                if (valid) {
                    this.$message.success('登录成功');
                    localStorage.setItem('ms_username', this.param.username);
                    this.isShowLogin = false;
                } else {
                    this.$message.error('请输入账号和密码');
                    return false;
                }
            });
        },
    },
};
</script>

<style scoped>
.login-wrap {
   
    width: 100%;
    height: 100%;
     background:rgba(15, 15, 15, 0.753);
    background-size: 100%;
    position: fixed;
    top: 0;
    z-index: 9999;
}
.ms-title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    border-bottom: 1px solid rgb(255, 255, 255);
}
.ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: -190px 0 0 -175px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.37);
    overflow: hidden;
}
.ms-content {
    padding: 30px 30px;
}
.login-btn {
    text-align: center;
}
.login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
}
.login-tips {
    font-size: 12px;
    line-height: 30px;
    color: rgb(75, 75, 75);
}
.i{
        color: #000;
    }
</style>