// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxtjs/google-fonts", "nuxt-aos", "@pinia/nuxt", "@nuxtjs/i18n"],
  googleFonts:{
    download:true,
    families:{
      Inter:true,
    }
  },
  aos:{
    once: true,
    duration:500,
  },
  i18n:{
    vueI18n: './i18n.config.ts',

  }
})