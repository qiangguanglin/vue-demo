<script>
import NewTable from './new-table.vue'

const TableClone =Object.assign({}, NewTable);
TableClone.props = Object.assign({}, NewTable.props);
export default {
	name: 'newTableProcess',
    extends: TableClone,
    props: {
        processProp: String,
        processVisible: String
    },
    methods: {
        syncEachRowHeight() {
            const tableEl = this.$el
            tableEl.querySelectorAll('tr').forEach(tr => {
                tr.style.setProperty('--row-height', tr.offsetHeight + 'px')
            })
        },
        rowStyle({row}) {
			return { '--process': `${row[this.processProp]*100}%` }
		},
		rowClassName({row}) {
			return { 'row-process': row.showProcess }
		},
    },
    created() {
		this.$attrs.rowStyle = this.rowStyle;
		this.$attrs.rowClassName = this.rowClassName;
    },
    mounted() {
        window.onresize = () => {
            this.syncEachRowHeight()
        }
    },
    updated() {
        this.syncEachRowHeight();
    },
}
</script>

<style scoped lang="scss">
::v-deep .el-table .row-process::after{
  content: ' ';
  transition: width 0.3s ease;
  background-color: #409EFF;
  width: var(--process);
  margin-top: calc(var(--row-height) - 4px);
  height: 3px;
  position: absolute;
  left: 0px;
}
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