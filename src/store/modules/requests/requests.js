import axios from '../../../api/axios';
import { ADD_NEW_REQUEST, SET_REQUESTS } from '../../constants';

const state = {
    requests: []
};

const getters = {
    allRequests(state) {
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
            const { data } = await axios.post('/requests.json', newRequest);
            newRequest.id = data.name;
            commit(ADD_NEW_REQUEST, newRequest);
        } catch (err) {
            console.error(err);
        }
    },
    async setRequests({ commit }) {
        try {
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
        } catch (err) {
            console.error('error setting requests', err);
        }
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
