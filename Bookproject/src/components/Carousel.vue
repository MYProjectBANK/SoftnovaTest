<template>
    <div id="carousel" class="relative w-full" data-carousel="slide">
      <!-- Wrapper -->
      <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        <!-- Item 1 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://via.placeholder.com/800x400?text=Welcome+to+Our+Bookstore"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Welcome"
          />
        </div>
        <!-- Item 2 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://via.placeholder.com/800x400?text=Discover+Our+Collection"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Discover Collection"
          />
        </div>
        <!-- Item 3 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://via.placeholder.com/800x400?text=Find+Your+Favorite+Books"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Find Books"
          />
        </div>
      </div>
  
      <!-- Indicators -->
      <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          data-carousel-slide-to="0"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          data-carousel-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          data-carousel-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
  
      <!-- Controls -->
      <button
        type="button"
        class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 group"
        data-carousel-prev
      >
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30">
          <svg
            class="w-6 h-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 6 10"
            fill="none"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1L1 5l4 4"
            />
          </svg>
        </span>
      </button>
      <button
        type="button"
        class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 group"
        data-carousel-next
      >
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30">
          <svg
            class="w-6 h-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 6 10"
            fill="none"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 9l4-4-4-4"
            />
          </svg>
        </span>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: "Carousel",
  };
  </script>
  
  <style scoped>
  #carousel img {
    object-fit: cover;
  }
  </style>
  