<template>
  <b-row class="justify-content-center">
    <b-col cols="12" md="10" lg="8">
      <b-jumbotron>
        <h2 class="mt-0 mt-sm-3 mb-2">Register</h2>
        <b-tabs card>
          <b-tab title="Player">
			  <player></player>
		  </b-tab>
		  <b-tab title="Team">
			  <team></team>
		  </b-tab>
		   <b-tab title="Official">
			  <official></official>
		  </b-tab>
        
        </b-tabs>    
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>
import axios from "axios";
import player from "./register/PlayerRegistration";
import Team from "./register/TeamRegistration";
import official from "./register/OfficialRegistration";
export default {
  name: "Register",
  components:{
	  player,Team,official
  },
  data() {
    return {
      register: {},
      errors: []
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      axios
        .post(`http://localhost:3000/api/auth/register/`, this.register)
        .then(response => {
          this.$router.push({
            name: "Login"
          });
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  }
};
</script>
