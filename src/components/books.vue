<template>

  <div class="container">
    <div class="sub-container" > <!-- Контент не показывается во время загрузки -->
      <div id="books" v-for="(books, index) in booksArray" v-bind:index="index" v-bind:key="books.index"> <!-- При использовании v-for на компонентах обязательно указывать key и явно использовать входные параметры -->
        <div class="tableCell paddingLeft"> <!-- Левая ячейка с текстом -->
          <h3 class="paddingBooks">{{books.status}}</h3><br> <!-- Статус книги -->
          <h3 class="paddingBooks">{{books.title}}</h3><br> <!-- Заголовок -->
          <pre v-html="books.body" class="paddingBooks"></pre> <!-- Текст. Тег pre используется для переноса html-синтаксиса из json -->
        </div>
        <div class="tableCell" style="text-align: center" > <!-- Правая ячейка с картинкой -->
          <img id="imgDesktop" v-bind:src="books.img_desktop">
          <img id="imgMobile" v-bind:src="books.img_mobile">
        </div>
      </div>
    </div>
  </div> 
 
</template>

<script>

  module.exports = {
    data: function() {
      return {
        booksJSON: 'src/assets/jsons/books.json', //Адрес к массиву json-данных постов
        booksArray: [], //Сюда записывается ответ (response) от get-запроса
        isLoading: true
      }
    },

    methods: {  
      
      getAllPosts: function() {//Метод получения ВСЕХ данных из json-файла
        isLoading: true
        //Сначала получаем json-файл, затем записываем в массив данные из него, затем применяем jq плагин transition   
        this.$http.get(this.booksJSON).then(function(response) {
          this.booksArray = response.data
          this.isLoading = false}, function(error){})
      },

      // lazyload: function() {
      //   window.addEventListener("load", function(event) {
      //     lazyload();
      //   })
      // }
    },
    
    created: function() {//Вызывается синхронно сразу после создания экземпляра
        this.getAllPosts()
        // this.lazyload()//Запускаем ленивую загрузку изображений
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
        // lazyload()//Запускаем ленивую загрузку изображений
      })
    }
  }

</script>

<style>

.tableCell {
  display: table-cell;
  vertical-align: middle;
/*   width: 50%; */
}

/* .paddingBooks {
  padding-left: 19%;
} */

.paddingLeft {
  padding-left: 133px;
}

@media only screen and (max-width:1279px) {
  .paddingLeft {
    padding-left: 0px;
  }
}

</style>