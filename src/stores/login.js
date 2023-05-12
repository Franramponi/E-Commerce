import { defineStore } from "pinia";
export const useLoginStore = defineStore("login", {
  state: () => {
    return { isLogin: false, user: { email: '', permissions: [] } };
  },
  getters: {
    isLogin2(){
      return this.isLogin;
    }
  },
  actions: {
    logout() {
      this.isLogin = false;
      //Vacío el usuario al cerrar sesión
      this.user = { email: '', permissions: [] }
    },
    login(user) {
      this.isLogin = true;
      this.user = user;
    },
    hasPermission(access){
      return this.user.permissions.filter((p) => p==access).length > 0 ? true:false
      // El filter devuelve una lista, sie s mayor que 0 tendria permisos y ent al caso da True.
      // Si quiero que un admin tenga acceso a todo, a tal user le paso que es admin y aca directamente le paso true.
    }
  },
});
