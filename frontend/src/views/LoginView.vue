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
      user: {
        name: '',
        pass: ''
      },
      users: [],
    };
  },
  methods: {
    errorCatch(err) {
      console.log(err);
      alert(err);
    },
    loadUserData() {
      const req = {
        username: this.user.name,
        password: this.user.pass,
      };

      userService.getUserByUsernameAndPassword(req, (response) => {
        if (response.data.success) {
          this.users = response.data.users;
          // Realiza las acciones necesarias con los usuarios encontrados
          console.log(this.users);
        } else {
          alert(response.data.message);
        }
      }, this.errorCatch);
    },
    tryLogin() {
      if (this.isLogin === false) {
        this.loadUserData();
        console.log(this.user);
      } else {
        alert("Already logged in");
      }
      this.user = {
        name: '',
        pass: ''
      };
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
            <ion-input
              class="login-form-input"
              v-model="user.name"
              label="Username:"
              placeholder="username"
            ></ion-input>
            <ion-input
              class="login-form-input"
              v-model="user.pass"
              label="Password:"
              type="password"
              placeholder="password"
            ></ion-input>
            <ion-button class="login-button" @click="tryLogin"
              >Login</ion-button
            >
          </div>
        </div>

        <Footer />
      </div>
    </ion-content>
  </ion-page>
</template>
