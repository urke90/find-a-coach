import axios from '../../../api/axios';
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
            const { data } = await axios.post('coaches.json', coach);
            const newCoach = {
                ...coach,
                id: data.name
            };

            commit(ADD_COACH, newCoach);
        } catch (err) {
            console.error('error adding new coach', err);
        }
    },
    async setCoaches({ commit }) {
        try {
            const coaches = [];
            const { data } = await axios.get('coaches.json');

            Object.keys(data).forEach(key => {
                const newCoach = {
                    id: key,
                    ...data[key]
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
