<template>
  <div class="bg-gray-100 min-h-screen">


    <Navbar />

    
    <div class="container mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      <!-- หัวข้อ -->
      <h1 class="text-3xl font-bold mb-6 text-center text-gray-800">รายการสินค้า</h1>

      <!-- รายการสินค้าในตะกร้า -->
      <div v-for="item in cartItems" :key="item.id" class="flex justify-between items-center mb-4 p-4 bg-gray-50 rounded-lg shadow-sm">
        <!-- ชื่อสินค้า -->
        <div>
          <p class="text-lg font-semibold text-gray-700">{{ item.title }}</p>
          <p class="text-sm text-gray-500">Quantity: x{{ item.quantity }}</p>
        </div>
        <!-- ปุ่มเพิ่ม-ลดจำนวน -->
        <div class="flex items-center space-x-2">
          <button
            class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
            @click="updateQuantity(item, -1)"
          >
            -
          </button>
          <button
            class="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
            @click="updateQuantity(item, 1)"
          >
            +
          </button>
        </div>
        <!-- ราคาสินค้า -->
        <p class="text-lg font-semibold text-gray-800">฿{{ item.price * item.quantity }}</p>
      </div>

      <!-- แสดงส่วนลด -->
      <div class="mt-6 border-t pt-4">
        <h2 class="text-lg font-semibold text-gray-600">Discount</h2>
        <p class="text-xl font-bold text-green-600">฿{{ discount }}</p>
      </div>

      <!-- แสดงราคารวม -->
      <div class="mt-4 border-t pt-4">
        <h2 class="text-lg font-semibold text-gray-600">Total</h2>
        <p class="text-2xl font-bold text-gray-800">฿{{ totalPrice }}</p>
      </div>

      <!-- ปุ่ม checkout -->
      <div class="text-center mt-6">
        <button
          class="bg-blue-600 text-white px-6 py-2 text-lg rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          จ่ายเงิน
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "CartPage",
  components: { Navbar },
  data() {
    return {
      cartItems: [], // รายการสินค้าที่อยู่ในตะกร้า
    };
  },
  computed: {
    // คำนวณราคาสินค้ารวมทั้งหมดก่อนส่วนลด
    totalBeforeDiscount() {
      return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },

    // คำนวณส่วนลดแบบลดเป็นคู่ที่ไม่ซ้ำกัน
    discount() {
      let totalDiscount = 0;
      const groupedItems = {};

      // จัดกลุ่มหนังสือที่ไม่ซ้ำกัน
      this.cartItems.forEach((item) => {
        if (!groupedItems[item.title]) {
          groupedItems[item.title] = item.quantity;
        } else {
          groupedItems[item.title] += item.quantity;
        }
      });

      // คำนวณส่วนลดสำหรับคู่ของหนังสือที่ไม่ซ้ำกัน
      const titles = Object.keys(groupedItems);
      for (let i = 0; i < titles.length; i++) {
        for (let j = i + 1; j < titles.length; j++) {
          // นับจำนวนคู่จากสองเรื่องที่ไม่ซ้ำกัน
          const pairCount = Math.min(groupedItems[titles[i]], groupedItems[titles[j]]);
          const pairPrice = this.cartItems.find((item) => item.title === titles[i]).price +
                            this.cartItems.find((item) => item.title === titles[j]).price;
          
          totalDiscount += pairCount * pairPrice * 0.1; // ลด 10% สำหรับแต่ละคู่
        }
      }

      return totalDiscount;
    },

    // คำนวณราคารวมหลังหักส่วนลด
    totalPrice() {
      return this.totalBeforeDiscount - this.discount;
    },
  },
  methods: {
    // โหลดสินค้าในตะกร้าจาก LocalStorage
    loadCart() {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const grouped = cart.reduce((acc, book) => {
        const found = acc.find((item) => item.id === book.id);
        if (found) {
          found.quantity++;
        } else {
          acc.push({ ...book, quantity: 1 });
        }
        return acc;
      }, []);
      this.cartItems = grouped;
    },

    // อัปเดตจำนวนสินค้าในตะกร้า
    updateQuantity(item, change) {
      const found = this.cartItems.find((cartItem) => cartItem.id === item.id);
      if (found) {
        found.quantity += change;
        if (found.quantity <= 0) {
          // ลบสินค้าหากจำนวน <= 0
          this.cartItems = this.cartItems.filter((cartItem) => cartItem.id !== item.id);
        }
        this.saveCart();
      }
    },

    // บันทึกข้อมูลตะกร้าลง LocalStorage
    saveCart() {
      const updatedCart = [];
      this.cartItems.forEach((item) => {
        for (let i = 0; i < item.quantity; i++) {
          updatedCart.push({
            id: item.id,
            title: item.title,
            price: item.price,
          });
        }
      });
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    },
  },
  created() {
    this.loadCart(); // โหลดข้อมูลตะกร้าเมื่อเริ่มต้น
  },
};
</script>


