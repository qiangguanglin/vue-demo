export const menuList = [
    {
        value: '/home',
        label: '首页',
        icon: 'el-icon-s-home'
    },
    {
        value: '/form',
        label: '表单系列',
        icon: 'el-icon-s-grid',
        children: [
            {
                value: '/form/loopForm',
                label: '循环表单及校验'
            }
        ]
    },
    {
        value: '/components',
        label: '封装组件',
        icon: 'el-icon-s-data',
        children: [
            {
                value: '/components/vModel',
                label: '简单的双向绑定',
            },
            {
                value: '/components/inherit',
                label: '二次封装组件功能透传'
            }
        ]
    },
    {
        value: '/skill',
        label: '奇技淫巧',
        icon: 'el-icon-s-opportunity'
    }
]