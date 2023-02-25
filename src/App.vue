<template>
  <div id="app">
    <el-col :span="3" class="content">
      <el-menu 
        class="menu"
        default-active="/home"
        :router="true"
        @open="handleOpen"
        @close="handleClose"
      >
        <Menu :data="menuList"></Menu>
      </el-menu>
    </el-col>
    <el-col :span="21">
      <layout>
        <router-view></router-view>
      </layout>
    </el-col>
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
  created() {
  },
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
  height: 100%;
}
.menu,.content {
  height:100%;
  overflow-y: scroll;
}
</style>