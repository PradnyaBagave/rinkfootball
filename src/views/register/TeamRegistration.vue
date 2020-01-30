<template>
  <div>
    <div v-if="errors && errors.length">
      <div v-for="(error, i) of errors" :key="i">
        <b-alert show>{{error.message}}</b-alert>
      </div>
    </div>
    <b-form @submit.stop.prevent="onSubmit">
      <b-row class="justify-content-center">
        <b-col cols="6">
          <b-form-group id="example-input-group-1" label="Team Name" label-for="example-input-1">
            <b-form-input
              name="example-input-1"
              v-model="register.teamname"
              v-validate="{ required: true, min: 3 }"
              :state="validateState('example-input-1')"
              aria-describedby="input-1-live-feedback"
              data-vv-as="Name"
            ></b-form-input>

            <b-form-invalid-feedback
              id="input-1-live-feedback"
            >{{ veeErrors.first('example-input-1') }}</b-form-invalid-feedback>
          </b-form-group>
        </b-col>

        <b-col cols="6">
          <b-form-group id="example-input-group-2" label="Team Contact" label-for="example-input-2">
            <b-form-input
              id="example-input-2"
              name="example-input-2"
              v-model="register.teamcontact"
              v-validate="{ required: true, min: 3 }"
              :state="validateState('example-input-2')"
              aria-describedby="input-1-live-feedback"
              data-vv-as="Name"
            ></b-form-input>

            <b-form-invalid-feedback
              id="input-2-live-feedback"
            >{{ veeErrors.first('example-input-2') }}</b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row class="justify-content-center">
        <b-col cols="6">
          <b-form-group id="example-input-group-3" label="Coach Name" label-for="example-input-3">
            <b-form-input
              name="example-input-4"
              v-model="register.coachname"
              v-validate="{ required: true, min: 3 }"
              :state="validateState('example-input-4')"
              aria-describedby="input-1-live-feedback"
              data-vv-as="Name"
            ></b-form-input>

            <b-form-invalid-feedback
              id="input-1-live-feedback"
            >{{ veeErrors.first('example-input-4') }}</b-form-invalid-feedback>
          </b-form-group>
        </b-col>

        <b-col cols="6">
          <b-form-group
            id="example-input-group-1"
            label="Coach Contact"
            label-for="example-input-1"
          >
            <b-form-input
              id="example-input-1"
              name="example-input-5"
              v-model="register.coachcontact"
              v-validate="{ required: true, min: 3 }"
              :state="validateState('example-input-2')"
              aria-describedby="input-1-live-feedback"
              data-vv-as="Name"
            ></b-form-input>

            <b-form-invalid-feedback
              id="input-1-live-feedback"
            >{{ veeErrors.first('example-input-5') }}</b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row class="justify-content-center">
        <b-col cols="6">
          <b-form-group id="example-input-group-2" label="Age Group" label-for="example-input-2">
            <b-form-select
              name="example-input-6"
              v-model="register.agegroup"
              v-validate="{ required: true }"
              :options="agegroups"
              :state="validateState('example-input-3')"
              aria-describedby="input-2-live-feedback"
              data-vv-as="Food"
            ></b-form-select>

            <b-form-invalid-feedback
              id="input-2-live-feedback"
            >{{ veeErrors.first('example-input-6') }}</b-form-invalid-feedback>
          </b-form-group>
        </b-col>

        <b-col cols="6">
          <b-form-group id="example-input-group-1" label="Jersey" label-for="example-input-1">
            <b-form-input
              id="example-input-1"
              name="example-input-7"
              v-model="register.jersey"
              v-validate="{ required: true, min: 3 }"
              :state="validateState('example-input-2')"
              aria-describedby="input-1-live-feedback"
              data-vv-as="Name"
            ></b-form-input>

            <b-form-invalid-feedback
              id="input-1-live-feedback"
            >{{ veeErrors.first('example-input-7') }}</b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row class="justify-content-center">
        <b-col cols="6">
          <b-form-group id="example-input-group-1" label="E-mail" label-for="example-input-1">
            <b-form-input
              name="example-input-8"
              v-model="register.email"
              v-validate="{ required: true, min: 3 }"
              :state="validateState('example-input-1')"
              aria-describedby="input-1-live-feedback"
              data-vv-as="Name"
            ></b-form-input>

            <b-form-invalid-feedback
              id="input-1-live-feedback"
            >{{ veeErrors.first('example-input-8') }}</b-form-invalid-feedback>
          </b-form-group>
        </b-col>

        <b-col cols="6">
          <b-form-group id="example-input-group-1" label="Password" label-for="example-input-1">
            <b-form-input
              type="password"
              id="example-input-1"
              name="example-input-9"
              v-model="register.password"
              v-validate="{ required: true, min: 3 }"
              :state="validateState('example-input-2')"
              aria-describedby="input-1-live-feedback"
              data-vv-as="Name"
            ></b-form-input>

            <b-form-invalid-feedback
              id="input-1-live-feedback"
            >{{ veeErrors.first('example-input-9') }}</b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row class="justify-content-center">
        <b-col cols="6">
          <b-form-group id="example-input-group-1" label="Facebook ID" label-for="example-input-1">
            <b-form-input
              name="example-input-10"
              v-model="register.facebookid"
              v-validate="{ required: true, min: 3 }"
              :state="validateState('example-input-1')"
              aria-describedby="input-1-live-feedback"
              data-vv-as="Name"
            ></b-form-input>

            <b-form-invalid-feedback
              id="input-1-live-feedback"
            >{{ veeErrors.first('example-input-10') }}</b-form-invalid-feedback>
          </b-form-group>
        </b-col>

        <b-col cols="6">
          <b-form-group id="example-input-group-1" label="Instagram ID" label-for="example-input-1">
            <b-form-input
              id="example-input-1"
              name="example-input-11"
              v-model="register.instaid"
              v-validate="{ required: true, min: 3 }"
              :state="validateState('example-input-2')"
              aria-describedby="input-1-live-feedback"
              data-vv-as="Name"
            ></b-form-input>

            <b-form-invalid-feedback
              id="input-1-live-feedback"
            >{{ veeErrors.first('example-input-11') }}</b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-form-group id="example-input-group-2" label="Association" label-for="example-input-2">
            <b-form-select
              name="example-input-13"
              v-model="register.association"
              v-validate="{ required: true }"
              :options="associations"
              :state="validateState('example-input-3')"
              aria-describedby="input-2-live-feedback"
              data-vv-as="Food"
            ></b-form-select>
            <b-form-invalid-feedback
              id="input-2-live-feedback"
            >{{ veeErrors.first('example-input-13') }}</b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-form-group id="example-input-group-2" label="Arrival" label-for="example-input-2">
            <b-form-select
              name="example-input-14"
              v-model="register.arrival"
              v-validate="{ required: true }"
              :options="arrivals"
              :state="validateState('example-input-3')"
              aria-describedby="input-2-live-feedback"
              data-vv-as="Food"
            ></b-form-select>

            <b-form-invalid-feedback
              id="input-2-live-feedback"
            >{{ veeErrors.first('example-input-14') }}</b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button class="ml-2" @click="resetForm()">Reset</b-button>
    </b-form>
  </div>
</template>
<script>
import http from "../../http-common";
import axios from "axios";
export default {
  name: "TeamRegister",
  data() {
    return {
      register: {
        teamname: "",
        teamcontact: 0,
        coachname: "",
        coachcontact: 0,
        agegroup: "",
        jersey: "",
        arrival: "",
        password: "",
        facebookid: "",
        instaid: "",
        email: "",
        association: ""
      },
      agegroups: [
        "U10 Boys",
        "U12 Boys",
        "U14 Boys",
        "U17 Boys",
        "U19 Boys",
        "OPEN Men",
        "U12 Girls",
        "U17 Girls",
        "Open Women"
      ],
      associations: [
        "Hyderabad Rink Football Association",
        "Pune Rink Football Association",
        "Kochi Rink Football Association",
        "Mumbai City Rink Football Association",
        "Mumbai Sub Rink Football Association",
        "Thane Rink Football Association",
        "Chandigarh Rink Football Association",
        "Nagpur Rink Football Association",
        "Nashik Rink Football Association",
        "Nangulure Rink Football Association"
      ],
      arrivals: [
        "Nashik Road Railway Station",
        "Nashik Road Bus Stop",
        "Nashik - Ozar Airport"
      ],
      errors: []
    };
  },
  methods: {
    validateState(ref) {
      if (
        this.veeFields[ref] &&
        (this.veeFields[ref].dirty || this.veeFields[ref].validated)
      ) {
        return !this.veeErrors.has(ref);
      }
      return null;
    },
    resetForm() {
      this.form = {
        name: null,
        food: null
      };

      this.$nextTick(() => {
        this.$validator.reset();
      });
    },
    onSubmit() {
      const result = this.$validator.validateAll();
      var data = {
        teamname: this.register.teamname,
        teamcontact: parseInt(this.register.teamcontact),
        coachname: this.register.coachname,
        coachcontact: parseInt(this.register.coachcontact),
        agegroup: this.register.agegroup,
        jersey: this.register.jersey,
        arrival: this.register.arrival,
        association: this.register.association,
        password: this.register.password,
        facebookid: this.register.facebookid,
        instaid: this.register.instaid,
        email: this.register.email
      };
      var user = {
        firstName: this.register.teamname,
        lastName: this.register.coachname,
        email: this.register.email,
        username: this.register.email,
        password: this.register.password,
        usertype:"Team"
      };
      console.log("user",user)
      if (result) {
        http
          .post("/team/register", data)
          .then(response => {
            this.register.id = response.data.id;
            axios
            .post(`http://localhost:3000/api/auth/register/`, user)
            .then(response => {
              this.$router.push({
                name: "Login"
              });
            })
            .catch(e => {
              this.errors.push(e);
            });
          })
          .catch(e => {
            console.log(e);
          });
      }
    }
  }
};
</script>