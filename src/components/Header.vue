<template>
    <div>
        <div class="nav_box">
            <div class="box_auto">
                
                <div class="input">
                    <img class="imgLogo" src="../assets/img/logo.png" alt="图片">

                   <el-autocomplete
                        popper-class="my-autocomplete"
                        v-model="state"
                        :fetch-suggestions="querySearch"
                        placeholder="搜索内容"
                        >
                    <i class="el-icon-search el-input__icon"
                        slot="suffix"
                        >
                    </i>
                    <template slot-scope="{ item }">
                        <div class="name">{{ item.value }}</div>
                        <span class="addr">{{ item.address }}</span>
                    </template>
                    </el-autocomplete>

                   <div class="header-right">
                    <div class="header-user-con">
                <!-- 全屏显示 -->
                <div class="btn-fullscreen" @click="handleFullScreen">
                    <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
                        <i class="el-icon-rank"></i>
                    </el-tooltip>
                </div>
                <!-- 消息中心 -->
                <div class="btn-bell">
                    <el-tooltip
                        effect="dark"
                        :content="message?`有${message}条未读消息`:`消息中心`"
                        placement="bottom"
                    >
                        <router-link to="#">
                            <i class="el-icon-message"></i>
                        </router-link>
                    </el-tooltip>
                    <span class="btn-bell-badge" v-if="message"></span>
                </div>
                <!-- 用户头像 -->
                <div class="user-avator">
                    <img src="../assets/img/login/img.jpg" />
                </div>
                <!-- 用户名下拉菜单 -->
                <el-dropdown class="user-name" trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link">
                        {{username}}
                        <i class="el-icon-caret-bottom"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
                  

                </div> 
            </div>
        </div>
        <div class="nav_box2">
            <div class="box2_auto">
                <el-menu
                    :default-active="activeIndex2"
                    class="el-menu-demo"
                    mode="horizontal"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
               <el-menu-item index="1"><router-link to="/PcIndex">首页</router-link></el-menu-item>
                <el-submenu index="2">
                <template slot="title"><router-link to="/PcScene">七大外景</router-link></template>
                <el-menu-item index="2-1"><router-link to="/PcSceneOne">浪琴湾</router-link></el-menu-item>
                <el-menu-item index="2-2"><router-link to="/PcSceneTwo">巴比伦花海</router-link></el-menu-item>
                <el-menu-item index="2-3"><router-link to="/PcSceneSix">皇家城堡</router-link></el-menu-item>
                <el-menu-item index="2-3"><router-link to="/PcSceneFour">爱尔兰马场</router-link></el-menu-item>
                <el-menu-item index="2-3"><router-link to="/MSceneThree">戛納明星广场</router-link></el-menu-item>
                <el-menu-item index="2-3"><router-link to="/PcSceneSeven">塞河纳畔</router-link></el-menu-item>
                <el-menu-item index="2-3"><router-link to="/PcSceneFive">奥斯叮湖畔</router-link></el-menu-item>
                </el-submenu>
                <el-menu-item index="3"><router-link to="/PcGuest">真实客照</router-link></el-menu-item>
                <el-menu-item index="4"><router-link to="/PcMicroFilm">微电影区</router-link></el-menu-item>
                <el-menu-item index="5"><router-link to="/PcPortrait">写真集区</router-link></el-menu-item>
                <el-menu-item index="6"><router-link to="/PcActivity">人气活动</router-link></el-menu-item>
                <el-menu-item index="7"><router-link to="/PcBrands">品牌文化</router-link></el-menu-item>
                </el-menu>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        collapse: false,
            fullscreen: false,
            name: 'linxin',
            message: 0,
        restaurants: [],
        state: '',
        activeIndex2: '1',
      };
    },
    computed: {
        username() {
            let username = localStorage.getItem('ms_username');
            return username ? username : this.name;
        }
    },
    methods: {

       // 用户名下拉菜单选择事件
        handleCommand(command) {
            if (command == 'loginout') {
                localStorage.removeItem('ms_username');
                this.$router.push('/PcLogin');
            }
        },
         // 全屏事件
        handleFullScreen() {
            let element = document.documentElement;
            if (this.fullscreen) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            } else {
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.webkitRequestFullScreen) {
                    element.webkitRequestFullScreen();
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if (element.msRequestFullscreen) {
                    // IE11
                    element.msRequestFullscreen();
                }
            }
            this.fullscreen = !this.fullscreen;
        },
        
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "七大外景" },
          { "value": "浪琴湾" },
          { "value": "巴比伦花海" },
          { "value": "爱尔兰马场" },
          { "value": "皇家城堡" },
          { "value": "戛納明星广场" },
          { "value": "塞河纳畔" },
          { "value": "奥斯叮湖畔" },
          { "value": "真实客照" },
          { "value": "微电影区" },
          { "value": "人气活动" },
          { "value": "写真集" },
          { "value": "品牌文化" },
          { "value": "自然森系系列" },
          { "value": "玩趣视觉系列" },
          { "value": "优雅白纱系列" },
          { "value": "甜宠活力系列" }
        ];
      },
      
      
    },
    mounted() {
      this.restaurants = this.loadAll();
      
    }
  }
</script>
<!--
<script>
export default {
    data() {
    return {
      input1: '',
      activeIndex2: '1',
      restaurants: [],
      state: ''
    }
  },
  methods: {

      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    } 
}
</script>
-->
<style lang="scss">
    *{
        padding: 0;
        margin: 0;
    }
      a{
        text-decoration: none;
        color: #fff;
      }
    .nav_box{
        width: 100%;
        height: 60px;
        background:#000;
       

       
        .box_auto{
            width: 80%;
            margin: auto;
            display: flex;
          
        }

         .input{
             width: 100%;
            display: flex;
            justify-content: space-between;
        }

        .imgLogo{
            width: 120px;
            height: 40px;
           
            margin-top:8px;

        }

       

        .el-input{
            width: 100%;
            margin-top:10px; 
        }

        .my-autocomplete {
            li {
            line-height: normal;
            padding: 7px;

            .name {
                text-overflow: ellipsis;
                overflow: hidden;
            }
            .addr {
                font-size: 12px;
                color: #b4b4b4;
            }

            .highlighted .addr {
                color: #ddd;
            }
  }
}

       h4{
           font-size: 20px;
           color:#fff;
           line-height: 57px;
       }
       
      
  }

//菜单栏
.nav_box2{
    width: 100%;
    background:#545c64;
    

    .box2_auto{
        width: 80%;
        margin: auto;
    }

    .el-menu.el-menu--horizontal{
        border:0px solid red;
    }
    
    
    
}
.header-right {
    float: right;
    padding-right: 50px;
}
.header-user-con {
    display: flex;
    height: 55px;
    align-items: center;
}
.btn-fullscreen {
    transform: rotate(45deg);
    margin-right: 5px;
    font-size: 24px;
    color: rgb(255, 255, 255);
}
btn-bell,
.btn-fullscreen {
    position: relative;
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 15px;
    cursor: pointer;
}
.btn-bell-badge {
    position: absolute;
    right: 0;
    top: -2px;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: #f56c6c;
    color: #fff;
}
.btn-bell .el-icon-bell {
    color: #fff;
}
.user-name {
    margin-left: 10px;
}
.user-avator {
    margin-left: 20px;
}
.user-avator img {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.el-dropdown-link {
    color: #fff;
    cursor: pointer;
}
.el-dropdown-menu__item {
    text-align: center;
} 
.btn-bell-badge{
    display: none;
}   
</style>