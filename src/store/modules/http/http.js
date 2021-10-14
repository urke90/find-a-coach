import {
    SET_IS_LOADING,
    SET_ERROR_MESSAGE,
    CLOSE_ERROR_MODAL
} from '../../constants';

const state = {
    isLoading: false,
    errorMessage: null
};

const getters = {
    isLoading(state) {
        return state.isLoading;
    },
    getErrorMessage(state) {
        return state.errorMessage;
    },
    hasErrorMessage(state) {
        return !!state.errorMessage;
    }
};

const mutations = {
    [SET_IS_LOADING](state, isLoading) {
        state.isLoading = isLoading;
    },
    [SET_ERROR_MESSAGE](state, message) {
        console.log('message iz mutatiton', message);
        state.errorMessage = message;
    },
    [CLOSE_ERROR_MODAL](state) {
        state.errorMessage = null;
    }
};

const actions = {
    updateLoadingStatus({ commit }, isLoading) {
        commit(SET_IS_LOADING, isLoading);
    },
    setErrorMessage({ commit }, message) {
        commit(SET_ERROR_MESSAGE, message);
    },
    closeErrorModal({ commit }) {
        commit(CLOSE_ERROR_MODAL);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
