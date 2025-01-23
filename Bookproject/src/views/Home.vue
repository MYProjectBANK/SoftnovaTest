<template>
  <div class="bg">

    <Navbar />

    <div class="text-center py-4 bg-transparent">
      <h1
        class="bg-gradient-to-r from-amber-500 to-amber-500 bg-clip-text text-9xl font-extrabold text-transparent ..."
        style="font-family: 'harrypotter'; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);">
        harry potter
      </h1>
    </div>

        <!-- อันนี้ส้วนรูปโปรโมชั่นที่เลื่อนๆ -->
    <ImageBanner />

    <h1 class="text-slate-950 font-serif text-1xl ml-11 mt-5">Volumes 1-7</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3 p-5">
      <BookCard
        v-for="book in books"
        :key="book.id"
        :book="book"
        @add-to-cart="addToCart"/>
    </div>

    <!-- ส่วนท้ายนะครับ -->
    <FooterComponent />

    <div v-if="showToast" class="fixed bottom-5 right-5 bg-green-500 text-white px-6 py-3 rounded shadow-lg animate-fade-in-out">
      Added "{{ toastMessage }}" to cart!
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import BookCard from "../components/BookCard.vue";
import ImageBanner from "../components/baner.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default {
  name: "Home",
  components: { Navbar, BookCard, ImageBanner, FooterComponent },
  data() {
    return {
      books: [
        { id: 1, title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", price: 100, image: "src/assets/image/Harry1.png" },
        { id: 2, title: "Harry Potter and the Chamber of Secrets", author: "J.K. Rowling", price: 100, image: "src/assets/image/hrr.jpg" },
        { id: 3, title: "Harry Potter and the Prisoner of Azkaban", author: "J.K. Rowling", price: 100, image: "src/assets/image/hr2.jpg" },
        { id: 4, title: "Harry Potter and the Goblet of Fire .", author: "J.K. Rowling", price: 100, image: "src/assets/image/Harry4.jpg" },
        { id: 5, title: "Harry Potter and the Order of the Phoenix", author: "J.K. Rowling", price: 100, image: "src/assets/image/Harry5.jpg" },
        { id: 6, title: "Harry Potter and the Half-Blood Prince", author: "J.K. Rowling", price: 100, image: "src/assets/image/Harry6.jpg" },
        { id: 7, title: "Harry Potter and the Deathly Hallows", author: "J.K. Rowling", price: 100, image: "src/assets/image/Harry7.jpg" },
      ],
      showToast: false,
      toastMessage: "",
    };
  },
  methods: {
    addToCart(book) {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(book);
      localStorage.setItem("cart", JSON.stringify(cart));
      this.showToastMessage(book.title);
    },
    showToastMessage(message) {
      this.toastMessage = message;
      this.showToast = true;
      setTimeout(() => {
        this.showToast = false;
      }, 3000); // Toast จะหายไปใน 3 วินาที
    },
  },
};
</script>

<style>
/* สำหรับแอนิเมชัน Toast Notification */
@keyframes fade-in-out {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  10% {
    opacity: 1;
    transform: translateY(0);
  }
  90% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(10px);
  }
}

.animate-fade-in-out {
  animation: fade-in-out 3s ease-in-out forwards;
}
</style>
