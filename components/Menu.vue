<template>
  <header>
    <nav id="desktopMenu">
      <div id="logo">
        <router-link to="/" class="menu">асебия</router-link>
      </div>
      <div class="menu navigation">
        <router-link to="/news" class="padding menu">новости</router-link>
        <router-link to="/books" class="padding menu">книги</router-link>
        <router-link to="/about" class="menu">о нас</router-link>
      </div>
    </nav>

    <nav id="mobileMenu">
      <button
        id="HamburgerButton"
        onclick="MobileMenu();"
        class="hamburger hamburger--collapse"
        type="button"
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>

      <div class="menu">
        <div class="table-cell">
          <ul class="mobile">
            <li class="mobile">
              <button
                id="feed"
                class="blackbutton"
                onclick="main = 0; someday = 0; MobileMenu();"
                type="button"
              >
                <div class="text-center">
                  <router-link to="/news">новости</router-link>
                </div>
              </button>
            </li>
            <li class="mobile">
              <button
                id="about-button"
                class="blackbutton"
                onclick="main = 0; someday = 0; MobileMenu();"
                type="button"
              >
                <div class="text-center">
                  <router-link to="/books">книги</router-link>
                </div>
              </button>
            </li>
            <li class="mobile">
              <button
                id="books"
                class="blackbutton"
                onclick="main = 0; someday = 0; MobileMenu();"
                type="button"
              >
                <div class="text-center">
                  <router-link to="/about">о нас</router-link>
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div id="titleMenu">
        <p id="title" class="text-center">
          <router-link to="/" onclick="main = 1; someday = 0; onMain()"
            >асебия</router-link
          >
        </p>
      </div>
      <div id="title_bg"></div>
      <hr class="menu-hr" />
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    blackFunction: function() {
      /* Переключатель цвета меню. Если true, то присваивается класс black в index.html */
      this.isClicked = true;
    },

    whiteFunction: function() {
      /* Переключатель цвета меню. Если false, то присваивается класс white в index.html */
      this.isClicked = false;
    }
  }
};
</script>

<style></style>
