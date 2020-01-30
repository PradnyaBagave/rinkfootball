Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@PradnyaBagave 
Learn Git and GitHub without any code!
Using the Hello World guide, you’ll start a branch, write comments, and open a pull request.


guideveloper
/
mongodb-express-vuejs-node-image-upload
1
30
 Code Issues 0 Pull requests 2 Actions Projects 0 Wiki Security Insights
mongodb-express-vuejs-node-image-upload/src/views/Login.vue
@guideveloper guideveloper initial commit
a79d425 on Aug 18, 2018
Executable File  122 lines (113 sloc)  2.44 KB
  
<template>
  <b-row class="justify-content-center">
    <b-col cols="12" md="8" lg="6">
      <b-jumbotron>
        <h2 class="mt-0 mt-sm-3 mb-2">Login</h2>
        <div v-if="errors && errors.length">
          <div v-for="(error, i) of errors" :key="i">
            <b-alert show>{{error.message}}</b-alert>
          </div>
        </div>
        <form @submit="onSubmit" class="login">
          <input
            v-model.trim="login.username"
            type="text"
            name="username"
            class="login-input"
            placeholder="Username"
          />
          <input
            v-model.trim="login.password"
            type="password"
            name="password"
            class="login-input"
            placeholder="Password"
          />
          <select v-model="userType" class="login-input">
            <option
              v-for="(option,n) in options"
              :key="n"
              v-bind:value="option.value"
            >{{ option.text }}</option>
          </select>
          <b-button type="submit" variant="warning" class="login-button">Login</b-button>
          <p class="mt-3">
            First time here?
            <a href="#/register">Create an account</a>
          </p>
        </form>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      login: {},
      userType: "",
      options: [
        { text: "player", value: "player" },
        { text: "team", value: "team" },
        { text: "official", value: "official" }
      ],
      errors: []
    };
  },
  methods: {
    onSubmit(evt) {
	  evt.preventDefault();
      let data = {
        user: this.login,
        userType: this.userType
      };
      // return new Promise((resolve, reject) => {
      //   this.$store.dispatch("user/setUser", data);
      // })
      //   .then(response => {
      //     console.log(response);
      //     let user = response.data.user;
      //     user.loggedIn = response.data.success;
      //     this.$store.state.user = user;
      //     localStorage.setItem("newUser", JSON.stringify(user));
      //     localStorage.setItem("newUserType", JSON.stringify(this.userType));
      //     localStorage.setItem("jwtToken", response.data.token);
      //     this.$router.push({
      //       name: "ImageList"
      //     });
      //   })
      //   .catch(e => {
      //     this.errors.push(e);
      //   });
      axios.post(`http://localhost:3000/api/auth/login/`, this.login)
				.then(response => {
					let user = response.data.user
					user.loggedIn = response.data.success
					this.$store.state.user = user
					localStorage.setItem('newUser', JSON.stringify(user))
					localStorage.setItem('jwtToken', response.data.token)
					this.$router.push({
						name: this.userType
					})
				})
				.catch(e => {
					this.errors.push(e)
				})
      
    },
    register() {
      this.$router.push({
        name: "Register"
      });
    }
  }
};
</script>

<style>
.login {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: white;
  border-radius: 3px;
}
.login-input {
  padding: 20px;
  border-radius: 3px;
  border: 2px solid #e9ecef;
  margin-bottom: 20px;
}
.login-button {
  padding: 15px;
  margin-bottom: 20px;
  cursor: pointer;
}
.register-button {
  padding: 15px;
  color: #2c3e50;
  background-color: #e9ecef;
  border-color: #e9ecef;
  cursor: pointer;
}
.register-button:hover {
  background-color: #c5d0da;
  border-color: #c5d0da;
  color: #2c3e50;
}
.btn-success:focus,
.btn-success:active,
.btn-success.focus {
  box-shadow: 0 0 0 0.2rem rgba(44, 62, 80, 0.2);
}
.btn-success:not([disabled]):not(.disabled):active,
.btn-success:not([disabled]):not(.disabled).active {
  background-color: #c5d0da;
  border-color: #c5d0da;
  color: #2c3e50;
  box-shadow: 0 0 0 0.2rem rgba(44, 62, 80, 0.2);
}
</style>