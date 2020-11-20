let click = 1; //Переключатель
let main = 1; //Маркер белого меню, 1 если мы на заглавной
let someday = 0; // Маркер страницы с планами

//По клику на Hamburger выполнить:

function MobileMenu() {
  if (click) {
    //ОТКРЫТЬ МЕНЮ
    $("button#HamburgerButton").addClass("is-active"); //ПРЕВРАЩАЕМ В КРЕСТ
    $("header, nav").addClass("height100"); //ВИРТУАЛЬНО РАЗВОРАЧИВАЕМ МЕНЮ НА ВЕСЬ ЭКРАН
    $("div.menu")
      .addClass("table")
      .transition(
        { opacity: 1 },
        700,
        "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
      );
    $("div.sub-container").transition(
      { opacity: 0 },
      700,
      "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
    ); //ПЛАВНО СКРЫВАЕМ СОДЕРЖИМОЕ СТРАНИЦЫ
    $("ul.mobile").addClass("open"); //АКТИВИРОВАТЬ ПУНКТЫ МЕНЮ В ul, li
    $("li.mobile").addClass("open"); //АКТИВИРОВАТЬ ПУНКТЫ МЕНЮ В ul, li
    $("ul.mobile").transition(
      { scale: 1, opacity: 1 },
      700,
      "cubic-bezier(0.075, 0.82, 0.165, 1)"
    );

    $("div.table-cell")
      .addClass("black_mobile")
      .transition(
        { opacity: 1 },
        700,
        "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
      ); //СЕРЫЙ ФОН

    $("p#title").addClass("black_mobile"); //БЕЛОЕ ЛОГО
    $("div#title_bg").addClass("black_mobile"); //ПРОЗРАЧНЫЙ ХИДЕР
    $("hr.menu-hr").addClass("black_mobile"); //РАЗДЕЛИТЕЛЬ
    $("span.hamburger-inner").addClass("black_mobile"); //ГАМБУРГЕР
    $("span.hamburger-inner::after").addClass("black_mobile");
    $("span.hamburger-inner::before").addClass("black_mobile");
    document.querySelector("#title_bg").style.backgroundColor = "#f3f3f3";

    click = 0;
  } //ЗАКРЫТЬ МЕНЮ
  else {
    $("button#HamburgerButton").removeClass("is-active"); //СВОРАЧИВАЕМ КРЕСТ
    $("ul.mobile").transition(
      { scale: 0.9, opacity: 0 },
      700,
      "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
    ); //УБИРАЕМ ПУНКТЫ МЕНЮ
    $("div.menu").transition(
      { opacity: 0 },
      700,
      "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
    );

    if (main) {
      $("div#title_bg").transition(
        { opacity: 0 },
        700,
        "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
      );
      $("p#title").removeClass("black_mobile");
      $("#title_bg").removeClass("black_mobile");
      $("hr.menu-hr").removeClass("black_mobile");
      $("span.hamburger-inner").removeClass("black_mobile");
      $("span.hamburger-inner::after").removeClass("black_mobile");
      $("span.hamburger-inner::before").removeClass("black_mobile");
    }

    if (someday) {
      $("div#title_bg").transition(
        { opacity: 0.97 },
        700,
        "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
      );
      $("p#title").removeClass("black_mobile");
      $("#title_bg").removeClass("black_mobile");
      document.querySelector("#title_bg").style.backgroundColor = "#1a1a1a";
      $("hr.menu-hr").removeClass("black_mobile");
      $("span.hamburger-inner").removeClass("black_mobile");
      $("span.hamburger-inner::after").removeClass("black_mobile");
      $("span.hamburger-inner::before").removeClass("black_mobile");
    }

    function close() {
      click = 1;

      if (main) {
        $("div.table-cell").removeClass("black_mobile"); //ЕСЛИ ЗАГЛАВНАЯ ОТКРЫТА, ТО КРАСИМ В БЕЛЫЙ
        $("p#title").removeClass("black_mobile");
        $("#title_bg").removeClass("black_mobile");
        $("hr.menu-hr").removeClass("black_mobile");
        $("span.hamburger-inner").removeClass("black_mobile");
        $("span.hamburger-inner::after").removeClass("black_mobile");
        $("span.hamburger-inner::before").removeClass("black_mobile");
      } //ИНАЧЕ ОСТАВЛЯЕМ КАК ЕСТЬ

      $("div.table-cell").removeClass("black_mobile");
      $("header, nav").removeClass("height100"); //СВОРАЧИВАЕМ МЕНЮ
      $("ul.mobile").removeClass("open"); //СВОРАЧИВАЕМ ПУНКТЫ МЕНЮ
      $("li.mobile").removeClass("open"); //СВОРАЧИВАЕМ ПУНКТЫ МЕНЮ
      $("div.menu").removeClass("table");
      $("div.sub-container").transition(
        { opacity: 1 },
        700,
        "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
      ); //ПЛАВНО ПОКАЗЫВАЕМ СОДЕРЖИМОЕ СТРАНИЦЫ
    }

    setTimeout(close, 700); //ПАУЗА, ПОКА ВСЁ НЕ СВЕРНЁТСЯ ДО КОНЦА
  }
}

function onMain() {
  $("div.table-cell").removeClass("black_mobile"); //ЕСЛИ ЗАГЛАВНАЯ ОТКРЫТА, ТО КРАСИМ В БЕЛЫЙ
  $("p#title").removeClass("black_mobile");
  $("#title_bg").removeClass("black_mobile");
  $("hr.menu-hr").removeClass("black_mobile");
  $("span.hamburger-inner").removeClass("black_mobile");
  $("span.hamburger-inner::after").removeClass("black_mobile");
  $("span.hamburger-inner::before").removeClass("black_mobile");

  $("button#HamburgerButton").removeClass("is-active"); //СВОРАЧИВАЕМ КРЕСТ
  $("ul.mobile").transition(
    { scale: 0.9, opacity: 0 },
    700,
    "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
  ); //УБИРАЕМ ПУНКТЫ МЕНЮ

  function close() {
    click = 1;

    $("div.table-cell").removeClass("black_mobile");
    $("header, nav").removeClass("height100"); //СВОРАЧИВАЕМ МЕНЮ
    $("ul.mobile").removeClass("open"); //СВОРАЧИВАЕМ ПУНКТЫ МЕНЮ
    $("li.mobile").removeClass("open"); //СВОРАЧИВАЕМ ПУНКТЫ МЕНЮ
    $("div.menu").removeClass("table");
    $("div.sub-container").transition(
      { opacity: 1 },
      700,
      "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
    ); //ПЛАВНО ПОКАЗЫВАЕМ СОДЕРЖИМОЕ СТРАНИЦЫ
  }

  setTimeout(close, 700); //ПАУЗА, ПОКА ВСЁ НЕ СВЕРНЁТСЯ ДО КОНЦА
}

//По загрузке документа, выполнить
$(document).ready(function() {
  //Блок управления показом кнопки "наверх" - начало
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100 && window.screen.width > 1234) {
      //Если скролл больше 100px, то показать .scrollUp
      $(".scrollup").fadeIn();
    } else {
      $(".scrollup").fadeOut(); //Иначе скрыть
    }
  });
  //Блок управления показом кнопки "наверх" - конец

  // Кнопка наверх
  $(".scrollup").click(function() {
    //По клику на .scrollUp, плавно обнулить скролл
    $("html, body").animate(
      {
        scrollTop: 0
      },
      2000,
      "easeInOutCubic"
    );
    return false;
  });

  // По клику на любой пункт меню обнулить скролл
  $("header").click(function() {
    setTimeout(() => {
      $("html, body").animate(
        {
          scrollTop: 0
        },
        500,
        "easeInOutCubic"
      );
      return false;
    }, 400);
  });
});
