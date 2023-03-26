<template>
	<div>
		<el-table
			class="my-table"
			v-loading="loading"
			ref="table"
			:data="tempData"
			:header-cell-style="headerCellStyle"
			:cell-style="cellStyle"
			v-bind="$attrs"
			v-on="$listeners"
		>
			<template slot="append">
				<slot name="append"></slot>
			</template>
			<component :is="newTableColumn" :columns="columns">
				<template v-for="(index, name) in $slots" :slot="name">
					<slot :name="name"></slot>
				</template>
				<template v-for="(index, name) in $scopedSlots" v-slot:[name]="data">
					<slot :name="name" v-bind="data"></slot>
				</template>
			</component>
		</el-table>
		<el-pagination 
			class="pagination"
			v-bind="tempPagination"
			:current-page="currentPage"
			:page-size="pageSize"
			:total="total"
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange"
		></el-pagination>
	</div>
</template>

<script>
import NewTableColumn from './new-table-column.vue'

const defaultPagination = {background: true, layout: 'total, sizes, prev, pager, next, jumper'}
export default {
	name: 'newTable',
	props: {
		columns: {
			type: Array,
			default: () => ([])
		},
		pagination: {
			type: Object,
			default: () => ({})
		},
		data: {
			type: Array,
			default: () => []
		},
		headerCellStyle: {
			type: Function || Object,
			default: () => {
				return {
					'background-color': '#f5f6f7',
					'font-size': '12px',
					'padding': '10px',
				}
			}
		},
		cellStyle: {
			type: Function || Object,
			default: () => {
				return {
					'font-size': '12px',
					'padding': '10px'
				}
			}
		},
		
	},
	data() {
		return {
			loading: false,
			currentPage: 1,
			pageSize: 10,
			tempData: [],
			newTableColumn: NewTableColumn,
		}
	},
	computed: {
		paging() {
			const offset = (this.currentPage - 1) * this.pageSize
			return { offset, limit: this.pageSize }
		},
		total() {
			return this.data?.length || 0
		},
		tempPagination() {
			return {...defaultPagination, ...this.pagination}
		}
	},
	watch: {
		pagination: {
			handler(nVal) {
				this.currentPage = nVal.currentPage || 1
				this.pageSize = nVal.pageSize || nVal.pageSizes?.[0] || 10
			},
			immediate: true,
			deep: true,
		},
		paging: {
			handler() {
				this.getTableData()
			},
			immediate: true,
			deep: true,
		}
	},
	mounted() {
		const tempStore = this.$refs?.table || {}
		for(const key in tempStore) {
			if(typeof tempStore[key] === 'function') {
				this[key] = tempStore[key]
			}
		}
	},
	methods: {
		handleSizeChange(val) {
			this.pageSize = val;
			this.getTableData();
		},
		handleCurrentChange(val) {
			this.currentPage = val;
			this.getTableData();
		},
		getTableData() {
			const { offset, limit } = this.paging || {}
		this.loading = true
			setTimeout(() => {
				this.tempData = this.data.filter((v, i) => i >= offset && i < (offset + limit))
				this.loading = false
			}, 1000);
		},
	}

}
</script>

<style scoped lang="scss">
.pagination {
	display: flex;
	padding: 10px 0;
	::v-deep button.btn-prev {
		margin-left:auto
	}
}
.my-table ::v-deep .is-group tr:nth-child(odd) {
    display: none;
}
</style>