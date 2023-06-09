import { defineStore } from "pinia";

export const useLoginStore = defineStore("login", {
  state: () => {
    return {
      isLogin: false,
      user: { name: '', email: '', creditCard:'', address:'', document:'', phoneNumber:'', permLevel: 0, vendorID: -1 } };
  },
  actions: {
    startup() {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user != null) {
        this.login(user);
      }
    },
    logout() {
      this.isLogin = false;
      //Vacío el usuario al cerrar sesión
      this.user = {}
      localStorage.removeItem("user");
    },
    login(user) {
      this.isLogin = true;
      this.user = user;
      localStorage.setItem("user", JSON.stringify(this.user));
    },
    hasPermission(requiredPerm){
      return this.user.permLevel >= requiredPerm;

      //return this.user.permissions.filter((p) => p==access).length > 0
      // El filter devuelve una lista, sie s mayor que 0 tendria permisos y ent al caso da True.
      // Si quiero que un admin tenga acceso a todo, a tal user le paso que es admin y aca directamente le paso true.
    },
    modifyUser(userProfile){
      this.user.email = userProfile.email;
      this.user.address = userProfile.address;
      this.user.phoneNumber = userProfile.phoneNumber;
      this.user.creditCard = userProfile.creditCard;
      localStorage.setItem("user", JSON.stringify(this.user));
    }
  }
});