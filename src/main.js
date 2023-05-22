import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import { createPinia } from 'pinia'
import { IonicVue } from '@ionic/vue';

/* Boostrap */
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';
/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCreditCard, faTruck, faHeadset, faMagnifyingGlass, faUser, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faCreditCard, faTruck, faHeadset, faMagnifyingGlass, faUser, faCartShopping, faHeart)



const app = createApp(App)
app.use(createPinia())
app.use(IonicVue)
app.use(router)
router.isReady().then(() => {
    app.component('font-awesome-icon', FontAwesomeIcon)
    app.mount('#app');
});