<template>
    <div class="header-wrapper">
        <div class="head-top">
             <div class="thame-wrapper">
                <span class="icon-wrapper" @click.prevent="toggleClick" style="width:20px;">
                    <svg-icon  icon-class="wuxupailie" class="hamburger" :class="{'is-active':isActive}"/>
                </span>
                <h5 style="margin-left:10px;">
                    <span>首页/</span><span>djasdad</span>
                </h5>
            </div>
            <div class="user-wrapper">
                <span>欢迎登录，</span>
                <el-dropdown>
                    <span class="el-dropdown-link">
                        {{userName}}<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>修改密码</el-dropdown-item>
                        <el-dropdown-item>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <img src="" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Header',
    data(){
        return{
            title:'中央审批系统-审批端',
            userName:'odjfdso',
            isActive:false
            
        }
    },
    methods:{
        toggleClick(){
            this.isActive = !this.isActive;
            this.$store.dispatch('toggleSideBar')
        }
    }
}
</script>
<style lang="scss" scoped>
.hamburger {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
}

.hamburger.is-active {
  transform: rotate(180deg);
}
.head-top{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    .thame-wrapper{
        display: flex;
        flex-direction: row;
        justify-content: center;
        .svg-container {
        padding: 6px 5px 6px 15px;
        color:yellow;
        vertical-align: middle;
        width: 30px;
        display: inline-block;
    }
    }
}


</style>


