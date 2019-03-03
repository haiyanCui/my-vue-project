<template>
    <el-container class="app-wrapper">
      <el-container>
        <el-aside :width="togState ? '64px' : '200px'">
          <side-bar></side-bar>
        </el-aside>
        <el-container class="app-secssion">
          <el-header>
            <Header></Header>
          </el-header>
          <el-main style="padding:0">
            <tag-bar></tag-bar>
            <app-main></app-main>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
</template>


<script>
import{ mapGetters } from 'Vuex'
import Header from './components/header.vue'
import sideBar from './components/sidebar'
import navbar from './components/navbar'
import tagbar from './components/tagbar'
import appMain from './components/appMain'

export default {
    name:'Layout',
    data(){
        return {
          
        }
    },
    components: {
        Header,
        'side-bar':sideBar,
        'nav-bar':navbar,
        'tag-bar':tagbar,
        'app-main':appMain
    },
    computed:{
      ...mapGetters([
      'togState'
    ]),
    }
}
</script>
<style lang="scss" scoped>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    // text-align: center;
    line-height: 60px;
  }
  .app-secssion{
    height: calc(100vh);
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    // line-height: 160px;
    .app-main{
      padding: 10px;
    }
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>

