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
          <b-form-group id="example-input-group-2" label="Designation" label-for="example-input-2">
            <b-form-select
              name="example-input-9"
              v-model="register.designation"
              v-validate="{ required: true }"
              :options="designations"
              :state="validateState('example-input-3')"
              aria-describedby="input-2-live-feedback"
              data-vv-as="Food"
            ></b-form-select>

            <b-form-invalid-feedback
              id="input-2-live-feedback"
            >{{ veeErrors.first('example-input-9') }}</b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row class="justify-content-center">
        <b-col cols="6">
          <b-form-group id="example-input-group-1" label="First Name" label-for="example-input-1">
            <b-form-input
              name="example-input-1"
              v-model="register.firstname"
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
          <b-form-group id="example-input-group-1" label="Last Name" label-for="example-input-1">
            <b-form-input
              id="example-input-1"
              name="example-input-2"
              v-model="register.lastname"
              v-validate="{ required: true, min: 3 }"
              :state="validateState('example-input-2')"
              aria-describedby="input-1-live-feedback"
              data-vv-as="Name"
            ></b-form-input>

            <b-form-invalid-feedback
              id="input-1-live-feedback"
            >{{ veeErrors.first('example-input-2') }}</b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row class="justify-content-center">
        <b-col cols="6">
          <b-form-group id="example-input-group-1" label="E-mail" label-for="example-input-1">
            <b-form-input
              name="example-input-4"
              v-model="register.email"
              v-validate="{ required: true, min: 3 }"
              :state="validateState('example-input-1')"
              aria-describedby="input-1-live-feedback"
              data-vv-as="Name"
            ></b-form-input>

            <b-form-invalid-feedback
              id="input-1-live-feedback"
            >{{ veeErrors.first('example-input-4') }}</b-form-invalid-feedback>
          </b-form-group>
        </b-col>

        <b-col cols="6">
          <b-form-group id="example-input-group-1" label="Password" label-for="example-input-1">
            <b-form-input
              type="password"
              id="example-input-1"
              name="example-input-5"
              v-model="register.password"
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
        <b-col cols="12">
          <b-form-group id="example-input-group-1" label="Address" label-for="example-input-1">
            <b-form-input
              name="example-input-6"
              v-model="register.address"
              v-validate="{ required: true, min: 3 }"
              :state="validateState('example-input-1')"
              aria-describedby="input-1-live-feedback"
              data-vv-as="Name"
            ></b-form-input>

            <b-form-invalid-feedback
              id="input-1-live-feedback"
            >{{ veeErrors.first('example-input-6') }}</b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row class="justify-content-center">
        <b-col cols="6">
          <b-form-group id="example-input-group-1" label="Pin Code." label-for="example-input-1">
            <b-form-input
              id="example-input-1"
              name="example-input-7"
              v-model="register.pincode"
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

        <b-col cols="6">
          <b-form-group id="example-input-group-1" label="Contact" label-for="example-input-1">
            <b-form-input
              name="example-input-8"
              v-model="register.contact"
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
      </b-row>
      <b-row>
        <b-col cols="6">
          <b-form-group id="example-input-group-2" label="Blood Group" label-for="example-input-2">
            <b-form-select
              name="example-input-9"
              v-model="register.bloodgroup"
              v-validate="{ required: true }"
              :options="bloodgroup"
              :state="validateState('example-input-3')"
              aria-describedby="input-2-live-feedback"
              data-vv-as="Food"
            ></b-form-select>

            <b-form-invalid-feedback
              id="input-2-live-feedback"
            >{{ veeErrors.first('example-input-9') }}</b-form-invalid-feedback>
          </b-form-group>
        </b-col>

        <b-col cols="6">
          <b-form-group
            id="example-input-group-1"
            label="Orginasation Name"
            label-for="example-input-1"
          >
            <b-form-input
              name="example-input-8"
              v-model="register.organisationname"
              v-validate="{ required: true, min: 3 }"
              :state="validateState('example-input-1')"
              aria-describedby="input-1-live-feedback"
              data-vv-as="Name"
            ></b-form-input>

            <b-form-invalid-feedback
              id="input-1-live-feedback"
            >{{ veeErrors.first('example-input-12') }}</b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-col cols="6">
          <b-form-group id="example-input-group-1" label="Facebook ID" label-for="example-input-1">
            <b-form-input
              id="example-input-1"
              name="example-input-10"
              v-model="register.facebookid"
              v-validate="{ required: true, min: 3 }"
              :state="validateState('example-input-2')"
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

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button class="ml-2" @click="resetForm()">Reset</b-button>
    </b-form>
  </div>
</template>
<script>
import http from "../../http-common";
import axios from "axios";
export default {
  name: "registerRegister",
  data() {
    return {
      designations: ["Coach", "Manager", "Refrees", "Crew Member"],
      confirmpassword: "",
      register: {
        designation: "",
        firstname: "",
        lastname: "",
        organisationname: "",
        contact: 0,
        dateofbirth: null,
        email: "",
        pincode: 0,
        address: "",
        password: "",
        facebookid: "",
        instaid: ""
      },
      bloodgroup: ["O-", "O+", "B+", "B-", "A-", "A+", "AB+", "AB-"],
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
        designation: this.register.designation,
        firstname: this.register.firstname,
        lastname: this.register.lastname,
        organisationname: this.register.organisationname,
        contact: parseInt(this.register.contact),

        email: this.register.email,
        pincode: parseInt(this.register.pincode),
        address: this.register.address,
        password: this.register.password,

        bloodgroup: this.register.bloodgroup,
        facebookid: this.register.facebookid,
        instaid: this.register.instaid
      };
       var user = {
        firstName: this.register.firstname,
        lastName: this.register.lastname,
        email: this.register.email,
        username: this.register.email,
        password: this.register.password,
        usertype:"Team"
      };
      if (result) {
        http
          .post("/official/register", data)
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