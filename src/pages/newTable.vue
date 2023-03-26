<template>
	<div>
		<h3 class="title">二次封装表格</h3>
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
			stripe
			:pagination="{
					pageSizes: [2,5],
			}"
		>
			<template slot="header-name" slot-scope="scope">
				<el-input v-model="search" size="mini" :placeholder="`输入关键字搜索<${scope.column.label}>`">
				</el-input>
			</template>
			<template slot="operate" slot-scope="scope">
				<el-input v-model="scope.row.operate">
					<template>
						<i slot="prefix">1111</i>
					</template>
				</el-input>
			</template>
			<template slot="date" slot-scope="scope">
				我是日期：{{scope.row.date}}
			</template>
			<template slot="append">
				<span style="padding:20px">我是append插槽</span>
			</template>
		</new-table>
		<h3 class="title">进度条表格</h3>
		<new-table-process
			ref="tableProcess"
			:columns="columnsProcess"
			:data="tableDataProcess"
			style="width: 100%"
			border
			stripe
			processProp="process"
			processVisible="showProcess"
		>
			<template slot="processValue" slot-scope="scope">
				<el-input-number v-model="scope.row.process" size="mini" :precision="2" :step="0.02" :min="0" :max="1"></el-input-number>
			</template>
			<template slot="process" slot-scope="scope">
				<el-switch
					v-model="scope.row.showProcess">
				</el-switch>
			</template>
		</new-table-process>
	</div>
</template>

<script>
import NewTable from '../components/new-table.vue'
import NewTableProcess from '../components/new-table-process.vue'
import { columns, tableData, tableDataProcess, columnsProcess } from './config'
export default {
    components: {
        NewTable,
		NewTableProcess
    },
    data() {
        return {
            columns,
			columnsProcess,
            tableData,
			tableDataProcess,
            search: ''
        }
    },
    methods: {
        clearSelect() {
            this.$refs.table.clearSelection()
			// this.$refs.tableProcess.clearSelection()
        },
        clearSort() {
            this.$refs.table.clearSort()
        },
		mock(index) {
			const row = this.tableDataProcess[index];
			row.showProcess = true
			row.process = 0
			let inc = () => {
				row.process += 0.03
				if (row.process < 1) {
				setTimeout(inc, 30)
				} else {
				setTimeout(() => {
					row.showProcess = false
				}, 400);
				}
			}
			inc()
		}
    }

}
</script>

<style scoped lang="scss">
.button_group {
    padding: 10px 0;
    float: right
}
.title{
	padding: 10px 0
}
</style>