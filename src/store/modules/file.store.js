import axios from "axios";
export const uploadFile = {
    namespaced: true,
    state: {
        files: []
    },
    // Getter functions
    getters: {
        getFile(state) {
            return state.files;
        }
    },
    // Actions 
    actions: {
        uploadFiles({ commit }) {
            return new Promise((resolve, reject) => {
                axios
        .get("http://127.0.0.1:5000/api/files")
        .then(response => {
            commit('SET_FILES',response.data);
          resolve(response);
        });
        });
        },
        deleteFile({commit},file){
            return new Promise((resolve, reject) => {
            axios
          .delete("http://127.0.0.1:5000/api/files/" + file._id)
          .then((res) => {
              resolve(res);
          })
          .catch(() => {
            console.log("Error deleting file");
          });
        });
        }
    },
    // Mutations
    mutations: {
        SET_FILES(state, data) {
            state.files = data;
        }
    }
}