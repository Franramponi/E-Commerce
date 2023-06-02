import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => {
    return {
			products: []
		}
  },
  actions: {
    startup() {
      const products = JSON.parse(localStorage.getItem("products"));
      if (products != null) {
        this.products = products;
      }
    },
		addProduct(product) {
			this.products.push(product);
      localStorage.setItem("products", JSON.stringify(this.products));
		},
    removeProduct(product){
      this.products.splice(this.products.indexOf(product), 1);

    }
  }
});
