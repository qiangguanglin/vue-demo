const routes = [
    { path: '/', redirect:'/home', component: () => import('./pages/home.vue') },
    { path: '/home', component: () => import('./pages/home.vue') },
    { path: '/form', component: () => import('./pages/form.vue'),
        children: [
            { path: 'multiForm', component: () => import('./pages/multiForm.vue') },
            { path: 'loopForm', component: () => import('./pages/loopForm.vue') }
        ]
    },
    { path: '/components', component: () => import('./pages/components.vue'),
        children: [
            { path: 'vModel', component: () => import('./pages/vModel.vue') }
        ]
    },
]

export default routes;