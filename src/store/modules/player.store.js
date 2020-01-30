import http from "../../http-common";
import axios from "axios";
export const player = {
  namespaced: true,
  state: {
    noimage:false,
    player: {},
    players: [],
    photo: "",
    photoID: ""
  },
  // Getter functions
  getters: {
    getNoImage(state){ 
      return state.noimage;
    },
    getPlayer(state) {
      return state.player;
    },
    getPlayers(state) {
      return state.players;
    }
  },
  // Actions
  actions: {
    setNoImage({commit}, data){
      commit("SET_NOIMAGE",data)
    },
    fetchPlayer({ commit }, data) {
      return new Promise((resolve, reject) => {
        // Make network request and fetch data
        // and commit the data
        commit("SET_PLAYER", data);
        resolve();
      });
    },
    uploadPhoto({ commit }, file) {
      let formData = new FormData();
      formData.append('file', file);
        return new Promise((resolve, reject) => {
          axios.post("http://127.0.0.1:3000/upload", formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          }).then(response => {
                commit("SET_PHOTO", response.data);
                resolve(response);
              })
              .catch(e => {
                console.log(e);
              });
          });

    },
    savePlayer({ state, commit }, data) {
      axios.defaults.headers.common['Authorization'] = localStorage.getItem(
        'jwtToken'
      );
      return new Promise((resolve, reject) => {
        http.post("/player", data)
          .then(response => {
            state.players.push(response.data);
            commit("SET_PLAYERS", state.players);
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
    SET_NOIMAGE(state,data){
      state.noimage = data;
    },
    SET_PLAYER(state, data) {
      state.player = data;
    },
    SET_PLAYERS(state, data) {
      state.players = data;
    },
    SET_PHOTO(state, data) {
        state.photo = data;
    }
  }
};
