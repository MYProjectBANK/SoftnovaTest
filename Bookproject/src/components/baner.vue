<template>
    <div id="default-carousel" class="relative w-full" data-carousel="slide">
      <!-- Carousel wrapper -->
      <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="hidden duration-700 ease-in-out"
          :class="{ 'block': index === activeIndex }"
          data-carousel-item
        >
          <img
            :src="image"
            class="absolute block w-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Slide Image"
          />
        </div>
      </div>
  
      <!-- Slider indicators -->
      <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button
          v-for="(image, index) in images"
          :key="index"
          type="button"
          class="w-3 h-3 rounded-full"
          :aria-current="index === activeIndex ? 'true' : 'false'"
          :aria-label="`Slide ${index + 1}`"
          @click="goToSlide(index)"
        ></button>
      </div>
  
      <!-- Slider controls -->
      <button
        type="button"
        class=" absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        @click="prevSlide"
      >
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        class=" absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        @click="nextSlide"
      >
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: "ImageBanner",
    data() {
      return {
        images: [
          "src/assets/braner/12_DAYS_WEB_BANNER_CYOT_2.webp",
          "src/assets/braner/dd.jpg",
          "src/assets/braner/HERO_trunks.webp",
        ],
        activeIndex: 0,
      };
    },
    methods: {
      nextSlide() {
        this.activeIndex = (this.activeIndex + 1) % this.images.length;
      },
      prevSlide() {
        this.activeIndex =
          (this.activeIndex - 1 + this.images.length) % this.images.length;
      },
      goToSlide(index) {
        this.activeIndex = index;
      },
    },
  };
  </script>
  
  <style scoped>
  .hidden {
    display: none;
  }
  .block {
    display: block;
  }
  </style>
  