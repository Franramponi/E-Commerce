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
        tryRegister() {
            if (this.isLogin == false) {
                if (this.user.name == 'username' && this.user.pass == 'password') {
                    this.login({ name: this.user.name, email: 'user@gmail.com', creditCard: '4545858565652525', address: '5th Avenue', document: '424235351', phoneNumber: '11505062253', permLevel: 1, vendorID: -1 });
                    this.$router.push("/");
                }
                else if (this.user.name == 'admin' && this.user.pass == 'password') {
                    this.login({ name: this.user.name, email: 'admin@gmail.com', creditCard: '13674678136', address: '2381 Admin Dr.', document: '26392101', phoneNumber: '13894712983', permLevel: 10, vendorID: 1 });
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
        },
    }
}

</script>

<template>
    <ion-page>
        <ion-content>
            <div class="page-body">
                <div class="login-container">
                    <div class="login-form">
                        <h2 class="title">Sing up</h2>
                        <ion-input class="login-form-input" v-model="user.name" label="Username:"
                            placeholder="username"></ion-input>
                        <ion-input class="login-form-input" v-model="user.pass" label="Password:" type="password"
                            placeholder="password"></ion-input>
                        <ion-input class="login-form-input" v-model="user.email" label="Email:" type="email"
                            placeholder="email"></ion-input>
                        <ion-input class="login-form-input" v-model="user.adress" label="Adress:" type="text"
                            placeholder="adress"></ion-input>
                        <ion-input class="login-form-input" v-model="user.phoneNumber" label="Phone Number:" type="tel"
                            placeholder="Phone Number"></ion-input>
                        <ion-input class="login-form-input" v-model="user.document" label="Document:" type="text"
                            placeholder="Document"></ion-input>
                        <ion-select class="login-form-input" value="no" label="Register as a seller?" placeholder="">
                            <ion-select-option selected value="yes">Yes</ion-select-option>
                            <ion-select-option value="no">No</ion-select-option>
                        </ion-select>
                        <ion-button class="login-button" @click="tryRegister">Register</ion-button>
                    </div>
                </div>

                <Footer />
        </div>
    </ion-content>
</ion-page></template>
