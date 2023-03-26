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
        prop: 'sendInfo',
        label: '配送信息',
        children: [
            {
                prop: 'name',
                label: '名字',
                width: 200,
            },
            {
                prop: 'addressInfo',
                label: '地址',
                children: [
                    {
                        prop: 'province',
                        label: '省市',
                        width: 120
                    },
                    {
                        prop: 'city',
                        label: '市区',
                        width: 120
                    },
                    {
                        prop: 'address',
                        label: '地址',
                        width: 200
                    }
                ]
            }
        ]
    },{
        prop: 'operate',
        label: '操作',
    }]

export const tableData = [{
    date: '2016-05-02',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
  }, {
    date: '2016-05-04',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
  }, {
    date: '2016-05-01',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
  }, {
    date: '2016-05-03',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
  }]

export const columnsProcess = [{
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
    prop: 'processValue',
    label: '进度值',
},{
    prop: 'process',
    label: '进度',
}]

export const tableDataProcess = [{
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄',
    process: 0.2,
    showProcess: false
}, {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄',
    process: 0.3,
    showProcess: true
}, {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄',
    process: 0,
    showProcess: false
}, {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄',
    process: 0,
    showProcess: false
}]