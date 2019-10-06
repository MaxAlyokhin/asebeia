<template>

  <div class="container">
    <div class="sub-container" > <!-- Контент не показывается во время загрузки -->
      <div id="news" class="absolute paddingNews" v-for="(news, index) in newsArray" v-bind:index="index" v-bind:key="news.index"> <!-- При использовании v-for на компонентах обязательно указывать key и явно использовать входные параметры -->
        <h3>{{news.title}}</h3> <!-- Заголовок -->
        <pre v-html="news.body"></pre> <!-- Текст -->
        <img v-bind:src="news.img" class="widthImg"> <!-- Картинка -->
        <p align="right"><b>{{news.date}}</b></p> <!-- Дата -->
      </div>
      
    </div>
  </div> 

</template>

<script>

  module.exports = {
    data: function() {
      return {
        newsJSON: 'src/assets/jsons/news.json', //Адрес к массиву json-данных постов
        newsArray: [], //Сюда записывается ответ (response) от get-запроса
        isLoading: true
      }
    },

    methods: {
      getAllPosts: function() { //Метод получения ВСЕХ данных из json-файла
        this.isLoading = true //Загрузка началась
        this.$http.get(this.newsJSON).then(function(response) { //Сначала получаем json-файл, затем записываем в массив данные из него, затем применяем jq плагин transition   
          this.newsArray = response.data
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

#news {
  padding: 100px 100px 0px 100px;
}

.paddingNews {
  padding: 100px;
}

.widthImg {
  width:100%;
}

</style>