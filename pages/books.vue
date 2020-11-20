<template>
  <div class="container">
    <div id="books-container" class="sub-container">
      <!-- Контент не показывается во время загрузки -->
      <div
        id="books"
        v-for="(books, index) in booksArray"
        v-bind:index="index"
        v-bind:key="books.index"
      >
        <!-- При использовании v-for на компонентах обязательно указывать key и явно использовать входные параметры -->
        <div class="tableCell paddingLeft">
          <!-- Левая ячейка с текстом -->
          <h3 class="paddingBooks">{{ books.status }}</h3>
          <br />
          <!-- Статус книги -->
          <h3 class="paddingBooks">{{ books.title }}</h3>
          <br />
          <!-- Заголовок -->
          <pre v-html="books.body" class="paddingBooks"></pre>
          <!-- Текст. Тег pre используется для переноса html-синтаксиса из json -->
        </div>
        <div class="tableCell" style="text-align: center">
          <!-- Правая ячейка с картинкой -->
          <img id="imgDesktop" v-bind:src="books.img_desktop" />
          <img id="imgMobile" v-bind:src="books.img_mobile" />
        </div>
      </div>

      <div class="tableCell paddingLeft">
        <!-- Левая ячейка с текстом -->
        <h3 class="paddingBooks">Oddments</h3>
        <br />
        <!-- Заголовок -->
        <pre
          class="paddingBooks"
        ><router-link to="/someday" onclick="someday = 1;">Здесь</router-link> — по разным причинам и на разных стадиях заброшенные идеи для чудесных книг. К любой из них мы можем вернуться в любой момент, но пока лень, поэтому будем рады, если кто-то сделает это за нас.
        </pre>
        <!-- Текст. Тег pre используется для переноса html-синтаксиса из json -->
      </div>
      <div class="tableCell" style="text-align: center">
        <!-- Правая ячейка с картинкой -->
        <img id="imgDesktop" src="/images/mockup.png" />
        <img id="imgMobile" src="/images/mobile/mockup.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: "Книги",
    meta: []
  },

  data: function() {
    return {
      booksArray: [
        {
          id: 4,
          status: null,
          title: "Конституция Метарóссии (декабрь 2020)",
          body: `Человек — существует. Время — временит. Бог — любит. Россия — окружает. Метарóссия — прорастает.`,
          img_desktop: "../images/meta.png",
          img_mobile: "../images/mobile/meta.png"
        },
        {
          id: 4,
          status: null,
          title:
            "Стюарт Хоум. Штурмуя культуру. Утопический самиздат от леттризма до Class War",
          body:
            "Панорама радикального искусства и политических утопий после Второй мировой войны. Леттристы и ситуационисты, FLUXUS и mail art, йиппи и мазафакеры, неоизм и Class War. Автор – 25-летний Стюарт Хоум, который позже напишет «Манифест неоизма», «Отсос» и «69 мест, где надо побывать с мертвой принцессой».<br><p class='text-center'><a href='../texts/Штурмуя культуру. Утопический самиздат от леттризма до Class War.pdf' target='_blank'>pdf</a></p><br><p class='text-center'><a target='_blank' href='https://gorky.media/reviews/delat-pozor-eshhe-bolee-pozornym-izdavaya-ego/'>Рецензия Станислава Севрюкова для интернет-проекта «Горький»</a><br><br><a target='_blank' href='https://vk.com/@moisture-intervu-so-stuartom-houmom'>Стюарт Хоум о книге в интервью проекту [moisture]</a></p>",
          img_desktop: "../images/houm.png",
          img_mobile: "../images/mobile/houm.png"
        },
        {
          id: 6,
          status: null,
          title:
            "Гулаг расходящихся тропок. Семь текстов о будущем российского современного искусства",
          body:
            "Это сборник статей о будущем российского современного искусства, написанных видными художниками и теоретиками. Мария Алёхина – лицо Pussy Riot, главного российского арт-бренда. Борис Гройс – философ и искусствовед, хорошо известный как в России, так и на Западе. Петр Павленский – акционист и арестант двух стран. Павел Пепперштейн – культовый художник и писатель. Алексей Плуцер-Сарно – идеолог «Войны» и автор «Словаря русского мата». Авдей Тер-Оганьян – первый в РФ художник-политэмигрант. Сергей Шнуров – создатель одной из самых популярных поп-групп и начинающий арт-деятель. Между этими авторами мало общего. Они по-разному видят прошлое, настоящее и будущее российского современного искусства. Но их тексты объединяет одно: мысли о судьбе России в преддверии нового президентского срока Владимира Путина.<br><p class='text-center'><a href='../texts/Алехина, Гройс, Павленский, Пепперштейн, Плуцер-Сарно, Тер-Оганьян, Шнуров - Гулаг расходящихся тропок.pdf' target='_blank'>pdf</a> | <a href='../texts/Алехина, Гройс, Павленский, Пепперштейн, Плуцер-Сарно, Тер-Оганьян, Шнуров - Гулаг расходящихся тропок.fb2' target='_blank'>fb2</a></p><br><p class='text-center'><a target='_blank' href='https://magazines.gorky.media/nz/2019/1/reczenzii-85.html'>Рецензия Валерия Отяковского в журнале «Неприкосновенный запас»</a></p>",
          img_desktop: "../images/grt.png",
          img_mobile: "../images/mobile/grt.png"
        },
        {
          id: 1,
          status: null,
          title: "Юрий Одарченко. Истоки смеха. Трактат (в планах)",
          body:
            "Ранее читателю был известен только пролог к трактату поэта-эмигранта Юрия Одарченко. Во французском архиве обнаружена черновая рукопись, наиболее связные отрывки из которой позволяют максимально полно реконструировать замысел автора. А именно – своеобразную теорию глоттогенеза. Сомнение обезьяны в истинности причинно-следственных связей, по которым работает инстинкт, порождает разум, который, в свою очередь, проявляется в звуке голоса. Следовательно, согласно Одарченко, речь есть позиция сомнения.",
          img_desktop: "../images/smeh.png",
          img_mobile: "../images/mobile/smeh.png"
        }
      ]
    };
  },
  // <router-link to="/someday">Здесь</router-link>
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
      document.querySelector("#books-container").style.opacity = 1;
    });
  }
};
</script>

<style>
.tableCell {
  display: table-cell;
  vertical-align: middle;
}

.paddingLeft {
  padding-left: 133px;
}

@media only screen and (max-width: 1234px) {
  .paddingLeft {
    padding-left: 3px;
  }
}

#books-container {
  opacity: 0;
  transition: opacity 1.5s;
  transition-delay: 0.5s;
}
</style>
