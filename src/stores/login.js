import { defineStore } from "pinia";

export const useLoginStore = defineStore("login", {
  state: () => {
    return {
      isLogin: false,
      user: { name: '', permLevel: 0 } };
  },
  actions: {
    logout() {
      this.isLogin = false;
      //Vacío el usuario al cerrar sesión
      this.user = {}
    },
    login(user) {
      this.isLogin = true;
      this.user = user;
    },
    hasPermission(requiredPerm){
      return this.user.permLevel >= requiredPerm;

      //return this.user.permissions.filter((p) => p==access).length > 0
      // El filter devuelve una lista, sie s mayor que 0 tendria permisos y ent al caso da True.
      // Si quiero que un admin tenga acceso a todo, a tal user le paso que es admin y aca directamente le paso true.
    }
  }
});
