import http from "../../http-common";
export const team = {
  namespaced: true,
  state: {
    team: []
  },
  // Getter functions
  getters: {
    getTeam(state) {
      return state.team;
    }
  },
  // Actions
  actions: {
    fetchTeam({ commit }, data) {
      return new Promise((resolve, reject) => {
        // Make network request and fetch data
        // and commit the data
        commit("SET_TEAM", data);
        resolve();
      });
    },
    saveTeam({ commit }, data) {
      return new Promise((resolve, reject) => {
        http
          .post("/team/register", data)
          .then(response => {
            resolve(response);
          })
          .catch(e => {
            console.log(e);
          });
      });
    }
  },
  // Mutations
  mutations: {
    SET_TEAM(state, data) {
      state.team = data;
    }
  }
};
