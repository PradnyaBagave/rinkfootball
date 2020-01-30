<template>
  <div>
    <div v-if="errors && errors.length">
      <div v-for="(error, i) of errors" :key="i">
        <b-alert show>{{error.message}}</b-alert>
      </div>
    </div>
    <b-form @submit.prevent="onSubmit">
      <b-row class="justify-content-center">
        <b-col cols="6">
          <b-form-group id="example-input-group-1" label="First Name" label-for="example-input-1">
            <b-form-input
              name="example-input-1"
              v-model="register.firstname"
              v-validate="{ required: true, min: 3 }"
              :state="validateState('example-input-1')"
              aria-describedby="input-1-live-feedback"
              data-vv-as="First Name"
            ></b-form-input>

            <b-form-invalid-feedback
              id="input-1-live-feedback"
            >{{ veeErrors.first('example-input-1') }}</b-form-invalid-feedback>
          </b-form-group>
        </b-col>

        <b-col cols="6">
          <b-form-group id="example-input-group-2" label="Last Name" label-for="example-input-2">
            <b-form-input
              id="example-input-1"
              name="example-input-2"
              v-model="register.lastname"
              v-validate="{ required: true, min: 3 }"
              :state="validateState('example-input-2')"
              aria-describedby="input-2-live-feedback"
              data-vv-as="Last Name"
            ></b-form-input>

            <b-form-invalid-feedback
              id="input-2-live-feedback"
            >{{ veeErrors.first('example-input-2') }}</b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row class="justify-content-center">
        <b-col cols="6">
          <b-form-group id="example-input-group-3" label="E-mail" label-for="example-input-4">
            <b-form-input
              name="example-input-4"
              v-model="register.email"
              v-validate="{ required: true, email:true }"
              :state="validateState('example-input-4')"
              aria-describedby="input-3-live-feedback"
              data-vv-as="Email"
            ></b-form-input>

            <b-form-invalid-feedback
              id="input-3-live-feedback"
            >{{ veeErrors.first('example-input-4') }}</b-form-invalid-feedback>
          </b-form-group>
        </b-col>

        <b-col cols="6">
          <b-form-group id="example-input-group-4" label="Password" label-for="example-input-5">
            <b-form-input
              type="password"
              id="example-input-5"
              name="example-input-5"
              v-model="register.password"
              v-validate="{ required: true, min: 3 }"
              :state="validateState('example-input-5')"
              aria-describedby="input-4-live-feedback"
              data-vv-as="Password"
            ></b-form-input>

            <b-form-invalid-feedback
              id="input-4-live-feedback"
            >{{ veeErrors.first('example-input-5') }}</b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row class="justify-content-center">
        <b-col cols="6">
          <b-form-group id="example-input-group-5" label="Age" label-for="example-input-6">
            <b-form-input
            id="example-input-6"
              name="example-input-6"
              v-model="register.age"
              v-validate="{ required: true,numeric:true ,min:1,max:2}"
              counter="2"
              :state="validateState('example-input-1')"
              aria-describedby="input-5-live-feedback"
              data-vv-as="Age"
            ></b-form-input>

            <b-form-invalid-feedback
              id="input-5-live-feedback"
            >{{ veeErrors.first('example-input-6') }}</b-form-invalid-feedback>
          </b-form-group>
        </b-col>

        <b-col cols="6">
          <b-form-group id="example-input-group-6" label="Phone No." label-for="example-input-7">
            <b-form-input
              id="example-input-7"
              name="example-input-7"
              v-model="register.phoneno"
              v-validate="{ required: true, length:10,numeric:true}"
              :state="validateState('example-input-7')"
              aria-describedby="input-6-live-feedback"
              data-vv-as="Phone Number"
            ></b-form-input>

            <b-form-invalid-feedback
              id="input-6-live-feedback"
            >{{ veeErrors.first('example-input-7') }}</b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row class="justify-content-center">
        <b-col cols="12">
          <b-form-group id="example-input-group-7" label="Address" label-for="example-input-8">
            <b-form-input
            id="example-input-8"
              name="example-input-8"
              v-model="register.address"
              v-validate="{ required: true, min: 20 ,max:100 }"
              :state="validateState('example-input-8')"
              aria-describedby="input-7-live-feedback"
              data-vv-as="Address"
            ></b-form-input>

            <b-form-invalid-feedback
              id="input-7-live-feedback"
            >{{ veeErrors.first('example-input-8') }}</b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-col cols="4">
          <b-form-group id="example-input-group-8" label="State" label-for="example-input-9">
            <b-form-select
        id="example-input-9"
          name="example-input-9"
          v-model="register.state"
          v-validate="{ required: true }"
          :options="states"
          :state="validateState('example-input-9')"
          aria-describedby="input-8-live-feedback"
          data-vv-as="State"
        ></b-form-select>
            <b-form-invalid-feedback
              id="input-8-live-feedback"
            >{{ veeErrors.first('example-input-9') }}</b-form-invalid-feedback>
          </b-form-group>
        </b-col>

        <b-col cols="4">
          <b-form-group id="example-input-group-9" label="City" label-for="example-input-10">
            <b-form-input
              id="example-input-10"
              name="example-input-10"
              v-model="register.city"
              v-validate="{ required: true, min:3 }"
              :state="validateState('example-input-10')"
              aria-describedby="input-9-live-feedback"
              data-vv-as="City"
            ></b-form-input>

            <b-form-invalid-feedback
              id="input-9-live-feedback"
            >{{ veeErrors.first('example-input-10') }}</b-form-invalid-feedback>
          </b-form-group>
        </b-col>
        <b-col cols="4">
          <b-form-group id="example-input-group-11" label="Pincode" label-for="example-input-11">
            <b-form-input
              id="example-input-11"
              name="example-input-11"
              v-model="register.pincode"
              v-validate="{ required: true, length:6,numeric:true }"
              :state="validateState('example-input-11')"
              aria-describedby="input-10-live-feedback"
              data-vv-as="Pincode"
            ></b-form-input>

            <b-form-invalid-feedback
              id="input-10-live-feedback"
            >{{ veeErrors.first('example-input-11') }}</b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="4">
          <b-form-group id="example-input-group-12" label="Date of Birth" label-for="example-input-12">
            <b-form-input
              id="example-input-12"
              name="example-input-12"
              v-model="register.dateofbirth"
              v-validate="{ required: true }"
              :state="validateState('example-input-12')"
              aria-describedby="input-11-live-feedback"
              data-vv-as="Date of Birth"
            ></b-form-input>

            <b-form-invalid-feedback
              id="input-11-live-feedback"
            >{{ veeErrors.first('example-input-12') }}</b-form-invalid-feedback>
          </b-form-group>
        </b-col>
        <b-col cols="4">
           <b-form-group id="example-input-group-13" label="Gender" label-for="example-input-13">
        <b-form-select
        id="example-input-13"
          name="example-input-13"
          v-model="register.gender"
          v-validate="{ required: true }"
          :options="genders"
          :state="validateState('example-input-13')"
          aria-describedby="input-12-live-feedback"
          data-vv-as="Gender"
        ></b-form-select>

        <b-form-invalid-feedback id="input-12-live-feedback">{{ veeErrors.first('example-input-13') }}</b-form-invalid-feedback>
      </b-form-group>
        </b-col>
        <b-col cols="4">
           <b-form-group id="example-input-group-14" label="Blood Group" label-for="example-input-14">
        <b-form-select
        id="example-input-14"
          name="example-input-14"
          v-model="register.bloodgrp"
          v-validate="{ required: true }"
          :options="bloodgroup"
          :state="validateState('example-input-14')"
          aria-describedby="input-13-live-feedback"
          data-vv-as="Blood Group"
        ></b-form-select>

        <b-form-invalid-feedback id="input-13-live-feedback">{{ veeErrors.first('example-input-14') }}</b-form-invalid-feedback>
      </b-form-group>
        </b-col>
      </b-row>
      
      <b-row class="justify-content-center">
        <b-col cols="6">
          <b-form-group id="example-input-group-15" label="Jersey Number" label-for="example-input-15">
            <b-form-input
            id="example-input-15"
              name="example-input-15"
              v-model="register.jerseyNo"
              v-validate="{ required: true,numeric:true ,min:1,max:2}"
              counter="2"
              :state="validateState('example-input-15')"
              aria-describedby="input-14-live-feedback"
              data-vv-as="Jersey Number"
            ></b-form-input>

            <b-form-invalid-feedback
              id="input-14-live-feedback"
            >{{ veeErrors.first('example-input-15') }}</b-form-invalid-feedback>
          </b-form-group>
        </b-col>

        <b-col cols="6">
          <b-form-group id="example-input-group-16" label="Highest Qualification" label-for="example-input-16">
            <b-form-input
              id="example-input-16"
              name="example-input-16"
              v-model="register.highestQualification"
              v-validate="{ required: true }"
              :state="validateState('example-input-16')"
              aria-describedby="input-15-live-feedback"
              data-vv-as="Highest Qualification"
            ></b-form-input>

            <b-form-invalid-feedback
              id="input-15-live-feedback"
            >{{ veeErrors.first('example-input-16') }}</b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>
      
      
          <b-form-group id="example-input-group-17" label="Name of School/College" label-for="example-input-17">
            <b-form-input
            id="example-input-17"
              name="example-input-17"
              v-model="register.nameofschool"
              v-validate="{ required: true, min:5}"
              counter="2"
              :state="validateState('example-input-17')"
              aria-describedby="input-16-live-feedback"
              data-vv-as="Name of School/College"
            ></b-form-input>

            <b-form-invalid-feedback
              id="input-16-live-feedback"
            >{{ veeErrors.first('example-input-17') }}</b-form-invalid-feedback>
          </b-form-group>
        
      
      <b-row class="justify-content-center">
        <b-col cols="6">
          <b-form-group id="example-input-group-18" label="Instagram ID" label-for="example-input18">
            <b-form-input
            id="example-input-18"
              name="example-input-18"
              v-model="register.instaId"
              v-validate="{ required: true}"
              counter="2"
              :state="validateState('example-input-18')"
              aria-describedby="input-17-live-feedback"
              data-vv-as="Instagram ID"
            ></b-form-input>

            <b-form-invalid-feedback
              id="input-17-live-feedback"
            >{{ veeErrors.first('example-input-18') }}</b-form-invalid-feedback>
          </b-form-group>
        </b-col>

        <b-col cols="6">
          <b-form-group id="example-input-group-19" label="Facebook Id" label-for="example-input-19">
            <b-form-input
              id="example-input-19"
              name="example-input-19"
              v-model="register.facebookId"
              v-validate="{ required: true }"
              :state="validateState('example-input-19')"
              aria-describedby="input-18-live-feedback"
              data-vv-as="Facebook Id"
            ></b-form-input>

            <b-form-invalid-feedback
              id="input-18-live-feedback"
            >{{ veeErrors.first('example-input-19') }}</b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>
      <b-form-group id="example-input-group-20" label="Association" label-for="example-input-3">
        <b-form-select
        id="example-input-20"
          name="example-input-3"
          v-model="register.association"
          v-validate="{ required: true }"
          :options="associations"
          :state="validateState('example-input-3')"
          aria-describedby="input-19-live-feedback"
          data-vv-as="Association"
        ></b-form-select>

        <b-form-invalid-feedback id="input-19-live-feedback">{{ veeErrors.first('example-input-3') }}</b-form-invalid-feedback>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button class="ml-2" @click="resetForm()">Reset</b-button>
    </b-form>
  </div>
</template>
<script>
import http from "../../http-common";
import axios from "axios";
export default {
  name: "PlayerRegister",
  data() {
    return {
      register: {
        firstname: "",
        lastname: "",
        age: 0,
        email: "",
        phoneno: 0,
        address: "",
        association: "",
        password: "",
        jerseyNo: 0,
        ageGrp: "",
        dateofbirth: "",
        gender: "",
        bloodgrp: "",
        nameofschool: "",
        highestQualification: "",
        state: "",
        city: "",
        pincode: "",
        instaId: "",
        facebookId: ""
      },
      bloodgroup: ["O-", "O+", "B+", "B-", "A-", "A+", "AB+", "AB-"],
      genders:["Male","Female","TransGender","Others"],
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
      states: [
        "Andaman and Nicobar Islands union territory",
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chandigarh",
        "Chhattisgarh",
        "Dadra and Nagar Haveli",
        "Daman and Diu",
        "Delhi",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jammu and Kashmir",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Lakshadweep",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Puducherry",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttar Pradesh",
        "Uttarakhand",
        "West Bengal",
        "Ladakh"
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
      this.register = {};

      this.$nextTick(() => {
        this.$validator.reset();
      });
    },
    onSubmit(evt) {
      const result = this.$validator.validateAll();
      if (result) {
        this.savePlayer();
      }
    },
    savePlayer() {
      switch(true){
        case this.register.age<=10 && this.register.gender==="Male":this.register.ageGrp="U10 Boys"
        break;
        case this.register.age>10 && this.register.age<=12 && this.register.gender==="Male":this.register.ageGrp="U12 Boys"
        break;
        case this.register.age>12 && this.register.age<=14 && this.register.gender==="Male":this.register.ageGrp="U14 Boys"
        break;
        case this.register.age>14 && this.register.age<=17 && this.register.gender==="Male":this.register.ageGrp="U17 Boys"
        break;
        case this.register.age>17 && this.register.age<=19 && this.register.gender==="Male":this.register.ageGrp="U19 Boys"
        break;
       case this.register.age>19 && this.register.gender==="Male":this.register.ageGrp="OPEN Men"
        break;
       case this.register.age>17 && this.register.gender==="Female":this.register.ageGrp="Open Women"
        break;
        case this.register.age<=12&& this.register.gender==="Female":this.register.ageGrp= "U12 Girls"
        break;
       case this.register.age>12 && this.register.age<=17 && this.register.gender==="Female":this.register.ageGrp="U17 Girls"
        break;
      }
      var data = {
        firstname: this.register.firstname,
        lastname: this.register.lastname,
        age: parseInt(this.register.age),
        email: this.register.email,
        phonenumber: parseInt(this.register.phoneno),
        address: this.register.address,
        association: this.register.association,
        password: this.register.password,
        teamName:this.register.association,
        jerseyNo: this.register.jerseyNo,
        ageGrp: this.register.ageGrp,
        dateofbirth: this.register.dateofbirth,
        gender: this.register.gender,
        bloodgrp: this.register.bloodgrp,
        nameofschool: this.register.nameofschool,
        highestQualification: this.register.highestQualification,
        state: this.register.state,
        city: this.register.city,
        pincode: this.register.pincode,
        instaId: this.register.instaId,
        facebookId:this.register.facebookId
      };
      var user = {
        firstName: this.register.firstname,
        lastName: this.register.lastname,
        email: this.register.email,
        username: this.register.email,
        password: this.register.password
      };
      http
        .post("/player", data)
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
};
</script>