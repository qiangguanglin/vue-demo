<template>
    <div>
        <el-input size="medium" v-model="tempValue"></el-input>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: null,
        },
    },
    computed: {
        tempValue: {
            get() {
                return this.value;
            },
            set(v) {
                this.$emit('input', v);
            }
        }
    },
}
</script>

<style scoped>

</style>