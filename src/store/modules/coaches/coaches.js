import { ADD_COACH } from '../../constants';

const state = {
    coaches: [
        {
            id: 'c1',
            firstName: 'Maximilian',
            lastName: 'Schwarzmüller',
            areas: ['frontend', 'backend', 'career'],
            description:
                "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
            hourlyRate: 30
        },
        {
            id: 'c2',
            firstName: 'Julie',
            lastName: 'Jones',
            areas: ['frontend', 'career'],
            description:
                'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
            hourlyRate: 30
        }
    ]
};

const getters = {
    coaches(state) {
        return state.coaches;
    },
    hasCoaches(state) {
        return state.coaches && state.coaches.length > 1;
    }
};

const mutations = {
    [ADD_COACH](state, payload) {
        state.coaches.push(payload);
    }
};

const actions = {
    addCoach(context, coach) {
        console.log('addCoach action called');
        console.log('context', context);
        console.log('coach', coach);
        context.commit(ADD_COACH, coach);
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};
