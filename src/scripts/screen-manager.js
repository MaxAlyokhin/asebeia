	
		click = 1;//Переключатель
		main = 1;//Маркер белого меню, 1 если мы на заглавной
		
//По клику на Hamburger выполнить:

        function MobileMenu()
        {
           
           if(click) //ОТКРЫТЬ МЕНЮ
             {
	
				$('button#HamburgerButton').addClass('is-active');//ПРЕВРАЩАЕМ В КРЕСТ
			   	$('header, nav').addClass('height100');//ВИРТУАЛЬНО РАЗВОРАЧИВАЕМ МЕНЮ НА ВЕСЬ ЭКРАН
			   	$('div#menu').addClass('table').transition({opacity: 1}, 700, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)');
               	$('div.sub-container').transition({opacity: 0}, 700, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)');//ПЛАВНО СКРЫВАЕМ СОДЕРЖИМОЕ СТРАНИЦЫ			   
               	$('ul#mobile').addClass('open');//АКТИВИРОВАТЬ ПУНКТЫ МЕНЮ В ul, li
			   	$('li#mobile').addClass('open');//АКТИВИРОВАТЬ ПУНКТЫ МЕНЮ В ul, li  
			   	$('ul#mobile').transition({scale: 1, opacity: 1 }, 700, 'cubic-bezier(0.075, 0.82, 0.165, 1)');
				
				$('div.table-cell').addClass('black_mobile').transition({opacity: 1}, 700, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)');//СЕРЫЙ ФОН
				$('p#title').addClass('black_mobile');//БЕЛОЕ ЛОГО
				$('div#title_bg').addClass('black_mobile');//ПРОЗРАЧНЫЙ ХИДЕР
				$('hr.menu-hr').addClass('black_mobile');//РАЗДЕЛИТЕЛЬ
				$('span.hamburger-inner').addClass('black_mobile');//ГАМБУРГЕР
				$('span.hamburger-inner::after').addClass('black_mobile');
				$('span.hamburger-inner::before').addClass('black_mobile');	
			   
               	click = 0;
			   
             }
			 
           else //ЗАКРЫТЬ МЕНЮ
             {
			   	$('button#HamburgerButton').removeClass('is-active');//СВОРАЧИВАЕМ КРЕСТ 
			   	$('ul#mobile').transition({scale: 0.9, opacity: 0 }, 700, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)');//УБИРАЕМ ПУНКТЫ МЕНЮ
				$('div#menu').transition({opacity: 0}, 700, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)');
				  
				if(main)
				{

					$('div#title_bg').transition({opacity: 0}, 700, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)');
					$('p#title').removeClass('black_mobile');
					$('div#title_bg').removeClass('black_mobile');
					$('hr.menu-hr').removeClass('black_mobile');
					$('span.hamburger-inner').removeClass('black_mobile');
					$('span.hamburger-inner::after').removeClass('black_mobile');
					$('span.hamburger-inner::before').removeClass('black_mobile');

				}
			   
			   setTimeout(close, 700);//ПАУЗА, ПОКА ВСЁ НЕ СВЕРНЁТСЯ ДО КОНЦА
			   
	           function close()
			     {
					 
				    click = 1;
					
					if(main)
					{
						$('div.table-cell').removeClass('black_mobile');//ЕСЛИ ЗАГЛАВНАЯ ОТКРЫТА, ТО КРАСИМ В БЕЛЫЙ
						$('p#title').removeClass('black_mobile');
						$('div#title_bg').removeClass('black_mobile');
						$('hr.menu-hr').removeClass('black_mobile');
						$('span.hamburger-inner').removeClass('black_mobile');
						$('span.hamburger-inner::after').removeClass('black_mobile');
						$('span.hamburger-inner::before').removeClass('black_mobile');
					}//ИНАЧЕ ОСТАВЛЯЕМ КАК ЕСТЬ

					$('div.table-cell').removeClass('black_mobile');
					$('header, nav').removeClass('height100');//СВОРАЧИВАЕМ МЕНЮ
                    $('ul#mobile').removeClass('open');//СВОРАЧИВАЕМ ПУНКТЫ МЕНЮ
			        $('li#mobile').removeClass('open');//СВОРАЧИВАЕМ ПУНКТЫ МЕНЮ
					$('div#menu').removeClass('table');
					$('div.sub-container').transition({opacity: 1}, 700, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)');//ПЛАВНО ПОКАЗЫВАЕМ СОДЕРЖИМОЕ СТРАНИЦЫ
				   
				 }
             }   
		 }

		 function onMain()
		 {
			$('div.table-cell').removeClass('black_mobile');//ЕСЛИ ЗАГЛАВНАЯ ОТКРЫТА, ТО КРАСИМ В БЕЛЫЙ
			$('p#title').removeClass('black_mobile');
			$('div#title_bg').removeClass('black_mobile');
			$('hr.menu-hr').removeClass('black_mobile');
			$('span.hamburger-inner').removeClass('black_mobile');
			$('span.hamburger-inner::after').removeClass('black_mobile');
			$('span.hamburger-inner::before').removeClass('black_mobile');

			$('button#HamburgerButton').removeClass('is-active');//СВОРАЧИВАЕМ КРЕСТ 
			$('ul#mobile').transition({scale: 0.9, opacity: 0 }, 700, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)');//УБИРАЕМ ПУНКТЫ МЕНЮ
			   
			   setTimeout(close, 700);//ПАУЗА, ПОКА ВСЁ НЕ СВЕРНЁТСЯ ДО КОНЦА
			   
	           function close()
			     {
					 
				    click = 1;

					$('div.table-cell').removeClass('black_mobile');
					$('header, nav').removeClass('height100');//СВОРАЧИВАЕМ МЕНЮ
                    $('ul#mobile').removeClass('open');//СВОРАЧИВАЕМ ПУНКТЫ МЕНЮ
			        $('li#mobile').removeClass('open');//СВОРАЧИВАЕМ ПУНКТЫ МЕНЮ
					$('div#menu').removeClass('table');
					$('div.sub-container').transition({opacity: 1}, 700, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)');//ПЛАВНО ПОКАЗЫВАЕМ СОДЕРЖИМОЕ СТРАНИЦЫ

				 }
		 }

