<template>
    <footer class="bg-gray-800 text-white py-8">
      <div class="container mx-auto px-4">
        <!-- Top Section -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- About Us -->
          <div>
            <h3 class="text-lg font-bold mb-4">About Us</h3>
            <p class="text-sm text-gray-300">
              Hello, my name is Bank. This is a website for sending internship tests for students to Softnova.
            </p>
          </div>
  
          <!-- Quick Links -->
          <div>
            <h3 class="text-lg font-bold mb-4">Quick Links</h3>
            <ul>
              <li class="mb-2"><a href="#home" class="text-gray-300 hover:underline">Home</a></li>
              <li class="mb-2"><a href="#books" class="text-gray-300 hover:underline">Books</a></li>
              <li class="mb-2"><a href="#about" class="text-gray-300 hover:underline">About Us</a></li>
              <li><a href="#contact" class="text-gray-300 hover:underline">Contact</a></li>
            </ul>
          </div>
  
          <!-- Contact Information -->
          <div>
            <h3 class="text-lg font-bold mb-4">Contact Us</h3>
            <p class="text-sm text-gray-300">Email: witthawatkhotalut@gmail.com</p>
            <p class="text-sm text-gray-300">Phone: +66 956807304</p>
            <p class="text-sm text-gray-300">Address: Wehouse 10"</p>
          </div>
        </div>
  
        <!-- Bottom Section -->
        <div class="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          <p>&copy; 2025 บ้านนายดิน. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "FooterComponent",
  };
  </script>
  
  <style scoped>
  footer {
    background: #2d3748; /* Dark gray */
  }
  </style>
  