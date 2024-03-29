import { defineStore } from "pinia";
import { userService } from '../services/services.js'
import router from '../router/index.js'

export const useLoginStore = defineStore("login", {
  state: () => {
    return {
      isLogin: false,
      user: { name: '', email: '', creditCard:'', address:'', document:'', phoneNumber:'', permLevel: 0, vendorID: -1 } };
  },
  actions: {
    errorCatch(err) {
      console.log(err);
      alert(err);
    },
    startup() {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user != null) {
        this.setLogin(user);
      }
    },
    logout() {
      this.isLogin = false;
      //Vacío el usuario al cerrar sesión
      this.user = {}
      localStorage.removeItem("user");
      router.push("/login");
    },
    setLogin(userData) {
      this.isLogin = true;
      this.user = userData;
      localStorage.setItem("user", JSON.stringify(this.user));
    },
    login(userData) {
      const data = { name: userData.name, password: userData.pass };
      userService.login(data, (res) => {
        if (res.data.success == true) {
          const user = {
            name: res.data.user.name,
            email: res.data.user.email,
            creditCard: res.data.user.credit_card,
            address: res.data.user.address,
            document: res.data.user.document,
            phoneNumber: res.data.user.phone_number,
            permLevel: res.data.user.permission_level,
            vendorID: res.data.user.vendor_id
          }
          this.setLogin(user);
          router.push("/");
        }
        else {
          alert("Failed to login");
        }
      }, this.errorCatch);
    },
    register(userData) {
      const data = {
        name: userData.name,
        password: userData.pass,
        email: userData.email,
        credit_card: userData.creditCard,
        address: userData.address,
        document: userData.document,
        phone_number: userData.phoneNumber,
        vendor: (userData.vendor == 'yes' ? 'true' : 'false') //Can't register as vendor for some reason
      }
      userService.createUser(data, (res) => {
        if (res.data.success == true) {
          this.login({ name: data.name, pass: data.password });
        }
        else {
          alert("Failed to login");
        }
       }, this.errorCatch);
    },
    hasPermission(requiredPerm){
      return this.user.permLevel >= requiredPerm;
    },
    modifyUser(userProfile){
      userService.updateUser(this.user.name, userProfile, (res) => {
        if (res.data.success == true) {
          this.user = { ...this.user,
            address: res.data.user.address,
            creditCard: res.data.user.credit_card,
            document: res.data.user.document,
            email: res.data.user.email,
            phoneNumber: res.data.user.phone_number
          };
        } else {
          alert("Failed to update user " + this.user.name);
        }
      }, this.errorCatch);
    },
    deleteUser(){
      userService.deleteUser(this.user.name, (res) => {
        if (res.data.success == true) {
          this.logout();
        } else {
          alert("Failed to delete user " + this.user.name);
        }
      }, this.errorCatch);
    }
  }
});
