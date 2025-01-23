module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // ต้องมี path ของไฟล์ Vue, JS หรือ JSX
  ],
  theme: {
    extend: { backgroundImage: {
      'background-pattern': "url('')",
    },
  },
  },
  plugins: [],
}