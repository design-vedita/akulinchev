(function () {
    "use strict";

    $(function(){

        /*задаем высоту заголовков в циклах*/

        function heightBlok (el) {
            var blocks = document.getElementsByClassName(el);

            var max = 0,
                maxindex = 0;

            for (var i = 0; i < blocks.length; i++) {

                if (blocks[i].offsetHeight > max) {
                    maxindex = i;
                    max = blocks[i].offsetHeight;

                    blocks[i].classList.add('anchor')
                }

                if(!blocks[i].classList.contains('anchor')) {
                    blocks[i].style.height = max + 'px';
                }
            }
        }

        //функция вызова таймера
        function get_timer() {

            //Дата для обратного отсчета
            var date_new = "August 1,2016 02:00";
            ////////////////////////////////////
            ////////////////////////////////////

            //Объект даты для обратного отсчета
            var date_t = new Date(date_new);
            //Объект текущей даты
            var date = new Date();
            //Вычесляем сколько миллисекунд пройдет
            //от текущей даты до даты отсчета времени
            var timer = date_t - date;

            //Проверяем не нужно ли закончить отсчет
            //если дата отсчета еще не истекла, то количество
            //миллисекунд в переменной date_t будет больше чем в переменной date
            if(date_t > date) {

                //Вычисляем сколько осталось дней до даты отсчета.
                //Для этого количество миллисекунд до даты остчета делим
                //на количество миллисекунд в одном дне
                var day = parseInt(timer/(60*60*1000*24));
                //если полученное число меньше 10 прибавляем 0
                if(day < 10) {
                    day = '0' + day;
                }
                //Приводим результат к строке
                day = day.toString();

                //Вычисляем сколько осталось часов до даты отсчета.
                //Для этого переменную timer делим на количество
                //миллисекунд в одном часе и отбрасываем дни
                var hour = parseInt(timer/(60*60*1000))%24;
                //если полученное число меньше 10 прибавляем 0
                if(hour < 10) {
                    hour = '0' + hour;
                }
                //Приводим результат к строке
                hour = hour.toString();

                //Вычисляем сколько осталось минут до даты отсчета.
                //Для этого переменную timer делим на количество
                //миллисекунд в одной минуте и отбрасываем часы
                var min = parseInt(timer/(1000*60))%60;
                //если полученное число меньше 10 прибавляем 0
                if(min < 10) {
                    min = '0' + min;
                }
                //Приводим результат к строке
                min = min.toString();

                //Вычисляем сколько осталось секунд до даты отсчета.
                //Для этого переменную timer делим на количество
                //миллисекунд в одной минуте и отбрасываем минуты
                var sec = parseInt(timer/1000)%60;
                //если полученное число меньше 10 прибавляем 0
                if(sec < 10) {
                    sec = '0' + sec;
                }
                //Приводим результат к строке
                sec = sec.toString();

                //Выводим дни
                //Проверяем какие предыдущие цифры времени должны вывестись на экран
                //Для десятков дней
                if(day[1] == 9 &&
                    hour[0] == 2 &&
                    hour[1] == 3 &&
                    min[0] == 5 &&
                    min[1] == 9 &&
                    sec[0] == 5 &&
                    sec[1] == 9) {
                    animation($(".day0"),day[0]);
                }
                else {
                    $(".day0").html(day[0]);
                }
                //Для единиц дней
                if(hour[0] == 2 &&
                    hour[1] == 3 &&
                    min[0] == 5 &&
                    min[1] == 9 &&
                    sec[0] == 5 &&
                    sec[1] == 9) {
                    animation($(".day1"),day[1]);
                }
                else {
                    $(".day1").html(day[1]);
                }
                //Выводим часы
                //Проверяем какие предыдущие цифры времени должны вывестись на экран
                //Для десятков часов
                if(hour[1] == 3 &&
                    min[0] == 5 &&
                    min[1] == 9 &&
                    sec[0] == 5 &&
                    sec[1] == 9) {
                    animation($(".hour0"),hour[0]);
                }
                else {
                    $(".hour0").html(hour[0]);
                }
                //Для единиц чассов
                if(min[0] == 5 &&
                    min[1] == 9 &&
                    sec[0] == 5 &&
                    sec[1] == 9) {
                    animation($(".hour1"),hour[1]);
                }
                else {
                    $(".hour1").html(hour[1]);
                }

                //Выводим минуты
                //Проверяем какие предыдущие цифры времени должны вывестись на экран
                //Для десятков минут
                if(min[1] == 9 &&
                    sec[0] == 5 &&
                    sec[1] == 9) {
                    animation($(".min0"),min[0]);
                }
                else {
                    $(".min0").html(min[0]);
                }
                //Для единиц минут
                if(sec[0] == 5 && sec[1] == 9) {
                    animation($(".min1"),min[1]);
                }
                else {
                    $(".min1").html(min[1]);
                }

                //Выводим секунды
                //Проверяем какие предыдущие цифры времени должны вывестись на экран
                //Для десятков секунд
                if(sec[1] == 9) {
                    animation($(".sec0"),sec[0]);
                }
                else {
                    $(".sec0").html(sec[0]);
                }
                animation($(".sec1"),sec[1]);
                //Переодически вызываем созданную функцию,
                //интервал вызова одна секунда(1000 милли секунд)
                setTimeout(get_timer,1000);
            }
            else {
                $("#clock").html("<span id='stop'>Отсчет закончен!!!</span>");
            }

        }

        function animation(vibor,param) {
            vibor.html(param)
                .css({'marginTop':'-20px','opacity':'0'})
                .animate({'marginTop':'0px','opacity':'1'});
        }

        /* Показываем popup*/

        function application() {
            var link = document.getElementsByClassName('js-application'),
                popup = document.getElementsByClassName('js-popup')[0],
                closePopup = document.getElementsByClassName('cl'),
                overlay = document.getElementsByClassName('js-overlay')[0],
                body = document.body,
                docElem = document.documentElement,
                scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop,
                scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;

            var width = popup.offsetWidth,
                height = popup.offsetHeight;


            for (var i = 0; i < link.length; i++) {
                link[i].onclick = function() {
                    popup.classList.add('popup--visible');
                    overlay.classList.add('popup-overlay--visible');

                    if(popup.classList.contains('popup--visible')) {
                        popup.style.left = scrollLeft + (docElem.clientWidth - width) / 2 + 'px';
                        popup.style.top = scrollTop + (docElem.clientHeight - height) / 2 + 'px';
                    }
                }
            }


            for (var j = 0; j < closePopup.length; j++) {
                closePopup[j].onclick = function(){
                    popup.classList.remove('popup--visible');
                    overlay.classList.remove('popup-overlay--visible');
                }
            }


        }

        // Плавный переход по ссылкам

        $('.js-check-in, .js-top-menu-link').click(function(){
            var link = $(this).attr('href');
            $('html, body').animate({scrollTop: $(link).offset().top}, 1000);
            return false;
        });

        // Переход между циклами во всплывающем окне

        function nextPopup() {
            var links = document.getElementsByClassName('js-view-popup'),
                blocks = document.getElementsByClassName('js-block'),
                popup = document.getElementsByClassName('js-popupText')[0];


                for (var i = 0; i < links.length; i++) {

                    links[i].onclick = function() {
                        var attrLink = this.getAttribute('data-visible');

                            for (var j = 0; j < blocks.length; j++) {

                                var attrBlock = blocks[j].getAttribute('data-visible');

                                    if (attrLink == attrBlock) {
                                        blocks[j].classList.add('block--visible');
                                        console.log();
                                        $('html, body').animate({scrollTop: popup.offsetTop}, 1000);
                                    } else {
                                        blocks[j].classList.remove('block--visible');
                                    }
                            }
                    }
                }
        }

        // Текстовый попап 

        function popupText() {
            var link = document.getElementsByClassName('js-more'),
                popup = document.getElementsByClassName('js-popupText')[0],
                closePopup = document.getElementsByClassName('js-close'),
                overlay = document.getElementsByClassName('js-overlay')[0],
                body = document.body,
                docElem = document.documentElement,
                scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop,
                scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;

            var width = popup.offsetWidth,
                height = popup.offsetHeight;

            for (var i = 0; i < link.length; i++) {

                link[i].onclick = function() {
                    popup.classList.add('popup--visible');
                    overlay.classList.add('popup-overlay--visible');

                    if(popup.classList.contains('popup--visible')) {
                        popup.style.left = scrollLeft + (docElem.clientWidth - width) / 2 + 'px';
                        popup.style.top = scrollTop + (docElem.clientHeight - height) / 2 + 'px';
                    }
                }
            }


            for (var j = 0; j < closePopup.length; j++) {
                closePopup[j].onclick = function(){
                    popup.classList.remove('popup--visible');
                    overlay.classList.remove('popup-overlay--visible');
                }
            }

        }

        function checkOutPopup() {
            var popup = document.getElementsByClassName('js-popup')[0],
                popupText = document.getElementsByClassName('js-popupText')[0],
                link = document.getElementsByClassName('js-popup-check');

                for (var i = 0; i < link.length; i++) {

                    link[i].onclick = function() {
                        popup.classList.add('popup--visible');
                        popupText.classList.remove('popup--visible')
                    }
                }

        }


        checkOutPopup();
        popupText();
        nextPopup();
        application();
        get_timer();
        heightBlok('js-cycle-title');

        window.onscroll = function() {
            popupText();
            application();
        }


        $('select').styler();

        $('.js-partners').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 6,
            slidesToScroll: 1,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>'
        });

        $('.js-cert').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>'
        });

        $('.js-reviews').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>'
        });
    });
}());