<script setup>
import { useSidebarStore } from "../stores/sidebar";
import { useCartStore } from "../stores/cart";
import { ref } from "vue";

const sidebar = useSidebarStore();
const myCart = useCartStore();

const SidebarToggle = () => {
  sidebar.toggle();
}

const AddToCart = (payload) => {
  myCart.add(payload);
}

const color = ref();
</script>

<template>
  <main>
    <div>test components</div>
    <div class="card flex justify-content-center">
      <Button label="Check" icon="pi pi-check" />
    </div>
    <div class="card flex justify-content-center">
      <ColorPicker v-model="color" />
    </div>
    <div>color code: #{{ color }}</div>
    <Sidebar v-model:visible="sidebar.show">
      <h2>Products({{ myCart.cart.length }})</h2>
      <div v-for="item in myCart.cart" :key="item.id">
        <div>
          <p>{{ item.name }}</p>
          <p style="color: red;">{{ item.amount }}</p>
        </div>
      </div>
      <Button @click="AddToCart({ id: 1, name: 'Popmie', amount: 1 })">Add Popmie to Cart</Button>
      <Button @click="AddToCart({ id: 2, name: 'Bengbeng', amount: 1 })">Add Bengbeng to Cart</Button>
      <Button @click="AddToCart({ id: 3, name: 'Glade', amount: 1 })">Add Glade to Cart</Button>
    </Sidebar>
    <div v-for="item in myCart.cart" :key="item.id">
      <div>
        <p>{{ item.name }}</p>
        <p style="color: red;">{{ item.amount }}</p>
      </div>
    </div>
    <Button icon="pi pi-arrow-right" @click="SidebarToggle" />
    <Button @click="AddToCart({ id: 1, name: 'Popmie', amount: 1 })">Add Popmie to Cart</Button>
    <Button @click="AddToCart({ id: 2, name: 'Bengbeng', amount: 1 })">Add Bengbeng to Cart</Button>
    <Button @click="AddToCart({ id: 3, name: 'Glade', amount: 1 })">Add Glade to Cart</Button>
  </main>
</template>