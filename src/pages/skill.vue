<template>
    <div class="skill_content">
        <div class="text_content">
            <div id="watch">
                <h2>watch</h2>
                <div style="text-indent:30px;">
                    大家对于vue的watch属性一定很熟悉了，Vue 通过 watch 选项提供了一个通用的方法，来监听响应式数据的变化。当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。
                    但是除此之外vue还提供了专用的api，vm.$watch，通过这个api可以更灵活的实现一些数据的监听，可以参考官放文档：https://v2.cn.vuejs.org/v2/api/#vm-watch；
                    这个api可以监听响应式的数据，同时会返回一个unwatch的方法，用于注销该watch监听，那么就可以通过这个能力实现单次watch监听啦~（监听数据变化一次后，取消watch，后续不再监听）
                    那怎么实现呢？可以参考下面的demo。
                </div>
                <!-- <el-input style="padding:20px 0px;width:100px" size="mini" v-model="value"></el-input>
                <div>我是单词监听变化的值：{{watchValue}}</div> -->
                <div class="demo_content">
                    <el-select v-model="value" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <div>我是单词监听变化的值：{{watchValue}}</div>
                </div>
            </div>
            <div id="computed">
                <h2>computed</h2>
            </div>
            <div id="lifeTimes">
                <h2>生命周期</h2>
            </div>
        </div>
    </div>
</template>

<script>
import { skillMenuList } from './config'

export default {
    components: {
        // Menu,
    },
    data() {
        return {
            skillMenuList,
            value: '黄金糕',
            watchValue: '黄金糕',
            options: [
                {value: '黄金糕',label: '黄金糕'}, 
                {value: '双皮奶',label: '双皮奶'}, 
                {value: '蚵仔煎',label: '蚵仔煎'}, 
                {value: '龙须面',label: '龙须面'}, 
                {value: '北京烤鸭',label: '北京烤鸭'}
            ],
        }
    },
    created() {
        this.watchValue = this.value;
        const unwatch = this.$watch('value', (nVal) => {
            this.watchValue = nVal;
            this.$nextTick(() => {
                unwatch()
            })
        })    
    },
    methods: {
        selected(index) {
            const element = document.getElementsByClassName('text_content_origin')?.[0]
            const tempElement = document.getElementById(index)
            element.scrollTop = tempElement.offsetTop
        }
    }
}
</script>

<style scoped lang="scss">
h2 {
    padding: 10px 0;
}
.demo_content {
    margin: 20px 0;
    padding: 20px;
    background-color: rgba(27,31,35,.05);
}
</style>