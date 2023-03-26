import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const cart = ref([])
  function add(payload) {
    const { id } = payload;
    const isOnCart = !!cart.value.filter((x) => x.id === id).length;
    if (isOnCart) {
      const temp = [];
      cart.value.forEach(x => {
        if (x.id === id) x.amount++;
        temp.push(x);
      })
      cart.$patch(temp);
    } else {
      cart.value.push(payload);
    }
  }

  return { cart, add }
})
