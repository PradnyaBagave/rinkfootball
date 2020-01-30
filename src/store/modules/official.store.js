import http from "../../http-common";
export const official = {
    namespaced: true,
    state: {
        official: []
    },
    // Getter functions
    getters: {
        getOfficial(state) {
            return state.official;
        }
    },
    // Actions 
    actions: {
        fetchOfficial({ commit }, data) {
            return new Promise((resolve, reject) => {
                // Make network request and fetch data
                // and commit the data
                commit('SET_OFFICIAL', data);
                resolve();
            });
        },
        saveOfficial({commit},data){
            return new Promise((resolve, reject) => {
                http
                .post("/official/register", data)
                .then(response => {
                })
                .catch(e => {
                  console.log(e);
                });
                resolve();
            }); 
        }
    },
    // Mutations
    mutations: {
        SET_OFFICIAL(state, data) {
            state.official = data;
        }
    }
}