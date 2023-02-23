<template>
  <div id="app" class="content">
    <el-col :span="3">
      <el-menu 
        class="menu"
        :default-active="activeIndex"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @open="handleOpen"
        @close="handleClose"
      >
      <!-- <div>
        <div>
          <el-menu-item index="1">4444</el-menu-item>
        </div>
      </div> -->
        <Menu :data="menuList"></Menu>
      </el-menu>
    </el-col>
    <!-- <multi-form/> -->
  </div>
</template>

<script>
// import MultiForm from './components/multiForm.vue';
import Menu from './components/menu.vue';
import { menuList } from './config'

export default {
  components: {
    // MultiForm,
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
.menu {
  height:100%;
}
</style>