<script>
import { IonPage, IonButton, IonInput } from '@ionic/vue'
import { useLoginStore } from '../stores/login'
import { storeToRefs } from 'pinia';

export default {
  components: { IonPage, IonButton, IonInput },
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
					this.login({ name: this.user.name, permLevel: 1 });
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
    <div>
      <h2>Login page</h2>
      <ion-input v-model="user.name" label="Username:" placeholder="username"></ion-input>
      <ion-input v-model="user.pass" label="Password:" type="password" placeholder="password"></ion-input>
      <ion-button @click="tryLogin">Login</ion-button>
    </div>
  </ion-page>
</template>
