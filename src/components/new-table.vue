<template>
	<div>
		<el-table
			ref="table"
      v-loading="loading"
			:data="tempData"
			:header-cell-style="headerCellStyle"
			:cell-style="cellStyle"
			v-bind="$attrs"
			v-on="$listeners"
		>
			<template slot="append">
				<slot name="append"></slot>
			</template>
			<template v-for="item in columns">
				<el-table-column
					v-if="['selection', 'index'].includes(item.prop)"
					:key="`${item.prop}-if`"
					v-bind="item"
				>
					<template v-slot:header="scope">
						<slot :name="`header-${item.prop}`" v-bind="scope"></slot>
					</template>
				</el-table-column>
				<el-table-column
					v-else
					:key="item.prop"
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
const defaultPagination = {background: true, layout: 'total, sizes, prev, pager, next, jumper'}
export default {
	name: 'newTable',
	props: {
		columns: {
			type: Array,
			default: () => []
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
			currentPage: 1,
			pageSize: 10,
			tempData: [],
      loading: false
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
		console.log('tempStore: ', tempStore, this.$refs?.table);
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
			const { offset, limit } = this.paging || {};
      this.loading = true
      setTimeout(() => {
        this.tempData = this.data.filter((v, i) => i >= offset && i < (offset + limit))
        this.loading = false
      }, 1000)
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
</style>