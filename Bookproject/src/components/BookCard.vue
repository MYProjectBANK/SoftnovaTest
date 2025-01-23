<template>
  <div
  class="book-card rounded-lg overflow-hidden hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out bg-white bg-opacity-70"
  >
    <img :src="book.image" :alt="book.title" class="w-full h-50 object-cover" />
    <div class="p-4">
      <h2 class="text-lg font-serif font-bold mb-2">{{ book.title }}</h2>
      <p class="text-sm font-serif text-gray-600 mb-2">by {{ book.author }}</p>
      <p class="text-yellow-600  font-bold mb-4">฿{{ book.price }}</p>
      <button
      @click="$emit('add-to-cart', book)"
      class="bg-red-900 hover:bg-orange-950 text-amber-500 font-bold py-2 px-4 rounded-full">
 
      เพิ่มลงตะกร้า

    </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookCard",
  props: {
    book: Object,
  },
};
</script>

