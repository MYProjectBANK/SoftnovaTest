<template>
  <nav class="bg-red-900  text-white py-4 px-6 flex justify-between items-center">
    <h1 class="ml-10 font-serif text-3xl font-bold">NaiDin</h1>
    <div class="flex space-x-6">
      <router-link to="/" class=" font-serif hover:text-gray-200">Home</router-link>
      <router-link to="/books" class=" font-serif hover:text-gray-200">Books</router-link>
      <router-link to="/cart" class=" font-serif hover:text-gray-200">
        <i class="fas fa-shopping-cart"></i> Cart
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped></style>
