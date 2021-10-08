import CoachesList from './pages/coaches/CoachesList.vue';
import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFoundPage from './pages/NotFoundPage.vue';

export const routes = [
    {
        path: '/',
        redirect: '/coaches'
    },
    {
        path: '/coaches',
        component: CoachesList
    },
    {
        path: '/coaches/:id',
        component: CoachDetail,
        props: true,
        children: [{ path: 'contact', component: ContactCoach }]
    },
    {
        path: '/register',
        component: CoachRegistration
    },
    {
        path: '/requests',
        component: RequestsReceived
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFoundPage
    }
];
