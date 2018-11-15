
jQuery(function($){
    $('.burger_menu').click(function() {
        $('.menu').css('display', 'inline-block')
    });

    $(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $("#menu"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.hide(); // скрываем его
        }
    });

    $(document).ready(function(){
        $('.under_slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            fade: false,
            cssEase: 'linear',
            // adaptiveHeight: true,
            variableWidth: true,
            arrows: false
        });

        var slick = $('.video-slider').slick({
            dots: false,
            infinite: false,
            speed: 600,
            adaptiveHeight: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<div class="prev_btn_video"></div>',
            nextArrow: '<div class="next_btn_video"></div>',
            responsive: [
                {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });

        $('.photos_slider').slick({
            dots: false,
            infinite: true,
            speed: 600,
            slidesToShow: 4,
            slidesToScroll: 4,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 481,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        var slickPhoto = $('.js-slick-photo').slick({
            dots: false,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            adaptiveHeight: true,
            prevArrow: '<div class="prev_btn_photo"></div>',
            nextArrow: '<div class="next_btn_photo"></div>'
        });

        $('.center').slick({
            slidesToShow: 1,
            slidesToScroll: 2,
            centerMode: true,
            variableWidth: true,
            infinite: false,
            adaptiveHeight: true,
            speed: 500,
            initialSlide: 1,
            prevArrow: '<div class="prev"></div>',
            nextArrow: '<div class="next"></div>'
        });

        $('.center').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            console.log('currentSlide: ' + currentSlide + ' nextSlide ' + nextSlide);
            if (currentSlide > nextSlide) {
                console.log('prev');
                $('.slide_two').addClass('class_right')
            } else {
                $('.slide_two').removeClass('class_right')
            }
        });

        $('.next').click(function () {
            if ($('div.slide_three').hasClass('slick-current')) {
                $('div.prev-text').text('тюбинг');
                $('div.next-text').text('снегоходы');
            }
            if ($('div.slide_four').hasClass('slick-current')) {
                $('div.prev-text').text('сноуборд');
                $('div.next-text').text('');
            }
            if ($('div.slide_two').hasClass('slick-current')) {
                $('div.prev-text').text('горные лыжи');
                $('div.next-text').text('сноуборд');
            }
        });

        $('.prev').click(function () {
            if($('div.slide_three').hasClass('slick-current')) {
                $('div.prev-text').text('тюбинг');
                $('div.next-text').text('снегоходы');
            }
            if($('div.slide_two').hasClass('slick-current')) {
                $('div.prev-text').text('горные лыжи');
                $('div.next-text').text('сноуборд');
            }
            if($('div.slide_one').hasClass('slick-current')) {
                $('div.prev-text').text('');
                $('div.next-text').text('тюбинг');
            }
        });



        $('.blog_slider').slick({
            dots: true,
            infinite: false,
            speed: 600,
            adaptiveHeight: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: false,
            autoplaySpeed: 2000,

        });

        $('.reviews_block').slick({
            dots: false,
            infinite: true,
            speed: 600,
            adaptiveHeight: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay: false,
            autoplaySpeed: 2000,
            prevArrow: '<div class="prev_review"></div>',
            nextArrow: '<div class="next_review"></div>'
        });

        $('#about_btn').click(function() {
            slick.slick('refresh');
            $('#modal_video').css('display', 'block');
            $('body').css('overflow-y', 'hidden')
        });

        $('#close_btn').click(function() {
           $('#modal_video').css('display', 'none');
            $('body').css('overflow-y', 'auto')
        });

        $('#video1').click(function() {
           $('#video6').css('display', 'block');
        });
        $('#close_btn_iframe6').click(function() {
           $('#video6').css('display', 'none');
        });

        $('#video2').click(function() {
            $('#video7').css('display', 'block');
        });
        $('#close_btn_iframe7').click(function() {
            $('#video7').css('display', 'none');
        });

        $('#video3').click(function() {
            $('#video8').css('display', 'block');
        });
        $('#close_btn_iframe8').click(function() {
            $('#video8').css('display', 'none');
        });

        $('#video4').click(function() {
            $('#video9').css('display', 'block');
        });
        $('#close_btn_iframe9').click(function() {
            $('#video9').css('display', 'none');
        });

        $('#video5').click(function() {
            $('#video10').css('display', 'block');
        });
        $('#close_btn_iframe10').click(function() {
            $('#video10').css('display', 'none');
        });

        $('.photo_item').click(function() {
            $('.modal_window_photo').css('display', 'block');
            $('body').css('overflow-y', 'hidden');
            slickPhoto.slick('refresh');
        });

        $('#close_btn_photo').click(function() {
            $('.modal_window_photo').css('display', 'none');
            $('body').css('overflow-y', 'auto');
        });

        $('#open_map').click(function() {
            $('#modal_window_maps').css('display', 'block');
            $('body').css('overflow-y', 'hidden');
            ymaps.ready(init);

            function init () {
                var location = ymaps.geolocation.get();
                location.then(function (res) {
                    var userTextLocation = res.geoObjects.get(0).properties.get('text');
                    control.routePanel.state.set({
                        from: userTextLocation,
                        to: [57.4278, 42.2255]
                    });
                });

                var myMap = new ymaps.Map('map', {
                    center: [55.751574, 37.573856],
                    zoom: 12,
                    controls: ['routePanelControl']
                });
                var control = myMap.controls.get('routePanelControl');

                var switchPointsButton = new ymaps.control.Button({
                    data: {content: "Поменять местами", title: "Поменять точки местами"},
                    options: {selectOnClick: false, maxWidth: 160}
                });
                switchPointsButton.events.add('click', function () {
                    control.routePanel.switchPoints();
                });
                myMap.controls.add(switchPointsButton);
            }
        });

        $('#close_btn_map').click(function() {
            $('#modal_window_maps').css('display', 'none');
            $('body').css('overflow-y', 'auto');
        });

        $('#winter_btn').click(function() {
           $('.modal_price').css('display', 'block');
           $('body').css('overflow', 'hidden');
        });

        $('#close_btn_price').click(function() {
            $('.modal_price').css('display', 'none');
            $('body').css('overflow', 'auto');
        });
    });
    // $(document).ready(function () {
    //     $(".burger-menu span #menu li a").click(function () {
    //         var elementClick = $(this).attr("href");
    //         var destination = $(elementClick).offset().top;
    //         if ($.browser.safari) {
    //             $('body').animate({ scrollTop: destination }, 1100); //1100 - скорость
    //         } else {
    //             $('html').animate({ scrollTop: destination }, 1100);
    //         }
    //         return false;
    //     });
    // });
    $("#menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    if($('div.slide_two').is('slick-center')) {
        console.log('ПОЛУЧИЛОСЬ!!');
    }

});








