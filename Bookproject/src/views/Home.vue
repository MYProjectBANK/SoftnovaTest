<template>
  <div class="bg">

<!-- เมนู -->
    <Navbar />
<!-- เมนู -->

<div class="text-center py-4 bg-transparent">
  <h1
    class="bg-gradient-to-r from-amber-500 to-amber-500 bg-clip-text text-9xl font-extrabold text-transparent magic-appear"
    style="font-family: 'harrypotter'; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);">
    harry potter
  </h1>
</div>


     <main class="my-8">
        <div class="container mx-auto px-6">
            <div class="h-64 rounded-md overflow-hidden bg-cover bg-center" style="background-image: url('src/assets/braner/12_DAYS_WEB_BANNER_CYOT_2.webp')">
                <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
                    <div class="px-10 max-w-xl">
                        <h2 class="text-2xl text-white font-serif">Personalised Hogwarts Acceptance Letter</h2>
                        <p class="mt-2 text-gray-400 font-serif">You can now receive your very own personalised replica of the Hogwarts Acceptance Letter, complete with an exclusive supplies list.</p>
                        <button class="font-serif flex items-center mt-4 px-3 py-2 bg-red-900 text-amber-300 text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                            <span>Shop Now</span>
                            <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div class="md:flex mt-8 md:-mx-4">
                <div class="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2" style="background-image: url('src/assets/braner/HERO_trunks.webp')">
                    <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
                        <div class="px-10 max-w-xl">
                            <h2 class="font-serif text-2xl text-white font-semibold">Winter Sale up to 50% Off</h2>
                            <p class="font-serif mt-2 text-gray-400">Save up to 50% off with our Harry Potter Winter Sale—enchanted apparel, cosy gifts, and festive decor for every witch, wizard, and Muggle!</p>
                            <button class="font-serif flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                                <span>Shop Now</span>
                                <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2" style="background-image: url('src/assets/braner/photo-1655640083532-be0c5abf9cde.jpg')">
                    <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
                        <div class="px-10 max-w-xl">
                            <h2 class="font-serif text-2xl text-white font-semibold">New In: Magical Hogwarts</h2>
                            <p class="font-serif mt-2 text-gray-400">Step into the enchanting, celestial Wizarding World with our brand-new Magical Hogwarts collection.</p>
                            <button class="font-serif flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                                <span>Shop Now</span>
                                <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>




<!-- อันนี้ส้วนรูปโปรโมชั่นที่เลื่อนๆ -->
    <ImageBanner />
<!-- อันนี้ส้วนรูปโปรโมชั่นที่เลื่อนๆ -->

    <h1 class="text-slate-950 font-serif text-1xl ml-11 mt-5">Volumes 1-7</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3 p-5">
      <BookCard
        v-for="book in books"
        :key="book.id"
        :book="book"
        @add-to-cart="addToCart"/>
    </div>

    <div><itemshow /></div>
    <!-- ส่วนท้ายนะครับ -->
    <FooterComponent />
    <!-- ส่วนท้ายนะครับ -->

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
import itemshow from "../components/showitem.vue";

export default {
  name: "Home",
  components: { Navbar, BookCard, ImageBanner, FooterComponent ,itemshow },
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

/* กำหนด keyframes */
@keyframes magicScroll {
  0% {
    transform: translateY(100px); /* เริ่มจากข้างล่าง */
    opacity: 0; /* โปร่งใส */
  }
  50% {
    transform: translateY(0); /* เลื่อนขึ้นมาที่ตำแหน่งเดิม */
    opacity: 0.7; /* โปร่งใสเล็กน้อย */
  }
  100% {
    transform: translateY(0); /* ค้างอยู่ตำแหน่งเดิม */
    opacity: 1; /* ชัดเจนเต็มที่ */
  }
}

/* ใช้ animation */
.magic-appear {
  animation: magicScroll 2.5s ease-out; /* ชื่อ keyframes, ความยาว 2.5s */
  display: inline-block; /* เพื่อให้ทำงานกับ text */
}
</style>
