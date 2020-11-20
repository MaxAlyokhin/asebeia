<template>
  <div class="container">
    <div id="someday-container" class="sub-container">
      <!-- Контент не показывается во время загрузки -->
      <div
        id="someday"
        v-for="(someday, index) in somedayArray"
        v-bind:index="index"
        v-bind:key="someday.index"
      >
        <!-- При использовании v-for на компонентах обязательно указывать key и явно использовать входные параметры -->
        <div class="tableCell paddingLeft">
          <!-- Левая ячейка с текстом -->
          <h3 class="paddingSomeday">{{ someday.status }}</h3>
          <br />
          <!-- Статус книги -->
          <h3 class="paddingSomeday">{{ someday.title }}</h3>
          <br />
          <!-- Заголовок -->
          <pre v-html="someday.body" class="paddingSomeday"></pre>
          <!-- Текст. Тег pre используется для переноса html-синтаксиса из json -->
        </div>
        <div class="tableCell" style="text-align: center">
          <!-- Правая ячейка с картинкой -->
          <img id="imgDesktop" v-bind:src="someday.img_desktop" />
          <img id="imgMobile" v-bind:src="someday.img_mobile" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: "Oddments",
    meta: []
  },

  data: function() {
    return {
      somedayArray: [
        {
          id: 5,
          status: null,
          title:
            "Антология facebook-срачей о современной культуре: сделать позор еще более позорным, расшаривая его",
          body:
            "В ожидании очередной неминуемой оттепели виднейшие умы России спорят о высоком уже не на диссидентских кухнях, курилках и конференциях, но в комментах на Facebook. Горячие баталии касаются не столько судеб России, свободы слова и озёрной гэбни, сколько распила грантов, грызни за бюджеты и домогательств к телу и социальному статусу. Некоторые треды уже удалены, но они увековечены в нашем издании. Его героями стали ваши фб-френды.",
          img_desktop: "../images/antology.png",
          img_mobile: "../images/mobile/antology.png"
        },
        {
          id: 3,
          status: null,
          title: "Роджер Файнс. Олимпийские боги против анархо-капиталистов",
          body:
            "В мире после Сингулярности, утверждает футуролог и религиовед Алекс Козовски, оживут все сверхъестественные существа прошлого, в частности, вновь заявят о себе боги греческого Олимпа. По гипотезе автора, основными соперниками Зевса, Посейдона и Аида в этом мире будут сторонники анархокапитализма. Причём главная причина их антагонизма кроется не в различиях, а как раз в сходстве способов управления и хозяйствования тех и других. Битва Олимпийских богов и анархокапиталистов завершается их слиянием в единую сеть трансолимпийских корпораций. Книга послужила основой для сценария совместного фильма Дэвида Линча и Квентина Тарантино (выпуск фильма запланирован на 2021 год).",
          img_desktop: "../images/bogi.png",
          img_mobile: "../images/mobile/bogi.png"
        },
        {
          id: 2,
          status: null,
          title: "Алекс Козовски. Смеющиеся собаки и ренессанс VHS",
          body:
            "В своём игровом исследовании, смешивающем теорию и вымысел, автор рассматривает перспективы обретения животными разума, а также возможные последствия этого события для общества и культуры. Сценарий, на котором он останавливается подробно, — любовь собак к кинокомедиям. Оказывается, что собакам физиологически удобней обращаться с видеокассетами, чем с прочими носителями видеоинформации: принести в зубах кассету и вставить её в проигрыватель для них проще, чем использовать DVD или скачать файл. Это приводит к изменению рынка носителей и глобальному переформатированию экономики развлечений.",
          img_desktop: "../images/dogs.png",
          img_mobile: "../images/mobile/dogs.png"
        }
      ]
    };
  },

  mounted: function() {
    this.$nextTick(function() {
      someday = 1;
      $("#logo")
        .addClass("white")
        .removeClass("black");
      $(".menu")
        .addClass("white")
        .removeClass("black");
      $("p#title").removeClass("black_mobile");
      $("div#title_bg").removeClass("black_mobile");
      document.querySelector("#title_bg").style.backgroundColor = "#1a1a1a";
      document.querySelector("#title_bg").style.opacity = 0.97;
      $("hr.menu-hr").removeClass("black_mobile");
      $("span.hamburger-inner").removeClass("black_mobile");
      $("span.hamburger-inner::after").removeClass("black_mobile");
      $("span.hamburger-inner::before").removeClass("black_mobile");
      document.querySelector("#someday-container").style.opacity = 1;
      document.querySelector("html").style.background = "#1a1a1a";
      document.querySelector("body").style.background = "#1a1a1a";
      document.querySelector("body").style.color = "white";
      // document.querySelector("html").style.filter = "brightness(0.6)";
      $("html, body").animate(
        {
          scrollTop: 0
        },
        1500,
        "easeInOutCubic"
      );
    });
  },

  beforeDestroy: function() {
    document.querySelector("html").style.background = "";
    document.querySelector("body").style.background = "";
    document.querySelector("body").style.color = "";
    // document.querySelector("html").style.filter = "brightness(1)";
    document.querySelector("#title_bg").style.backgroundColor = "";
    document.querySelector("#title_bg").style.opacity = "";
    $("#logo").addClass("black");
    $(".menu").addClass("black");
    $("p#title").addClass("black_mobile");
    $("div#title_bg").addClass("black_mobile");
    $("hr.menu-hr").addClass("black_mobile");
    $("span.hamburger-inner").addClass("black_mobile");
    $("span.hamburger-inner::after").addClass("black_mobile");
    $("span.hamburger-inner::before").addClass("black_mobile");
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

#someday-container {
  opacity: 0;
  transition: opacity 1.5s;
  transition-delay: 0.5s;
}
</style>
