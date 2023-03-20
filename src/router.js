const routes = [
    { path: '/', redirect:'/home', component: () => import('./pages/home.vue') },
    { path: '/home', component: () => import('./pages/home.vue') },
    { path: '/form', component: () => import('./pages/form.vue'),
        children: [
            { path: 'loopForm', component: () => import('./pages/loopForm.vue') }
        ]
    },
    { path: '/components', component: () => import('./pages/components.vue'),
        children: [
            { path: 'vModel', component: () => import('./pages/vModel.vue') },
            { path: 'inherit', component: () => import('./pages/inherit.vue') },
            { path: 'table', component: () => import('./pages/newTable.vue') },
            { path: 'hoc', component: () => import('./pages/HOC.vue') }
        ]
    },
    { path: '/skill', component: () => import('./pages/skill.vue'),},
]

export default routes;