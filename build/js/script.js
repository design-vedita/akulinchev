(function () {
    "use strict";

    $(function(){

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

        //������� ������ �������
        function get_timer() {

            //���� ��� ��������� �������
            var date_new = "August 1,2016 02:00";
            ////////////////////////////////////
            ////////////////////////////////////

            //������ ���� ��� ��������� �������
            var date_t = new Date(date_new);
            //������ ������� ����
            var date = new Date();
            //��������� ������� ����������� �������
            //�� ������� ���� �� ���� ������� �������
            var timer = date_t - date;

            //��������� �� ����� �� ��������� ������
            //���� ���� ������� ��� �� �������, �� ����������
            //����������� � ���������� date_t ����� ������ ��� � ���������� date
            if(date_t > date) {

                //��������� ������� �������� ���� �� ���� �������.
                //��� ����� ���������� ����������� �� ���� ������� �����
                //�� ���������� ����������� � ����� ���
                var day = parseInt(timer/(60*60*1000*24));
                //���� ���������� ����� ������ 10 ���������� 0
                if(day < 10) {
                    day = '0' + day;
                }
                //�������� ��������� � ������
                day = day.toString();

                //��������� ������� �������� ����� �� ���� �������.
                //��� ����� ���������� timer ����� �� ����������
                //����������� � ����� ���� � ����������� ���
                var hour = parseInt(timer/(60*60*1000))%24;
                //���� ���������� ����� ������ 10 ���������� 0
                if(hour < 10) {
                    hour = '0' + hour;
                }
                //�������� ��������� � ������
                hour = hour.toString();

                //��������� ������� �������� ����� �� ���� �������.
                //��� ����� ���������� timer ����� �� ����������
                //����������� � ����� ������ � ����������� ����
                var min = parseInt(timer/(1000*60))%60;
                //���� ���������� ����� ������ 10 ���������� 0
                if(min < 10) {
                    min = '0' + min;
                }
                //�������� ��������� � ������
                min = min.toString();

                //��������� ������� �������� ������ �� ���� �������.
                //��� ����� ���������� timer ����� �� ����������
                //����������� � ����� ������ � ����������� ������
                var sec = parseInt(timer/1000)%60;
                //���� ���������� ����� ������ 10 ���������� 0
                if(sec < 10) {
                    sec = '0' + sec;
                }
                //�������� ��������� � ������
                sec = sec.toString();

                //������� ���
                //��������� ����� ���������� ����� ������� ������ ��������� �� �����
                //��� �������� ����
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
                //��� ������ ����
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
                //������� ����
                //��������� ����� ���������� ����� ������� ������ ��������� �� �����
                //��� �������� �����
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
                //��� ������ ������
                if(min[0] == 5 &&
                    min[1] == 9 &&
                    sec[0] == 5 &&
                    sec[1] == 9) {
                    animation($(".hour1"),hour[1]);
                }
                else {
                    $(".hour1").html(hour[1]);
                }

                //������� ������
                //��������� ����� ���������� ����� ������� ������ ��������� �� �����
                //��� �������� �����
                if(min[1] == 9 &&
                    sec[0] == 5 &&
                    sec[1] == 9) {
                    animation($(".min0"),min[0]);
                }
                else {
                    $(".min0").html(min[0]);
                }
                //��� ������ �����
                if(sec[0] == 5 && sec[1] == 9) {
                    animation($(".min1"),min[1]);
                }
                else {
                    $(".min1").html(min[1]);
                }

                //������� �������
                //��������� ����� ���������� ����� ������� ������ ��������� �� �����
                //��� �������� ������
                if(sec[1] == 9) {
                    animation($(".sec0"),sec[0]);
                }
                else {
                    $(".sec0").html(sec[0]);
                }
                animation($(".sec1"),sec[1]);
                //������������ �������� ��������� �������,
                //�������� ������ ���� �������(1000 ����� ������)
                setTimeout(get_timer,1000);
            }
            else {
                $("#clock").html("<span id='stop'>������ ��������!!!</span>");
            }

        }

        function animation(vibor,param) {
            vibor.html(param)
                .css({'marginTop':'-20px','opacity':'0'})
                .animate({'marginTop':'0px','opacity':'1'});
        }

        get_timer();
        heightBlok('js-cycle-title');


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