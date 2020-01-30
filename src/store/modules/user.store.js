import http from "../../http-common";
export const user = {
  namespaced: true,
  state: {
    user: {}
  },
  actions: {
    saveUser({commit},data){
      return new Promise((resolve, reject) => {
    
      });
    },
    setUser({ commit },data) {
      return new Promise((resolve, reject) => {
        http
          .post(`/api/auth/${data.userType}/login`, data.user)
          .then(response => {
            commit("SET_USER", response.data.user);
            resolve(response);
          })
          .catch(e => {
            console.log(e);
          });
      });
    }
  },
  mutations: {
    SET_USER(state, param) {
      state.user = param
    }
  },
  getters: {
   user: state => {
      return state.user;
    }
  }
};
