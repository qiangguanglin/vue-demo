<template>
  <div>
    <window-component>
        <template slot="header">点击元素外部指令</template>
        <template slot="describe">该指令可以实现点击绑定元素的外部触发</template>
        <template slot="component">
            <el-button type="primary" v-clickOutside="clickOutside">点击外面按钮</el-button>
        </template>
    </window-component>
    <window-component>
        <template slot="header">防抖和节流指令</template>
        <template slot="describe">该指令可以实现点击事件防抖以及输入框节流</template>
        <template slot="component">
            <el-button type="primary" v-debounce:[time]="clickDebounce">防抖按钮</el-button>
            <el-input style="padding:0 10px;width:200px;" v-model="value" v-throttle:[time]="throttleInput" placeholder="节流输入框"/>
        </template>
    </window-component>
    <window-component>
            <template slot="header">拖拽指令</template>
            <template slot="describe">该指令可以实现元素拖拽，需要设置其父元素为绝对定位，fatherId为其指定父元素的id，用于获取其宽高</template>
            <template slot="component">
                <div id="my-father-dom" style="position: absolute;width:calc(100% - 20px);height:100px;">
                    <el-button type="primary" style="display: inline-block;position:relative;" v-draggable:[fatherId]>我是拖拽区域</el-button>
                </div>
            </template>
    </window-component>
    <window-component>
            <template slot="header">复制指令</template>
            <template slot="describe">该指令可以实现元素内容一键复制</template>
            <template slot="component">
                <span v-copy="copyText">我是复制的内容</span>
            </template>
    </window-component>
  </div>
</template>

<script>
export default {
    data() {
        return {
            time: 2000,
            value: '',
            fatherId: 'my-father-dom'
        }
    },
    methods: {
        clickOutside() {
            this.$message.info('点击了外面')
        },
        clickDebounce() {
            this.$message.info('我在2s内只触发一次')
        },
        throttleInput(event) {
            console.log('event: ', event);
            this.$message.info(`我2s触发一次，值是${event.target.value}`)
        },
        copyText(v) {
            this.$message.success(`复制的值为：${v}`)
        }
    }
}
</script>

<style scoped>
</style>