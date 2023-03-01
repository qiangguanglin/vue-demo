export const skillMenuList = [
    {
        value: 'watch',
        label: 'watch'
    },
    {
        value: 'computed',
        label: 'computed'
    },
    {
        value: 'lifeTimes',
        label: '生命周期'
    },
]

export const columns = [{
        prop: 'selection',
        type: 'selection',
        width: 80
    },{
        prop: 'date',
        label: '日期',
        width: 180,
        sortable: true,
    },{
        prop: 'name',
        label: '名字',
        width: 200
    },{
        prop: 'address',
        label: '地址',
    },{
        prop: 'operate',
        label: '操作'
    }]

export const tableData = [{
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  }, {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄'
  }, {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄'
  }, {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄'
  }]