$(document).ready(function() {

// Раздача аккордеонам ID и Data-parent
  // i = 1;
  // k = 2;
  // $('.accordion').each(function() {
  //   $(this).attr('id','accordion'+i);
  //   $('[id^=accordion] .accordion-group .accordion-heading a').attr('data-parent','#accordion'+k);
  //   i++;
  //   k++;
  // });
// Раздача Id аккордеону с товарами
  // i = 1;
  // $('.accordion_tovar').each(function() {
  //   $(this).attr('id','accordion_tovar'+i);
  // i++;
  // });
// Прячем боковой скролл бар в товарах
  
// Инициализации кнопок аккордеона
  // i = 2;
  // g = 1;
  // j = 1;
  // $('[id^=accordion] .accordion-group .accordion-heading .accordion-toggle').each(function() {
  //   $(this).attr('data-parent','#accordion'+i);
  //   $(this).attr('href','#collapse'+g);
  //   g++;
  //   $(this).addClass('accordion-toggle' + j + ' d_w');
  //   j++;
  // });
  // p = $('#accordion1 .accordion-group .accordion-heading .accordion-toggle').length;
  // p = p + 1;
  // $('[id^=accordion_tovar] .accordion-group .accordion-heading .accordion-toggle').each(function() {
  //   $(this).attr('data-parent','#accordion'+i);
  //   $(this).attr('href','#coll'+p);
  //   p++;
  // });
  // p = $('#accordion1 .accordion-group .accordion-heading .accordion-toggle').length;
  // p = p + 1;
  // $('[id^=accordion] .accordion-group .accordion-heading .accordion-toggle_2').each(function() {
  //   $(this).attr('data-parent','#accordion'+i);
  //   $(this).attr('href','#coll'+p);
  //   p++;
  // });
  // // Задаем id для внутренних блоков аккордеона
  // i = 1;
  // $('[id^=accordion] .accordion-group .accordion-body').each(function() {
  //   $(this).attr('id','collapse'+i);
  //   i++;
  // });
  // Инициализация кнопок для Leftbar
  // i = 1;
  // $('.accordion-heading').each (function() {
  //   $(this).attr('id','heading' + i);
  //   i++;
  // });
  
  
  // i = 1;
  // $('.accordion-heading .d_w').each (function() {
  //   $(this).attr('id','down_' + i);
  //   i++;
  // });
  // i = 1;
  // $('.accordion-group').each (function() {
  //   $(this).attr('id','gr' + i);
  //   i++;
  // });
  // // Смена классов у кнопок Up and Down    leftBar
  // $('[id^=heading]').on('click','[id^=down_]', function() {
  //   myid = $(this).attr('id');
  //   myid = myid.replace('down_','');
  //   $('#down_'+ myid).find('i').removeClass('fa-angle-down');
  //   $('#down_'+ myid).find('i').addClass('fa-angle-up');
  //   $(this).attr("id","up_"+myid);
  //   $('#gr'+ myid).addClass('bcolor');
  // });
  //   $('[id^=heading]').on('click','[id^=up_]', function() {
  //   myid = $(this).attr('id');
  //   myid = myid.replace('up_','');
  //   $(this).attr("id","down_"+myid);
  //   $('#down_'+ myid).find('i').removeClass('fa-angle-up');
  //   $('#down_'+ myid).find('i').addClass('fa-angle-down');
  //   $('#gr'+ myid).removeClass('bcolor');
    // });
  // i = 1;
  // $('.block_height').each (function() {
  //   $(this).attr('id','block_height' + i);
  //   i++;
  // }); 
  // Показываем нижний скрол бар в товарах
    // i = 1;
    // $('[id^=accordion_tovar] .scroller__bar_h').each(function() {
    //   $(this).css('display','block');
    // i++;
    // });
  


  //accordion left bar
  $('.leftbar .accordion-heading').on('click','.accordion-toggle',function() {
    $(this).parent().parent().find('.accordion-body').slideDown(); 
    $(this).parent().parent().addClass('bcolor');
    $(this).find('i').removeClass('fa-angle-down');
    $(this).find('i').addClass('fa-angle-up');
    $(this).addClass('active-toggle');
    $(this).removeClass('accordion-toggle');
  }); 
  $('.leftbar .accordion-heading').on('click','.active-toggle',function() {
    $(this).parent().parent().find('.accordion-body').slideUp(); 
    $(this).parent().parent().removeClass('bcolor');
    $(this).find('i').removeClass('fa-angle-up');
    $(this).find('i').addClass('fa-angle-down');
    $(this).addClass('accordion-toggle');
    $(this).removeClass('active-toggle');
  }); 

  $('.content [class^=accord_wrap]').on('click','.accordion-toggle', function() {
    $(this).parent().parent().next().addClass('active_tovar'); //
    $(this).parent().parent().css({'height':'62px'});
    $(this).parent().parent().parent().find('.accordion-heading').addClass('first_tr_active');
    $(this).parent().parent().find('.fa-angle-down').addClass('fa-angle-up');
    $(this).parent().parent().find('[class^=accordion-toggle]').addClass('activity');
    $(this).parent().parent().find('.fa-angle-down').removeClass('fa-angle-down');
    $(this).parent().parent().parent().find('.active_tovar').slideDown();
    $(this).parent().parent().find('.knopki').addClass('active_knopki');
    $(this).parent().parent().parent().find('th').addClass('first_tr_active');
  });

  $('.content [class^=accord_wrap]').on('click','.activity', function() {
    $(this).parent().parent().parent().find('.active_tovar').slideUp(); 
    $(this).parent().parent().next().removeClass('active_tovar');
    $(this).parent().parent().animate({'height':'45px'});
    $(this).parent().parent().find('.fa-angle-up').addClass('fa-angle-down');
    $(this).parent().parent().find('.fa-angle-up').removeClass('fa-angle-up');
    $(this).parent().parent().find('[class^=accordion-toggle]').removeClass('activity');
    $(this).parent().parent().find('.active_knopki').removeClass('active_knopki');
    $(this).parent().parent().parent().find('th').removeClass('first_tr_active');
    $(this).parent().parent().parent().find('.accordion-heading').removeClass('first_tr_active');
  });

  i = 1;
  $('.whiteble').each(function() {
    $(this).attr('id','table' + i);
    i++;
  });

  i = 1;
  $('.scroll_').each (function() {
    $(this).attr('id','scroll_' + i);
    i++;
  });
  
  // Отступы для скроллера
  $('.wrapper2 .scroller').each(function() {
    $(this).css('margin-left','-10px');
  });
    i = 1;
    $('[id^=accordion_tovar] .scroller__bar').each(function() {
      $(this).css('display','none');
    i++;
    });
  
  // Инициализируем Инпуты 
   $('[disabled = disabled]').parent().addClass('disabled'); 
  // $(this).attr('disabled').parent().addClass('disabled');
  i = 1;
  $('form p > input').each(function() {
    $(this).attr('id','checkb'+i);
    i++;
  });
  i = 1;
  $('form p > label').each(function() {
    $(this).attr('for','checkb'+i);
    i++;
  });
  //События Sroll

  $(document).on('scroll', '', function(){
    $.each( $('[id^=table]'), function() {
      // console.log(  $(this).attr('id').replace('test', '')  );
      number = $(this).attr('id').replace('table', '');
        if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1)
        {
          var window_bottom =  $('html, body').scrollTop() +  $(window).height();
        } else {
          var window_bottom =  $('body').scrollTop() +  $(window).height();
        }
        var block_top     =  $('#table'+number).offset().top + 25; 
        var block_bottom  =  $('#table'+number).offset().top + $('#table'+number).height() + 15;

        if (block_top < window_bottom && window_bottom < block_bottom) {
          // position fixed
          $('#scroll_'+number).css('position','fixed');
          $('#scroll_'+number).css('margin-left','224px');
        } else {
          // position absolute
          $('#scroll_'+number).css('position','absolute');
          $('#scroll_'+number).css('margin-left','0');
        } 

    });
  });

  // Прячем leftBar

  function slide_left () {
    $('.calc').removeClass('calc_on');
    $('.pollSlider').animate({"left": '-=209'});
    $('#width_left_bar').css('width','0px');
    $('.calc').animate({"width":"100%"}),300;
    $('.calc').css('padding-left','22px');
  }


  function slide_right () {
    $('.pollSlider').animate({"left": '+=209'});
    $('#width_left_bar').css('width','228px');
    $('.calc').animate({"width":"-=224px"}),300;
    // $('.calc').animate({"width": "calc(100% - 224px)"}),300;
    setTimeout(function () {
    $('.calc').addClass('calc_on');
    }, 400);
    // $('.calc').css('width','calc(100% - 224px)');
    $('.calc').css('padding-left','10px');
    // $('.calc').animate({'padding-left':'10px'}),0;
  }


  i = 0;
  
  $('.accordion-group').on('click','#pollSlider-button',function() {
    if(i == 0)
    {   slide_left();
        i = 1;
    }
    else if(i == 1)
    {   
        slide_right ();
        i = 0;
    }
  });
  // Скрипт Baron //

  window.onload = function() {
      window.dima = baron({
          root: '.wrapper_1',
          scroller: '.scroller',
          bar: '.scroller__bar',
          barOnCls: 'baron'
      });

      baron({
          scroller: '.wrapper_2 .scroller',
          bar: '.scroller__bar',
          barOnCls: 'baron'
      }).baron({
          barOnCls: 'baron_h',
          bar: '.scroller__bar_h'
      });
  };



  $('.form_otpravka').on('click','.btn_clear_email',function() {
    $(this).parent().parent().css('display','none');
  });
  $('.select_popup').on('click','.close_pop_select',function() {
    $(this).parent().css('display','none');
  });
  function popup_open() {
    $('.popup_wrap').fadeIn(400);
    $('.popup').fadeIn(400);
  }
  function popup_close() {
    $('.popup_wrap').fadeOut(400);
    $('.popup').fadeOut(400);
    console.log('NSW');
  }
  $('.btn_otchet').click(function(){
    popup_open();
  });
  $('.popup_wrap').click(function(event){
    popup_close();
  });
  $('.close_popup').click(function(event){
    popup_close();
  });

  function select_dropdown_open() {
    $('.sities_dropdown').show(); 
    $('.select_dropdown_wrap').css('display','block');
    $('.cities_select_toggle').addClass('active_select');
  }

  function select_dropdown_close () {
    $('.sities_dropdown').hide();
    $('.select_dropdown_wrap').css('display','none');
    $('.cities_select_toggle').removeClass('active_select');
  }
  $('.cities_select_toggle').click(function  () {
    select_dropdown_open();
  }); 
  $('.active_select').click(function  () {
    select_dropdown_close();
  }); 

  $('.select_dropdown_wrap').click(function() {
   select_dropdown_close ();
  });

   $('.accordeon_select_header').on('click','.accordion_select_toggle',function() {
     $(this).parent().parent().find('.accordeon_select_body').slideDown();
     $(this).addClass('active_select_toggle');
     $(this).find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
   }); 
   $('.accordeon_select_header').on('click','.active_select_toggle',function() {
     $(this).parent().parent().find('.accordeon_select_body').slideUp();
     $(this).removeClass('active_select_toggle');
     $(this).find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
   }); 

   $('a').on('click','.select_toggle',function() {
    var text = $(this).text(); 
    $('.cities').text(''); 
    $('.cities').text(text); 
    select_dropdown_close ();
    // $(this).parent().parent().parent().find('.accordeon_select_body').slideUp();
    // $(this).parent().parent().parent().parent().find('.accordion_select_toggle').removeClass('active_select_toggle');
    // $(this).parent().parent().parent().parent().find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
   });



}); 






  
  
