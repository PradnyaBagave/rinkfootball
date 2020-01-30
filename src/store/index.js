import Vue from "vue";
import Vuex from "vuex";
import { player } from "./modules/player.store";
import { official } from "./modules/official.store";
import { team } from "./modules/team.store";
import { uploadFile } from "./modules/file.store";
import { user } from "./modules/user.store";
import { socketStore } from "./modules/socket.store"
Vue.use(Vuex);
export const store = new Vuex.Store({
  modules: {
    player,
    official,
    team,
    uploadFile,
    user,socketStore
  }
});
