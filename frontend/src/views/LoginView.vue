<script>
import { IonContent, IonPage, IonButton, IonInput } from '@ionic/vue'
import { useLoginStore } from '../stores/login.js'
import { storeToRefs } from 'pinia';
import Footer from './Footer.vue'

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
			user: {}
		}
	},
  methods: {
    tryLogin() {
      if (this.isLogin == false) {
				this.login(this.user);
				this.user = {};
			}
			else {
				alert("Already logged in");
			}
			this.user = {};
    },
	register(){
		this.$router.push("/register");
	}
  }
}

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
						<p class="login-register-text">Need an account?<a class="login-register-btn" @click="register">Sign up</a></p>
					</div>
				</div>
				
				<Footer/>
			</div>
    </ion-content>
  </ion-page>
</template>
