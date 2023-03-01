<template>
	<div>
		<div class="button_group">
			<el-button type="primary" size="small" @click="clearSelect">清除选择</el-button>
			<el-button type="primary" size="small" @click="clearSort">清除排序</el-button>
		</div>
		<new-table
			ref="table"
			:columns="columns"
			:data="tableData"
			style="width: 100%"
			:default-sort = "{prop: 'date', order: 'descending'}"
			border
			:pagination="{
					pageSizes: [2,5],
			}"
		>
			<template slot="header-name" slot-scope="scope">
				<el-input v-model="search" size="mini" :placeholder="`输入关键字搜索<${scope.column.label}>`"></el-input>
			</template>
			<template slot="operate">
				<el-button size="mini" type="primary">操作</el-button>
			</template>
			<template slot="date" slot-scope="scope">
				我是日期：{{scope.row.date}}
			</template>
			<template slot="append">
				<span style="padding:20px">我是append插槽</span>
			</template>
		</new-table>
	</div>
</template>

<script>
import NewTable from '../components/new-table.vue'
import { columns, tableData } from './config'

export default {
    components: {
        NewTable
    },
    data() {
        return {
            columns,
            tableData,
            search: ''
        }
    },
    methods: {
        clearSelect() {
            this.$refs.table.clearSelection()
        },
        clearSort() {
            this.$refs.table.clearSort()
        }
    }

}
</script>

<style scoped lang="scss">
.button_group {
    padding: 10px 0;
    float: right
}
</style>