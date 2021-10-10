import axios from 'axios';
import { ADD_COACH, SET_COACHES } from '../../constants';

const state = {
    coaches: []
};

const getters = {
    coaches(state) {
        return state.coaches;
    },
    hasCoaches(state) {
        return state.coaches && state.coaches.length;
    }
};

const mutations = {
    [ADD_COACH](state, payload) {
        state.coaches.push(payload);
    },
    [SET_COACHES](state, coaches) {
        state.coaches = coaches;
    }
};

const actions = {
    async addCoach({ commit }, coach) {
        try {
            const url =
                'https://find-a-coach-vue-26405-default-rtdb.firebaseio.com/coaches.json';

            const response = await axios.post(url, coach);
            const newCoach = {
                ...coach,
                id: response.data.name
            };
            commit(ADD_COACH, newCoach);
        } catch (err) {
            console.error('error adding new coach', err);
        }
    },
    async getCoaches({ commit }) {
        try {
            const url =
                'https://find-a-coach-vue-26405-default-rtdb.firebaseio.com/coaches.json';

            const coaches = [];
            const response = await axios.get(url);

            Object.keys(response.data).forEach(key => {
                const newCoach = {
                    id: key,
                    ...response.data[key]
                };

                coaches.push(newCoach);
            });

            commit(SET_COACHES, coaches);
        } catch (err) {
            console.error(err);
        }
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};
/*

{
            id: 'c1',
            firstName: 'Maximilian',
            lastName: 'Schwarzmüller',
            areas: ['frontend', 'backend', 'career'],
            description:
                "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
            hourlyRate: 30
        }
*/
