<template>
  <div id="app">
    <el-col :span="3" class="content">
      <el-menu 
        class="menu"
        :default-active="activeIndex"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @open="handleOpen"
        @close="handleClose"
      >
        <Menu :data="menuList"></Menu>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
import Menu from './components/menu.vue';
import { menuList } from './config'

export default {
  components: {
    Menu
  },
  data() {
    return{
      menuList,
      activeIndex: 'secondaryPackageCom'
    }
  },
  methods: {
    handleOpen() {

    },
    handleClose() {

    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html,body,#app {
  height: 100%;
}
.menu,.content {
  height:100%;
}
</style>