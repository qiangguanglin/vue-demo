<template>
    <div class="inherit_content">
        <el-input
            v-model="tempValue"
            v-bind="$attrs"
            v-on="$listeners"
        >
            <template v-for="(index, name) in $slots" :slot="name">
                <slot v-if="!ignore_slot.includes(name)" :name="name"></slot>
            </template>
            <template v-for="(index, name) in $scopedSlots" v-slot:[name]="data">
                        <slot :name="name" v-bind="data"></slot>
                    </template>
        </el-input>
        <div class="append">
            <slot name="append"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: null
        }
    },
    data() {
        return {
            ignore_slot: ['prepend', 'append'],
        }
    },
    computed: {
        tempValue: {
            get() {
                return this.value
            },
            set(v) {
                this.$emit('input', v)
            }
        }
    }
}
</script>

<style scoped lang="scss">
.inherit_content {
    display: flex;
}
.append {
    width: 50%;
    line-height: 32px;
}
</style>