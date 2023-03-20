<template>
  <div>
    <Hoc
        :model="data"
        :config="config"
        @input="input"
        @change="change"
        @blur="blur"
        @select="handleSelect"
    >
        <template>
            <h2 slot="header" style="padding-bottom: 20px;">我是高阶组件</h2>
        </template>
        <template>
            <i slot="prefix" class="el-icon-date" style="margin-top: 13px;" comType="input"></i>
        </template>
        <template slot="autocomplete_default" slot-scope="{ item }">
            <div class="name">{{ item.value }}</div>
            <span class="addr">{{ item.address }}</span>
        </template>
    </Hoc>
    <div>{{data}}</div>
  </div>
</template>

<script>
import getHOC from '../components/hoc'
import MySelect from '../components/select.vue'
import { Input, Switch, rate, Autocomplete } from 'element-ui'

const Hoc = getHOC({input: Input, mySelect: MySelect, switch: Switch, rate, autocomplete: Autocomplete})
export default {
    components: {
        Hoc,
    },
    data() {
        return {
            data: {
                inputValue: '',
                autocompleteValue: '',
                selectValue: '',
                switchValue: false,
                rateValue: 0
            },
            config: {
                input: {
                    prop: 'inputValue',
                    placeholder:'我是输入框',
                    style: {},
                },
                autocomplete: {
                    prop: 'autocompleteValue',
                    placeholder: '请输入内容',
                    fetchSuggestions: this.querySearch
                },
                mySelect: {
                    prop: 'selectValue',
                    placeholder: '请选择',
                    list: [{
                        value: '选项1',
                        label: '黄金糕'
                        }, {
                        value: '选项2',
                        label: '双皮奶'
                    }]
                },
                switch: {
                    prop: 'switchValue',
                    activeColor: "#13ce66",
                    inactiveColor: "#ff4949"
                },
                rate: {
                    prop: 'rateValue'
                },
                restaurants: []
            }
        }
    },
    mounted() {
      this.restaurants = this.loadAll();
    },
    methods: {
        change(v) {
            console.log('v: ', v);
            
        },
        input(v) {
            console.log('v222: ', v)

        },
        blur(e) {
            console.log('event: ', e)
        },
        handleSelect(item) {
            console.log('item: ', item);
        },
        querySearch(queryString, cb) {
            const restaurants = this.restaurants;
            const results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
            // 调用 callback 返回建议列表的数据
            cb(results);
        },
        createFilter(queryString) {
            return (restaurant) => {
            return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
        },
        loadAll() {
            return [
                    { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
                    { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
                    { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
                ]
        }
    }
}
</script>

<style scoped>
.name {
    text-overflow: ellipsis;
    overflow: hidden;
}
.addr {
    font-size: 12px;
    color: #b4b4b4;
}

</style>