import axios from '../../../api/axios';
import {
    ADD_NEW_REQUEST,
    SET_REQUESTS,
    SET_IS_LOADING,
    SET_ERROR_MESSAGE
} from '../../constants';

const state = {
    requests: []
};

const getters = {
    requests(state) {
        return state.requests;
    },
    hasRequests(state) {
        return state.requests && state.requests.length;
    }
};

const mutations = {
    [ADD_NEW_REQUEST](state, payload) {
        state.requests.push(payload);
    },
    [SET_REQUESTS](state, payload) {
        state.requests = payload;
    }
};

const actions = {
    async addRequest({ commit }, { coachId, email, message }) {
        const newRequest = {
            coachId: coachId,
            email: email,
            message: message
        };

        try {
            commit(SET_IS_LOADING, true);
            const { data } = await axios.post('/requests.json', newRequest);

            newRequest.id = data.name;
            commit(ADD_NEW_REQUEST, newRequest);
            commit(SET_IS_LOADING, false);
        } catch (err) {
            const errorMessage = 'Error creating new request';
            commit(SET_ERROR_MESSAGE, errorMessage);
            commit(SET_IS_LOADING, false);
            throw new Error(
                `Error creating new request, status code: ${err.response.status}`
            );
        }
    },
    async setRequests({ commit }) {
        try {
            commit(SET_IS_LOADING, true);

            const requests = [];
            const { data } = await axios.get('/requests.json');

            for (const key in data) {
                const request = {
                    id: key,
                    coachId: data[key].coachId,
                    email: data[key].email,
                    message: data[key].message
                };
                requests.push(request);
            }

            commit(SET_REQUESTS, requests);
            commit(SET_IS_LOADING, false);
        } catch (err) {
            const errorMessage = 'Error fetching requests';
            commit(SET_ERROR_MESSAGE, errorMessage);
            commit(SET_IS_LOADING, false);
            throw new Error(
                `Error fetching requests, status code: ${err.response.status}`
            );
        }
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
