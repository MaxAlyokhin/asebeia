<template>

  <div id="hello" class="container">
    <div id="read" >
      <p id="msg">{{msg}}</p>
      <div id="cursor"><span>→</span></div>
      <div id="formats"><a href='src/assets/texts/Алехина, Гройс, Павленский, Пепперштейн, Плуцер-Сарно, Тер-Оганьян, Шнуров - Гулаг расходящихся тропок.pdf' target='_blank'>pdf</a> | <a href='src/assets/texts/Алехина, Гройс, Павленский, Пепперштейн, Плуцер-Сарно, Тер-Оганьян, Шнуров - Гулаг расходящихся тропок.fb2' target='_blank'>fb2</a></div>     
    </div>
  </div>

</template>

<script>

  module.exports = {

    data: function() {
      return {
        msg: 'читать ',
        helloJSON: 'src/assets/jsons/hello.json', //Адрес к массиву json-данных постов
        helloArray: [], //Сюда записывается ответ (response) от get-запроса
        // isLoading: true
      }
    },

    methods: {
      
      getAllPosts: function() {//Метод получения ВСЕХ данных из json-файла
        isLoading: true
        //Сначала получаем json-файл, затем записываем в массив данные из него, затем применяем jq плагин transition   
        this.$http.get(this.helloJSON).then(function(response) {
          this.helloArray = response.data
          this.isLoading = false}, function(error){})
      }
    },
    
    created: function() {//Вызывается синхронно сразу после создания экземпляра
        this.getAllPosts()
    },
    
    updated: function () {//Вызывается после того, как виртуальный DOM был обновлён из-за изменения данных. Нужен на случай перезагрузки страницы
      this.$nextTick(function () {
        $('div#menu').addClass('white').removeClass('black')
        $('#logo').addClass('white').removeClass('black')
      })
    }
  }

</script>

<style>

#hello {
  position: absolute;
  background-image: url(../assets/images/hello.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  margin-top: 0px;
  top: 0px;
}

#read { /* Блок "читать" */
  color: white;
  position: absolute;
  bottom: 70px;
  left: 70px;
  padding: 30px 70px 30px 30px;
}

#msg { /* Само слово */
  display: inline;
}

#cursor { /* Стрелка */
  display: inline;
}

@keyframes cursor { /* Анимация движения стрелки */
  0%  {transform:translate(0); -webkit-transform:translate(0); -moz-transform:translate(0); -ms-transform:translate(0); -o-transform:translate(0);}
  50% {transform:translate(10px, 0); -webkit-transform:translate(10px, 0); -moz-transform:translate(10px, 0); -ms-transform:translate(10px, 0); -o-transform:translate(10px, 0);}
  100%{transform:translate(0); -webkit-transform:translate(0); -moz-transform:translate(0); -ms-transform:translate(0); -o-transform:translate(0);}
}

#cursor span {
  position: absolute;
  left: 90px;
  animation: cursor 2s ease-in-out infinite; /* Применяем анимацию движения стрелки */
  -webkit-animation: cursor 2s ease-in-out infinite;
  -moz-animation: cursor 2s ease-in-out infinite;
  -o-animation: cursor 2s ease-in-out infinite;
  -ms-animation: cursor 2s ease-in-out infinite;
}

#formats {
  display: inline;
  margin-left: 47px;
  opacity: 0; /* Изначально форматы скрыты */
  transition:all 2000ms cubic-bezier(0.19, 1, 0.22, 1); /* Но появляться будут через две секунды */
  -moz-transition:all 2000ms cubic-bezier(0.19, 1, 0.22, 1);
  -ms-transition:all 2000ms cubic-bezier(0.19, 1, 0.22, 1);
  -o-transition:all 2000ms cubic-bezier(0.19, 1, 0.22, 1);
  -webkit-transition:all 2000ms cubic-bezier(0.19, 1, 0.22, 1);
}

#formats a { /* Чтобы ссылки были белыми */
  color: white;
  text-decoration: white;
}

#read:hover > #formats { /* При наведении на блок, показать форматы */
  opacity: 1;
}

</style>
