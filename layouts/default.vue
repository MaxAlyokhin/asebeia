<template>
  <div style="height: 100%">
    <menu-component />
    <transition name="fade"> 
      
      <router-view />
      <!-- <nuxt /> -->
    </transition>
    <a href="#" class="scrollup"><img src="/favicons/top.png" width="30" alt=""></a>
  </div>
</template>

<script>
import MenuComponent from "~/components/Menu.vue";

export default {

  components: {
    MenuComponent
  },

  // Общие мета-теги для всех страниц
  head: {
    meta: [
      { charset: "utf-8" },
      { hid: "description", name: "description", content: "Официальный сайт издательства Асебия" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "keywords", content: "ГУЛАГ расходящихся тропок, Асебия, Борис Гройс, Пётр Павленский, Сергей Шнуров, Павел Пепперштейн, Манифесты неоизма" },
      { name: "apple-mobile-web-app-title", content: "Асебия" },
      { name: "application-name", content: "Асебия" },
      { name: "msapplication-TileColor", content: "#3b3b3b" },
      { name: "msapplication-TileImage", content: "favicons/mstile-144x144.png" },
      { name: "theme-color", content: "#ffffff" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Издательство Асебия" },
      { property: "og:url", content: "https://asebeia.su/" },
      { property: "og:title", content: "Издательство Асебия" },
      { property: "og:description", content: "Официальный сайт издательства Асебия." },
      { property: "og:locale", content: "ru_RU" },
      { property: "og:image", content: "../favicons/og.jpg" },
      { property: "og:image:width", content: "968" },
      { property: "og:image:height", content: "504" },
    ],
    link: [
      { rel: "apple-touch-icon", sizes: "180x180", href: "../favicons/apple-touch-icon.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "../favicons/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "../favicons/favicon-16x16.png" },
      { rel: "manifest", href: "../favicons/site.webmanifest" },
      { rel: "mask-icon", href: "../favicons/safari-pinned-tab.svg", color: "#000000" },
      { rel: "stylesheet", href: "../styles/style.css", type: "text/css" },
      { rel: "stylesheet", href: "../styles/breakpoints.css", type: "text/css", media: "only screen and (max-width:1234px)" },
      { rel: "stylesheet", href: "../libs/css/hamburgers.css", type: "text/css", media: "only screen and (max-width:1234px)" }
    ],
    script: [
      { src: "../libs/js/jquery-1.9.1.js" },
      { src: "../libs/js/jquery.transit.min.js" },
      { src: "../libs/js/jquery.easing-1.3.pack.js" },
      { src: "../scripts/screen-manager.js" },
    ]
  },
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

