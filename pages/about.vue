<template>
  <div class="container">
    <div id="about" class="sub-container">
      <p class="text-center">
        <b>О нас</b>
      </p>
      <br />
      <pre>
Асебия – частное издательство, запущенное 1 марта 2018 года. Цель нашей работы – обращение к несвоевременным, неуслышанным и нетрадиционно сформулированным позициям. Мы надеемся, что сегодня в России в плоскости книгоиздания ещё возможен бунт или, по меньшей мере, вызов. Поэтому наше название отсылает к тем ситуациям, в которых книга становится не только литературным, но и политическим событием.</pre
      >
      <br />
      <br />
      <p>
        <b>Контакты:</b>
      </p>
      <br />
      <pre>Главный редактор<br /><a href="mailto:kissmy@asebeia.su">kissmy@asebeia.su</a></pre>
      <br />
      <pre>Медиа<br /><a href="mailto:pr@asebeia.su">pr@asebeia.su</a></pre>
      <br />
      <pre>Telegram<br /><a href="http://t.me/asebeia">@asebeia</a></pre>
      <br />
      <br />
      <p>
        <b>Где купить:</b>
      </p>
      <br />
      <pre>Москва<br /><a target="_blank" href="http://www.falanster.su/">Фаланстер</a></pre>
      <pre><a target="_blank" href="http://primuzee.ru/">Циолковский</a></pre>
      <pre><a target="_blank" href="http://wordorder.ru/">Порядок слов в Электротеатре</a></pre>
      <br />
      <pre>Санкт-Петербург<br /><a href="https://www.podpisnie.ru/">Подписные издания</a></pre>
      <pre><a target="_blank" href="https://www.vse-svobodny.com/">Все свободны</a></pre>
      <pre><a target="_blank" href="http://wordorder.ru/">Порядок слов</a></pre>
      <pre><a target="_blank" href="https://vk.com/frngt">Фаренгейт 451</a></pre>
      <br />
      <pre>Казань<br /><a target="_blank" href="https://smenabookstore.ru/shop/neknigi/">Смена</a></pre>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: "О нас",
    meta: []
  },

  mounted: function() {
    this.$nextTick(function() {
      $("#logo").addClass("black");
      $(".menu").addClass("black");
      $("p#title").addClass("black_mobile");
      $("div#title_bg").addClass("black_mobile");
      $("hr.menu-hr").addClass("black_mobile");
      $("span.hamburger-inner").addClass("black_mobile");
      $("span.hamburger-inner::after").addClass("black_mobile");
      $("span.hamburger-inner::before").addClass("black_mobile");
      main = 0;
      document.querySelector("#about").style.opacity = 1;
    });
  }
};
</script>

<style>
#about {
  padding: 100px 100px 0px 100px;
  opacity: 0;
  transition: opacity 1.5s;
  transition-delay: 0.5s;
}
</style>
