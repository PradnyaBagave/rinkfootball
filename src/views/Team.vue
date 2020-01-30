<template>
<div>
<modal v-if="showModal" @close="showModal = false"></modal>
<div class="modal-backdrop fade d-none" ref="backdrop"></div>
  <b-row>
      <b-col cols="2">
    <show-image></show-image>
    </b-col>
    <b-col cols="8">
      <b-card class="player">
        <b-row>
          <b-col cols="4">Team Name:</b-col>
          <b-col cols="6">{{player.teamname }}</b-col>
        </b-row>
        <b-row>
          <b-col cols="4">Team Contact:</b-col>
          <b-col cols="6">{{player.teamcontact}}</b-col>
        </b-row>
        <b-row>
          <b-col cols="4">Coach Name:</b-col>
          <b-col cols="6">{{player.coachname }}</b-col>
        </b-row>
        <b-row>
          <b-col cols="4">Team Contact:</b-col>
          <b-col cols="6">{{player.coachcontact}}</b-col>
        </b-row>
        <b-row>
          <b-col cols="4">Age Group:</b-col>
          <b-col cols="6">{{player.agegroup}}</b-col>
        </b-row>
        <b-row>
          <b-col cols="4">Email:</b-col>
          <b-col cols="6">{{player.email}}</b-col>
        </b-row>
        <b-row>
          <b-col cols="4">Jersey:</b-col>
          <b-col cols="6">{{player.jersey}}</b-col>
        </b-row>
        <b-row>
          <b-col cols="4">Association:</b-col>
          <b-col cols="6">{{player.association}}</b-col>
        </b-row>
      </b-card>
    
      <team-selection ></team-selection>
      </b-col>
  </b-row>
</div>
</template>
<script>
import ShowImage from './common/ShowImage'
import teamSelection from './common/teamselection'
import axios from 'axios'
import http from "../http-common";

import { mapGetters } from 'vuex'
import Modal from "./common/Dialog"
import { mapGetters } from 'vuex'
export default {
    data(){
      return {
        player:{},
        showModal:false
      };
    },
    created(){
        axios.defaults.headers.common['Authorization'] = localStorage.getItem(
			'jwtToken'
		)
    },
     components: {
    ShowImage,Modal,teamSelection
  },
    computed:{
    ...mapGetters({
			user: 'user',
		})
    },
    created(){
      var data = {
        email: this.user.email
      }
      http
        .post("/team/login", data)
        .then(res=>{
          console.log(res.data);
          this.player = res.data;
        localStorage.setItem('newAssociation', res.data.association)
        localStorage.setItem('newTeamid', res.data._id)
        localStorage.setItem('newageGroup', res.data.agegroup)
          this.$store.dispatch('team/fetchTeam',this.player)
           setTimeout(()=>{
               
          this.showModal = this.$store.state.noimage
          },5)
          
        })
    }
}
</script>
<style scoped>
.player {
  margin: 10px;
}
</style>