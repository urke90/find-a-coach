import { ADD_NEW_REQUEST } from '../../constants';

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
    }
};

const actions = {
    addRequest({ commit }, payload) {
        const newRequest = {
            id: new Date().toISOString(),
            coachId: payload.coachId,
            email: payload.email,
            message: payload.message
        };

        commit(ADD_NEW_REQUEST, newRequest);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
