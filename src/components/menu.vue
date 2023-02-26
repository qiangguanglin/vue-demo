<template>
    <div>
        <div v-for="item in data" :key="item.value">
            <el-submenu v-if="item.children || (Array.isArray(item.children) && item.children.length)" :index="item.value">
                <template slot="title">
                    <i v-if="item.icon" :class="item.icon"></i>
                    <span>{{item.label}}</span>
                </template>
                <my-menu :data="item.children"></my-menu>
            </el-submenu>
            <el-menu-item v-else :index="item.value" :route="item.value">
                <i v-if="item.icon" :class="item.icon"></i>
                <span slot="title">{{item.label}}</span>
            </el-menu-item>
        </div>
    </div>
</template>

<script>
export default {
    name: 'myMenu',
    props: {
        data: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {

        }
    },
}
</script>

<style scoped>

</style>