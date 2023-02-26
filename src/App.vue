<template>
  <div id="app">
    <el-menu 
      class="menu"
      :default-active="$route.path"
      :router="true"
      @open="handleOpen"
      @close="handleClose"
    >
      <Menu :data="menuList"></Menu>
    </el-menu>
    <layout>
      <router-view></router-view>
    </layout>
  </div>
</template>

<script>
import Menu from './components/menu.vue';
import { menuList } from './config'

export default {
  name: 'app',
  components: {
    Menu
  },
  data() {
    return{
      menuList,
      activeIndex: ''
    }
  },
  created() {},
  methods: {
    handleOpen() {

    },
    handleClose() {

    },
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html,body,#app {
  width: 100%;
  height: 100%;
  display: flex;
}
.menu,.content {
  width: 200px;
  height:100%;
  overflow-y: scroll;
}
</style>