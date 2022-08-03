import Vue from 'vue'
import Vuex from 'vuex'

import { AXIOS } from '@/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: {},
    loading: true,
    results: []
  },
  getters: {
    questions: state => state.questions,
    loading: state => state.loading,
    results: state => state.results,
  },
  mutations: {
    set_questions: (state, data) => {
      state.questions = data
    },

    setLoading: (state, data) => {
      state.loading = data
    },

    set_result: (state, data) => {
      state.results = data
    }
  },
  actions: {
    get_questions_action: async ({commit}) => {
      AXIOS.get('api.php?amount=10&category=18&difficulty=medium&type=multiple')
      .then(res => {
        commit('set_questions', res.data.results)
      })
      .catch(err => {
        console.log(err.message);
      })
      .finally(() => {
        commit('setLoading', false)
      })
    },

    add_to_results: (state, payload) => {
      state.results.push(
        {
          question: payload.question,
          correct_answer: payload.correct_answer,
          status: payload.status,
          answer:  payload.answer,
          point: payload.point
        }
      )
    } 
  },
  modules: {
  }
})
