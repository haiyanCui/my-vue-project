<template>
    <div class="narbar">
        <div class="nav-left">
            <span class="icon-wrapper" >
                <svg-icon  icon-class="wuxupailie" :class="{'is-active': isActive}" class="hamburger" />
            </span>
            <h5>
                <span>首页/</span><span>djasdad</span>
            </h5>
        </div>
        <div class="nav-right" style="width:20px;height:100%;background:green;" @click.native="toggleClick">

        </div>
    </div>
</template>
<script>
export default {
    name:'navbar',
    data(){
        return{
            isActive:false
        }
    },
    methods:{
        toggleClick(){
            alert(1)
            this.isActive = !this.isActive;
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
</style>
