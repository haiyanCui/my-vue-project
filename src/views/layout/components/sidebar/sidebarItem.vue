<template>
    <div class="menu-wrapper">
    <template >
        <el-menu-item index="/login">
            <i class="el-icon-setting"></i>
            <span slot='title'>odjodja</span>
        </el-menu-item>
        <el-submenu index=''>
            <template slot='title'>
                <i class="el-icon-location"></i>
                <span slot="title">daohang</span>
            </template>
            <template>
                <el-menu-item index="/index">
                    <i class="el-icon-setting"></i>
                    <span slot="title">jakd</span>
                </el-menu-item>
            </template>
        </el-submenu>
    </template>
</div>
</template>
<script>

export default {
    name:'sidebarItem',
    
    mounted(){                
    }
    
}
</script>
