/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
      fontFamily:{
        'modern':['"Modern No. 20"'],
        'inter':['Inter'],
      },
    extend:{
      colors:{
        primary:'#453F29',
      }
    }
  },
  plugins: [],
}

