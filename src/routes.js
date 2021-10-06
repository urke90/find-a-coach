export const routes = [
    {
        path: '/',
        redirect: '/coaches'
    },
    {
        path: '/coaches',
        component: null
    },
    {
        path: '/coaches/:id',
        component: null,
        children: [{ path: 'contact', component: null }]
    },
    {
        path: '/register',
        component: null
    },
    {
        path: '/:pathMatch(.*)*',
        component: null
    }
];
