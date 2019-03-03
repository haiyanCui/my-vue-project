<template>
    <div class="login-container">
        <div class="login-left">
            <img src="../../assets/login/login_bg.jpg" alt="" style="display:block;width:100%;height:100%">
        </div>
        <div class="login-right">
            <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form"  auto-complete="on" label-position="left">
                <div class="title-container">
                    <h3 class="title">欢迎登陆</h3>
                </div>
                <el-form-item prop="username">
                    <span class="svg-container">
                        <svg-icon icon-class="user" />
                    </span>
                    <el-input
                    v-model="loginForm.username"
                    placeholder="用户名"
                    name="username"
                    type="text"
                    auto-complete="on"
                    />
                </el-form-item>
                <el-form-item prop="password">
                    <span class="svg-container">
                        <svg-icon icon-class="password" />
                    </span>
                    <el-input
                    v-model="loginForm.password"
                    placeholder="密码"
                    :type="passwordType"
                    name="password"
                    auto-complete="on"
                    />
                    <span class="show-pwd" @click="showPwd">
                        <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
                    </span>
                </el-form-item>
                <span style="color:#002741;font-size:12px;float:right;line-height:20px;cursor:point">忘记密码？</span>
                <el-button type="primary" :loading='loading' style="width:100%;margin-bottom:30px;margin-top:10px;" @click.native.prevent="handleLogin">{{loginButtonTitle}}</el-button>
            </el-form>
            
        </div>
    </div>
</template>
<script>
export default {
    name:'Login',
    data(){
        return{
            loginForm:{
              username:'',
              password:''
           },
           loginRules:{
               username:[
                   {required:true,message:'请输入用户名！',trigger:'blur'},
                   {pattern:/^\S+$/,message:'请正确输入，不能有空格！'}
               ],
               password:[
                   {required:true,message:'请输入密码！',trigger:'blur'},
                   {min:6,message:'密码长度最少为6位！',trigger:'blur'}
               ]
           },
           passwordType:'password',
           loading:false,
           loginButtonTitle: this.loading ? '登陆中' :'登录'
        }
        

    },
    methods:{
        showPwd() {
            if (this.passwordType === 'password') {
                this.passwordType = ''
            } else {
                this.passwordType = 'password'
            }
        },
        handleLogin(){
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    this.loading = true;
                    // this.loginButtonTitle = '登陆中';
                    this.$store.dispatch('LoginByUserName',this.loginForm).then(() =>{
                      this.loading = false;
                      // this.loginButtonTitle = '登陆';
                      this.$router.push({path:undefined || '/index'})
                    }).catch(() =>{
                      this.loading = false;
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
             });
        }
    }
}
</script>
<style rel="stylesheet/scss" lang="scss">
  /* 修复input 背景不协调 和光标变色 */
  /* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

  $bg:#00527a;
  $light_gray:#eee;
  $cursor: #fff;

  @supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
    .login-container .el-input input{
      color: $cursor;
      &::first-line {
        color: $light_gray;
      }
    }
  }

  /* reset element-ui css */
  .login-container {
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
        &:-webkit-autofill {
          -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
          -webkit-text-fill-color: $cursor !important;
        }
      }
    }
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #005b9a;
    }
  }
</style>
<style rel="stylesheet/scss" lang="scss" scoped>
$bg:#005a84;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  min-height: 100%;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .login-left{
      width: 50%;
      float: left;
      height: 100%;
  }
  .login-right{
      width: 50%;
      float: left;
      height: 100%;
      background-color: $bg;
      .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    .set-language {
      color: #fff;
      position: absolute;
      top: 3px;
      font-size:18px;
      right: 0px;
      cursor: pointer;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }
  }
  
}
</style>
