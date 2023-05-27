<script>
import { IonPage, IonButton, IonInput } from '@ionic/vue'
import { useLoginStore } from '../stores/login.js'
import { storeToRefs } from 'pinia';
import Footer from './Footer.vue'

export default {
  components: { Footer, IonPage, IonButton, IonInput },
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
				if (this.user.name == 'username' && this.user.pass == 'password') {
					this.login({ name: this.user.name, permLevel: 1, vendorID: -1 });
					this.$router.push("/");
				}
				else if (this.user.name == 'admin' && this.user.pass == 'password') {
					this.login({ name: this.user.name, permLevel: 10, vendorID: 0 });
					this.$router.push("/");
				}
				else {
					alert("Incorrect username or password");
				}
			}
			else {
				alert("Already logged in");
			}
			this.user = {};
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
					</div>
				</div>
				<Footer/>
			</div>
    </ion-content>
  </ion-page>
</template>
