<script>
import { IonContent, IonPage, IonButton, IonInput } from "@ionic/vue";
import { useLoginStore } from "../stores/login.js";
import { storeToRefs } from "pinia";
import Footer from "./Footer.vue";
import userService from "../services/userService.js";

export default {
  components: { IonContent, Footer, IonPage, IonButton, IonInput },
  setup() {
    const store = useLoginStore();
    const { login } = store;
    const { isLogin } = storeToRefs(store);
    return { login, isLogin };
  },
  data() {
    return {
      user: {},
      users: [],
    };
  },
  /*mounted() {
    this.loadUsersData();
  },*/
  methods: {
    errorCatch(err) {
      console.log(err);
      alert(err);
    },
    loadUserData() {
      const name = user.name;
      const pass = user.pass; 
      const req = {
        username: name,
        password: pass
      }
      userService.getData((req) => {
        console.log(req);
        this.user = req.body.user;
      }, this.errorCatch);
    },
    tryLogin() {
      if (this.isLogin == false) {
        this.loadUserData();
        console.log(this.user);
        
      } else {
        alert("Already logged in");
      }
      this.user = {};
    },
  },
};
</script>

<template>
  <ion-page>
    <ion-content>
      <div class="page-body">
        <div class="login-container">
          <div class="login-form">
            <h2 class="title">Login page</h2>
            <ion-input class="login-form-input" v-model="user.name" label="Username:" placeholder="username"></ion-input>
            <ion-input class="login-form-input" v-model="user.pass" label="Password:" type="password" placeholder="password"></ion-input>
            <ion-button class="login-button" @click="tryLogin">Login</ion-button>
          </div>
        </div>

        <Footer />
      </div>
    </ion-content>
  </ion-page>
</template>
