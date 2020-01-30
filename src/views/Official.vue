<template>
  <div>
  <!-- use the modal component, pass in the prop -->
  <modal v-if="showModal" @close="showModal = false"></modal>
  <div class="modal-backdrop fade d-none" ref="backdrop"></div>
    <b-row>
      <b-col cols="4" class="mb-4">
        <pulse-loader v-if="loading" :loading="loading" :color="'#c3c3c3'" class="text-center" />
        <p v-if="loading" class="text-center w-75" style="word-wrap:break-word;">
          <strong>Uploading</strong>
          {{ loadingText }}
        </p>
        <div class="add-button" :style="{ 'background-image': 'url(' + '/uploads/' + image[0] + ')' }"></div>
      </b-col>
      <b-col cols="8">
        <b-card>
          Official Detail
          <b-row>
            <b-col cols="4">Name:</b-col>
            <b-col cols="6">{{official.firstname}} {{official.last}}</b-col>
          </b-row>

          <b-row>
            <b-col cols="4">Orginasation:</b-col>
            <b-col cols="6">{{official.orginasation}}</b-col>
          </b-row>

          <b-row>
            <b-col cols="4">Contact:</b-col>
            <b-col cols="6">{{official.contact}}</b-col>
          </b-row>

          <b-row>
            <b-col cols="4">E-mail:</b-col>
            <b-col cols="6">{{official.email}}</b-col>
          </b-row>

          <b-row>
            <b-col cols="4">Address:</b-col>
            <b-col cols="6">{{official.address}}</b-col>
          </b-row>

          <b-row>
            <b-col cols="4">Pin Code:</b-col>
            <b-col cols="6">{{official.pincode}}</b-col>
          </b-row>

          <b-row>
            <b-col cols="4">Blood Group:</b-col>
            <b-col cols="6">{{official.bloodgroup}}</b-col>
          </b-row>

          <b-row>
            <b-col cols="4">Facebook ID:</b-col>
            <b-col cols="6">{{official.facebookid}}</b-col>
          </b-row>

          <b-row>
            <b-col cols="4">Istagram ID:</b-col>
            <b-col cols="6">{{official.instaid}}</b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import axios from "axios";
import http from "../http-common";
import UploadPhoto from "./common/UploadPhoto";
import Modal from "./common/Dialog"
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { mapGetters } from 'vuex'
export default {
  components: {
    UploadPhoto,
    PulseLoader,Modal
  },
  data() {
    return {
      official: {},
      image: "",
      loadingText: "",
      loading: false,
      showModal: false
    };
  },
  created() {
    axios.defaults.headers.common["Authorization"] = localStorage.getItem(
      "jwtToken"
    );
  },
  computed: {
   ...mapGetters({
			user: 'user',
		})
  },
  created() {
    var data = {
      email: this.user.email
    };
    http.post("/official/login", data).then(res => {
      console.log(res.data);
      this.official = res.data;
    });
    this.getImages();
  },
  methods: {
    getImages() {
      axios
        .get(`http://localhost:3000/uploads`)
        .then(response => {
          this.image = response.data;
          if(this.image.length==0){
              this.showModal = true;
          }
         // this.showModal = false;
        })
        .catch(e => {
          this.errors.push(e);
         
        });
    }
  }
};
</script>
<style scoped>
.player {
  margin: 10px;
}
</style>