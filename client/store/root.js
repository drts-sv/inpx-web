// initial state
const state = {
    config: {},
    settings: {
        limit: 50,
        expanded: [],
        showCounts: true,
        showDeleted: false,
        abCacheEnabled: true,
        langDefault: '',
    },
};

// getters
const getters = {};

// actions
const actions = {};

// mutations
const mutations = {
    setConfig(state, value) {
        state.config = value;
    },
    setSettings(state, value) {
        state.settings = Object.assign({}, state.settings, value);
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
