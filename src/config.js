export const menuList = [
    {
        value: '/home',
        label: '首页'
    },
    {
        value: '/form',
        label: '表单系列',
        children: [
            {
                value: '/form/multiForm',
                label: '多表单校验',
            },
            {
                value: '/form/loopForm',
                label: '循环表单'
            }
        ]
    },
    {
        value: '/components',
        label: '封装组件',
        children: [
            {
                value: '/components/vModel',
                label: '简单的双向绑定',
            },
        ]
    }
]