<template>
<div class="container" style="height: 100%">
  <div id="home">
    <div id="read">
      <p id="msg">читать</p>
      <div id="cursor">
        <span>→</span>
      </div>
      <div id="formats">
        <a
          href="texts/Штурмуя культуру. Утопический самиздат от леттризма до Class War.pdf"
          target="_blank"
        >pdf</a>
      </div>
    </div>
  </div>
  <div id="grt">
    <div id="read">
      <p id="msg">читать</p>
      <div id="cursor">
        <span>→</span>
      </div>
      <div id="formats">
        <a
          href="texts/Алехина, Гройс, Павленский, Пепперштейн, Плуцер-Сарно, Тер-Оганьян, Шнуров - Гулаг расходящихся тропок.pdf"
          target="_blank"
        >pdf</a> |
        <a
          href="texts/Алехина, Гройс, Павленский, Пепперштейн, Плуцер-Сарно, Тер-Оганьян, Шнуров - Гулаг расходящихся тропок.fb2"
          target="_blank"
        >fb2</a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  head: {
    title: "Издательство Асебия",
    meta: []
  },

  mounted: function() {
    this.$nextTick(function() {
      $("#logo")
        .addClass("white")
        .removeClass("black");
      $(".menu")
        .addClass("white")
        .removeClass("black");  
    });
  }
};
</script>

<style>
#home, #grt {
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  margin-top: 0px;
  top: 0px;
}

@media screen and (max-width: 1234px) {
  #home, #grt {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  #read {
    margin-left: 0px !important;
    position: relative !important;
  }
}


#home {
  background-image: url(../static/images/hello-home.jpg);
}

#grt {
  background-image: url(../static/images/hello-grt.jpg);
}

#read {
  /* Блок "читать" */
  color: white;
  position: absolute;
  bottom: 70px;
  margin-left: 70px;
  padding: 30px 70px 30px 30px;
  /* width: 275px; */
}

#msg {
  /* Само слово */
  display: inline;
}

#cursor {
  /* Стрелка */
  display: inline;
}

@keyframes cursor {
  /* Анимация движения стрелки */
  0% {
    transform: translate(0);
    -webkit-transform: translate(0);
    -moz-transform: translate(0);
    -ms-transform: translate(0);
    -o-transform: translate(0);
  }
  50% {
    transform: translate(10px, 0);
    -webkit-transform: translate(10px, 0);
    -moz-transform: translate(10px, 0);
    -ms-transform: translate(10px, 0);
    -o-transform: translate(10px, 0);
  }
  100% {
    transform: translate(0);
    -webkit-transform: translate(0);
    -moz-transform: translate(0);
    -ms-transform: translate(0);
    -o-transform: translate(0);
  }
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
  transition: all 2000ms cubic-bezier(0.19, 1, 0.22, 1); /* Но появляться будут через две секунды */
  -moz-transition: all 2000ms cubic-bezier(0.19, 1, 0.22, 1);
  -ms-transition: all 2000ms cubic-bezier(0.19, 1, 0.22, 1);
  -o-transition: all 2000ms cubic-bezier(0.19, 1, 0.22, 1);
  -webkit-transition: all 2000ms cubic-bezier(0.19, 1, 0.22, 1);
}

#formats a {
  /* Чтобы ссылки были белыми */
  color: white;
  text-decoration: white;
}

#read:hover > #formats {
  /* При наведении на блок, показать форматы */
  opacity: 1;
}
</style>