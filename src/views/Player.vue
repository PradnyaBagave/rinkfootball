<template><div>
  <modal v-if="showModal" @close="showModal = false"></modal>
  
  <div class="modal-backdrop fade d-none" ref="backdrop"></div>
  <b-row><b-col cols="2">
    <show-image></show-image>
    </b-col>
    <b-col cols="8">
      <b-card class="player">
        <b-row>
          <b-col cols="4">Name:</b-col>
          <b-col cols="6">{{player.firstname }} {{player.lastname }}</b-col>
        </b-row>
        <b-row>
          <b-col cols="4">Age:</b-col>

          <b-col cols="6">{{player.age}}</b-col>
        </b-row>
        <b-row>
          <b-col cols="4">Age Group:</b-col>

          <b-col cols="6">{{player.ageGrp}}</b-col>
        </b-row>
        <b-row>
          <b-col cols="4">Contact:</b-col>

          <b-col cols="6">{{player.phonenumber}}</b-col>
        </b-row>

        <b-row>
          <b-col cols="4">Email:</b-col>
          <b-col cols="6">{{player.email}}</b-col>
        </b-row>
        <b-row>
          <b-col cols="4">Address:</b-col>
          <b-col cols="6">{{player.address}}</b-col>
        </b-row>
        <b-row>
          <b-col cols="4">State:</b-col>

          <b-col cols="6">{{player.State}}</b-col>
        </b-row>
        <b-row>
          <b-col cols="4">City:</b-col>

          <b-col cols="6">{{player.city}}</b-col>
        </b-row>
        <b-row>
          <b-col cols="4">Pincode:</b-col>

          <b-col cols="6">{{player.pincode}}</b-col>
        </b-row>
        <b-row>
          <b-col cols="4">Jersey Number:</b-col>

          <b-col cols="6">{{player.jerseyNo}}</b-col>
        </b-row>
        <b-row>
          <b-col cols="4">Team Name:</b-col>

          <b-col cols="6">{{player.teamName}}</b-col>
        </b-row>
        <b-row>
          <b-col cols="4">Name of School:</b-col>

          <b-col cols="6">{{player.nameofschool}}</b-col>
        </b-row>
        <b-row>
          <b-col cols="4">Date of Birth:</b-col>

          <b-col cols="6">{{player.dateofbirth}}</b-col>
        </b-row>
        <b-row>
          <b-col cols="4">Highest Qualification:</b-col>

          <b-col cols="6">{{player.highestQualification}}</b-col>
        </b-row>
        <b-row>
          <b-col cols="4">Instagram Id:</b-col>

          <b-col cols="6">{{player.instaId}}</b-col>
        </b-row>
        <b-row>
          <b-col cols="4">Facebook Id:</b-col>

          <b-col cols="6">{{player.facebookId}}</b-col>
        </b-row>
        <b-row>
          <b-col cols="4">Association:</b-col>
          <b-col cols="6">{{player.association}}</b-col>
        </b-row>
      </b-card>
    </b-col>
  </b-row></div>
</template>
<script>

import axios from 'axios'
import http from "../http-common";
import { mapGetters } from 'vuex'
import Modal from "./common/Dialog"
export default {
  components: {
    ShowImage,Modal
  },
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
        .post("/player/login", data)
        .then(res=>{
          this.player = res.data;
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