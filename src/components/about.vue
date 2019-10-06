<template>

  <div class="container">
    <div id="about" class="sub-container">
      <p class="text-center"><b>О нас</b></p>
	    <br><pre>Асебия – частное издательство, запущенное 1 марта 2018 года. Цель нашей работы – обращение к несвоевременным, неуслышанным и нетрадиционно сформулированным позициям. Мы надеемся, что сегодня в России в плоскости книгоиздания ещё возможен бунт или, по меньшей мере, вызов. Поэтому наше название отсылает к тем ситуациям, в которых книга становится не только литературным, но и политическим событием.</pre>
	    <br><br><p><b>Контакты:</b></p>
	    <br><pre>Главный редактор<br><a href="mailto:kissmy@asebeia.su">kissmy@asebeia.su</a></pre>
	    <br><pre>Медиа<br><a href="mailto:pr@asebeia.su">pr@asebeia.su</a></pre>
	    <br><pre>Telegram<br><a href="http://t.me/asebeia">@asebeia</a></pre>
    </div>
  </div>

</template>

<script>

  module.exports = {

    data: function() {
      return {
        aboutJSON: 'src/assets/jsons/about.json', //Адрес к массиву json-данных постов
        aboutArray: [], //Сюда записывается ответ (response) от get-запроса
        isLoading: true
      }
    },

    methods: {
      
      getAllPosts: function() {//Метод получения ВСЕХ данных из json-файла
        isLoading: true
        //Сначала получаем json-файл, затем записываем в массив данные из него, затем применяем jq плагин transition   
        this.$http.get(this.aboutJSON).then(function(response) {
          this.aboutArray = response.data
          this.isLoading = false}, function(error){})
      }
    },
    
    created: function() {//Вызывается синхронно сразу после создания экземпляра
        this.getAllPosts()
    },

    updated: function () {//Вызывается после того, как виртуальный DOM был обновлён из-за изменения данных. Нужен на случай перезагрузки страницы
      this.$nextTick(function () {
        $('div#menu').addClass('black')
        $('#logo').addClass('black')
        $('p#title').addClass('black_mobile');
				$('div#title_bg').addClass('black_mobile');
				$('hr.menu-hr').addClass('black_mobile');
				$('span.hamburger-inner').addClass('black_mobile');
				$('span.hamburger-inner::after').addClass('black_mobile');
				$('span.hamburger-inner::before').addClass('black_mobile');
      })
    }
  }

</script>

<style>

div#about {
  padding: 100px 100px 0px 100px;
}

</style>