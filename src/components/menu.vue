<template>
    <div>
        <div v-for="item in data" :key="item.value">
            <el-submenu v-if="item.children || (Array.isArray(item.children) && item.children.length)" :index="item.value">
                <span slot="title">{{item.label}}</span>
                <my-menu :data="item.children"></my-menu>
            </el-submenu>
            <el-menu-item v-else :index="item.value" :route="item.value">
                {{item.label}}
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