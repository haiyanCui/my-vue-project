<template>
    <div class="head-bottom">
           <el-scrollbar>
               <el-tag
                v-for="tag in tags"
                :key="tag.name"
                closable
                size='small'>
                {{visitedViews}}
                <!-- <router-link :to="{ path: tag.path, query: tag.query }">{{visitedViews}}</router-link> -->
                <router-link :to="path">{{visitedViews}}</router-link>
                </el-tag>

           </el-scrollbar>
           <el-dropdown>
                <span class="el-dropdown-link">
                关闭菜单<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>关闭所有</el-dropdown-item>
                    <el-dropdown-item>关闭其他</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>

       </div>
</template>
<script>
export default {
    name:'tagbar',
    data(){
        return{
            tags: [
          { name: '标签一', type: '' },
          { name: '标签二', type: '' },
          { name: '标签三', type: '' },
          { name: '标签四', type: '' },
          { name: '标签五', type: '' }
        ],
        path:'/login'
        }
    },
    computed:{
        visitedViews(){
            return this.$store.getters.visitedViews           
        }
    },
    watch:{
        $route() {
            this.addViewTags();   
        },
    },
    mounted(){
        this.addViewTags()
    },
    methods:{
        addViewTags() {
            console.log("!!!!",this.$store)
        const { name } = this.$route
        console.log(this.$route)
        if (name) {
            this.$store.dispatch('addView', this.$route)
        }
        return false
        },
    }
}
</script>
<style lang="scss" scoped>
.head-bottom{
    line-height: 30px;
    display: flex;
    flex-direction: row;
    background-color: #e2e7ec;
    justify-content: space-between;
    .el-tag + .el-tag {
        margin-left: 10px;
    }
}
</style>
