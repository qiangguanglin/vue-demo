<template>
    <div>
        <el-input size="medium" :value="value" @input="input"></el-input>
    </div>
</template>

<script>
export default {
    // model: {
    //     prop: 'value',
    //     event: 'input'
    // },
    props: {
        value: {
            type: null,
        }
    },
    methods: {
        input(v) {
            this.$emit('input', v)
        }
    }
    
}
</script>

<style scoped>

</style>