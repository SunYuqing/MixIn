/**
 * Created by Administrator on 2017/5/29 0029.
 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
    home: true,
    about: false
};

const mutations = {
    HOME(state) {
        state.home = true;
        state.about = false;
    },
    ABOUT(state) {
        state.home = false;
        state.about = true;
    },
    OTHER(state) {
        state.home = false;
        state.about = false;
    }
};

// const actions = {
//    Home({commit}) {
//        commit('HOME');
//    },
//    About({commit}) {
//        commit('ABOUT');
//    },
//    Other({commit}) {
//        commit('OTHER');
//    }
// };

export default new Vuex.Store({
    state,
     mutations
    // actions
});
