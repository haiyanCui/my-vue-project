<template>
  <div>
    <el-scrollbar>
      <el-menu
        :default-active="currentPath"
        :collapse="togState"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :active-text-color="variables.menuActiveText"
        router
        collapse-transition
        :unique-opened='true'
        model="vertical"
      >
        <sidebar-item></sidebar-item>
      </el-menu>
    </el-scrollbar>
    {{togState}}
  </div>
</template>
<script>
import{ mapGetters } from 'Vuex'
import variables from "@/styles/variables.scss";
import sidebarItem from "./sidebarItem";
export default {
  data() {
    return {
      defaultActive: "1-4-1",
      isCollapse: false
    };
  },
  components: {
    sidebarItem
  },

  computed: {
    ...mapGetters([
      'togState'
    ]),
    variables() {
      return variables;
    },
    currentPath() {
      console.log(this.$route.path);
      return this.$route.path;
    }
  }
};
</script>


