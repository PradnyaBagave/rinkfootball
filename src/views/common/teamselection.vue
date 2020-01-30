<template>
  <b-row>
    <b-col cols="4" v-if="!selected">
      <h3>Players List</h3>
      <draggable
        id="first"
        data-source="juju"
        :list="playerlist"
        class="list-group"
        draggable=".item"
        group="a"
      >
        <div
          class="list-group-item item"
          v-for="element in playerlist"
          :key="element.firstname"
        >{{ element.firstname }} {{element.lastname}}</div>

        <div
          slot="footer"
          class="btn-group list-group-item"
          role="group"
          aria-label="Basic example"
        ></div>
      </draggable>
    </b-col>

    <b-col cols="4">
      <h3>Selected Players</h3>

      <draggable
        :list="teamlist"
        class="list-group"
        :empty-insert-threshold="100"
        draggable=".item"
        group="a"
      >
        <div
          class="list-group-item item"
          v-for="element in teamlist"
          :key="element.firstname"
        >{{ element.firstname }} {{element.lastname}}</div>

        <div
          slot="footer"
          class="btn-group list-group-item"
          role="group"
          aria-label="Basic example"
        ></div>
        <b-button class="btn" v-if="teamlist.length>=2" @click="saveTeam">Save</b-button>
      </draggable>
    </b-col>
  </b-row>
</template>
<script>
import draggable from "vuedraggable";
import http from "../../http-common";
let id = 1;
export default {
  components: {
    draggable
  },
  created() {
    setTimeout(() => {
      const team = {
        association: localStorage.getItem("newAssociation"),
        agegroup: localStorage.getItem("newageGroup")
      };
      http.post("/player/byAssociation", team).then(res => {
        console.log(res.data);
        this.playerlist = res.data;
        let players = [];
        this.playerlist.forEach(player => {
          switch (team.agegroup) {
            case "U10 Boys":
              if (player.age <= 10) {
                players.push(player);
              }
              break;
            case "U12 Boys":
              if (player.age >= 11 && player.age <= 12) {
                players.push(player);
              }
              break;
            case "U14 Boys":
              if (player.age >= 12 && player.age <= 14) {
                players.push(player);
              }
              break;
            case "U17 Boys":
              if (player.age >= 14 &&player.age <= 17) {
                players.push(player);
              }
              break;
            case "U19 Boys":
              if (player.age >= 17 &&player.age <= 19) {
                players.push(player);
              }
              break;
            case "OPEN Men":
              if (player.age >= 19) {
                players.push(player);
              }
              break;
            case "U12 Girls":
              if (player.age <= 12) {
                players.push(player);
              }
              break;
            case "U17 Girls":
              if (player.age >= 12 && player.age <= 17) {
                players.push(player);
              }
              break;
            case "Open Women":
              if (player.age >= 17) {
                players.push(player);
              }
              break;
          }
        });
        this.playerlist = [...players]
      });
    }, 9);
  },
  data() {
    return {
      playerlist: [],
      teamlist: [],
      selected:false
    };
  },
  methods: {
      saveTeam(){
          let team={
              team :localStorage.getItem('newTeamid'),
              player:this.teamlist
          }
          http.post("/teamSelected",team ).then(res => {
              this.selected = true
          })
      
      }
  }
};
</script>
<style scoped>
.btn {
  padding: 5px;
}
</style>