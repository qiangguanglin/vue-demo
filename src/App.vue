<template>
  <div id="app">
    <div class="top_class">
      <div class="top_title">
        <img src="./assets/home.png" style="width:50px;height:50px"/>
        <i class="home_title">LASSETS</i>
        <div class="my_content">
          <el-image 
            style="width:50px;height:50px;border-radius:50px;"
            :src="url" 
            :preview-src-list="srcList">
          </el-image>
          <span style="color:rgb(45, 45, 45);font-weight:400;margin-left:10px">屁屁</span>
        </div>
      </div>
    </div>
    <div class="bottom_content">
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
        <text-content>
          <router-view ref="router" class="router_class"></router-view>
        </text-content>
        <div v-if="show" class="right_menu">
            <el-menu
                default-active="watch"
                @select="selected"
            >
                <Menu :data="rightMenuList"></Menu>
            </el-menu>
        </div>
      </layout>
    </div>
  </div>
</template>

<script>
import Menu from './components/menu.vue'
import { menuList } from './config'
import { skillMenuList } from './pages/config'
import jpg from './assets/pipi.jpeg'

export default {
  name: 'app',
  components: {
    Menu
  },
  data() {
    return{
      url: jpg,
      srcList: [jpg],
      menuList,
      activeIndex: '',
      show: false,
      rightMenuList: skillMenuList
    }
  },
  computed: {
    showRightMenuList() {
      return menuList?.flat(Infinity)?.map(v => v.showRightMenu && v.value).filter(v =>v) || []
    }
  },
  watch: {
    '$route.path': {
      handler(v) {
        if(this.showRightMenuList.includes(v)) {
          this.show = true
          return
        }
        this.show = false
      },
      immediate: true
    }
  },
  created() {},
  methods: {
    handleOpen() {

    },
    handleClose() {

    },
    selected(index) {
      this.$refs?.router?.selected(index)
    }
  }
}
</script>

<style scoped lang="scss">

#app {
  width: 100%;
  height: 100%;
}
.bottom_content {
  position: relative;
  width: 100%;
  height: calc(100% - 100px);
  display: flex;
}
.menu {
  width: 250px;
  height:100%;
  overflow-y: scroll;
  flex-shrink: 0;
}
.top_class {
  position: sticky;
  z-index: 200;
  top:0;
  height: 100px;
  width: 100%;
  background-color: white;
  box-shadow: rgb(228 230 242) 0px 2px 6px 0px;
}
.back_content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(238, 241, 248);
}
.router_class {
  padding: 20px;
  height: 100%;
}
.right_menu {
  width: 250px;
  height: 100%;
  margin: 20px 0 20px 20px;
  overflow: scroll;
  ::v-deep ul.el-menu {
    border-radius: 5px;
    height: 100%;
  }
}
.home_title {
  color: #409eff
}
.top_title {
  display: flex;
  align-items: center;
  line-height: 100px;
  padding-left: 20px;
}
.my_content {
  margin: 0 30px 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>