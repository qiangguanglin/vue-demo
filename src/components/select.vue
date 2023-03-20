<template>
    <div>
        <el-select 
            v-model="tempValue" 
            placeholder="请选择"
            v-bind="$attrs"
            v-on="listeners"
        >
            <el-option
                v-for="item in list"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            >
            </el-option>
  </el-select>
    </div>
</template>

<script>
export default {
    props: {
        list: {
            type: Array,
            value: () => ([])
        },
        value: {
            type: null
        }
    },
    computed: {
        tempValue: {
            get() {
                return this.value
            },
            set(v) {
                this.$emit('change', v)
            }
        },
        listeners() {
            let res = {}
            for(let key in this.$listeners) {
                if(key !== 'change') {
                    res[key] = this.$listeners[key]
                }
            }
            return res
        }
    },
    mounted() {
    }

}
</script>

<style>

</style>