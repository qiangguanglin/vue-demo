<template>
    <el-table-column class="my-column">
        <template v-for="item in columns">
            <el-table-column v-if="item.children && item.children.length" :label="item.label" :key="item.prop">
                <new-table-column
                    :columns="item.children || []"
                >
                    <template v-for="(index, name) in $slots" :slot="name">
                        <slot :name="name"></slot>
                    </template>
                    <template v-for="(index, name) in $scopedSlots" v-slot:[name]="data">
                        <slot :name="name" v-bind="data"></slot>
                    </template>
                </new-table-column>
            </el-table-column>
            <el-table-column
                v-else-if="['selection', 'index'].includes(item.prop)"
                :key="`${item.prop}-if`"
                v-bind="item"
            >
                <template v-slot:header="scope">
                    <slot :name="`header-${item.prop}`" v-bind="scope"></slot>
                </template>
            </el-table-column>
            <el-table-column
                v-else
                :key="`${item.prop}-else`"
                v-bind="item"
            >
                <template v-slot:header="scope">
                    <span v-if="$scopedSlots[`header-${item.prop}`]">
                        <slot :name="`header-${item.prop}`" v-bind="scope"></slot>
                    </span>
                    <span v-else>{{scope.column.label}}</span>
                </template>
                <template slot-scope="scope">
                    <span v-if="$scopedSlots[item.prop]">
                        <slot :name="item.prop" v-bind="scope"></slot>
                    </span>
                    <span v-else>{{scope.row[item.prop]}}</span>
                </template>
            </el-table-column>
        </template>
    </el-table-column>
</template>

<script>
export default {
    name: 'newTableColumn',
    props: {
        columns: {
            type: Array,
            default: () => ([])
        }
    },
}
</script>

<style scoped lang="scss">
</style>