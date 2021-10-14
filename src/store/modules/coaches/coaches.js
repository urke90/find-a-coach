import axios from '../../../api/axios';
import {
    ADD_COACH,
    SET_COACHES,
    SET_IS_LOADING,
    SET_ERROR_MESSAGE
} from '../../constants';

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
            commit(SET_IS_LOADING, true);
            const { data } = await axios.post('coaches.json', coach);
            const newCoach = {
                ...coach,
                id: data.name
            };

            commit(ADD_COACH, newCoach);
            commit(SET_IS_LOADING, false);
        } catch (err) {
            const errorMessage = 'Error fetching coaches';
            commit(SET_ERROR_MESSAGE, errorMessage);
            commit(SET_IS_LOADING, false);
            throw new Error(
                `Error fetching coaches, status code: ${err.response.status}`
            );
        }
    },
    async setCoaches({ commit }) {
        try {
            commit(SET_IS_LOADING, true);
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
            commit(SET_IS_LOADING, false);
        } catch (err) {
            const errorMessage = 'Error fetching coaches';
            commit(SET_ERROR_MESSAGE, errorMessage);
            commit(SET_IS_LOADING, false);
            throw new Error(
                `Error fetching coaches, status code: ${err.response.status}`
            );
        }
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};
