<template>
    <div>
        <h2>我透传了el-input的attribute</h2>
        <inherit-input
            class="inherit-input1"
            size="small" 
            v-model="value1" 
            placeholder="我是新的继承组件"
            :minlength="1"
            :maxlength="8"
            clearable
            @focus="focus"
            @blur="blur"
        ></inherit-input>
        <div>{{eventText}}</div>
        <h2>我透传了el-autocomplete的部分插槽</h2>
        <inherit-autocomplete
            ref="autocomplete"
            class="inherit-input2"
            v-model="value2"
            size="small" 
            placeholder="我透传部分插槽"
            :fetch-suggestions="querySearch"
            @focus="focus"
            @blur="blur"
        >
            <template slot="prefix">
                <div class="fix">前面</div>
            </template>
            <template slot="suffix">
                <i class="el-icon-edit fix"></i>
            </template>
            <template slot="prepend">
                <div>无效的插槽</div>
            </template>
            <template slot="append">
                <div>我是重新定义的插槽</div>
            </template>
            <template slot-scope="{ item }">
                <div class="name">{{ item.value }}</div>
                <span class="addr">{{ item.address }}</span>
            </template>
        </inherit-autocomplete>
        <div>{{eventText}}</div>
    </div>
</template>

<script>
import InheritInput from '../components/inherit-input.vue'
import InheritAutocomplete from '../components/inherit-autocomplete.vue'

export default {
    components: {
        InheritInput,
        InheritAutocomplete
    },
    data() {
        return {
            value1: '我是新组件',
            value2: '',
            restaurants: [
                { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
                { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
            ],
            eventText: ''
        }
    },
    methods: {
        querySearch(queryString, cb) {
            const results = queryString ? this.restaurants.filter(this.createFilter(queryString)) : this.restaurants;
            // 调用 callback 返回建议列表的数据
            cb(results);
        },
        createFilter(queryString) {
            return (restaurant) => {
            return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
        },
        focus() {
            this.eventText='触发了聚焦事件'
        },
        blur() {
            this.eventText='触发了失焦事件'
        }
    },
}
</script>

<style scoped lang="scss">
.inherit-input1 {
    width: 200px;
}
h2 {
    padding: 10px 0;
}
.inherit-input2 {
    width: 400px;
}
.fix {
    line-height: 32px;
    padding-right: 5px;
}
.name {
    text-overflow: ellipsis;
    overflow: hidden;
}
.addr {
    font-size: 12px;
    color: #b4b4b4;
}
</style>