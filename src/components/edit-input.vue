<template>
    <div class="content">
        <span v-show="status">{{ value || '--' }}</span>
        <el-input
            v-show="!status"
            ref="input"
            v-model.trim="tempValue"
            size="mini"
            class="input_style"
            :clearable="true"
            @blur="blur"
        />
        <div v-show="status" class="pencil_icon" @click="click">
            <img src="../assets/pencil.png" class="pencil_class"/>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        value: {
            type: [String, Number],
            default: '',
        },
        canEdit: {
            type: Boolean,
            default: true,
        },
        valueType: {
            type: Number,
        }
    },
    data() {
        return {
            status: true,
            originValue: ''
        };
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
    methods: {
        click() {
            this.status = false;
            this.originValue = this.value;
            this.$nextTick(() => {
                this.$refs.input?.focus();
            });
        },
        blur() {
            this.status = true;
            if(this.tempValue !== this.originValue) {
                this.$emit('change-value', this.valueType, this.originValue);
            }
            this.$emit('blur', this.tempValue);
        },
    }
};
</script>

<style scoped lang="scss">
::v-deep.el-link.is-underline:hover::after {
    border-bottom: none;
}
.content {
    display: flex;
    align-items:center;
}
.pencil_class {
    padding: 5px 5px 0px;
    width:14px;
    height:14px;
}
.pencil_icon {
    cursor: pointer;
}
</style>