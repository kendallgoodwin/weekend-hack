
      $(document).ready(function() {

        $('.navbar-fixed').hide();
        // $('.nav-wrapper').hide();
        $('.fancy_title').hide();
        $('.subtitle').hide();

        $('.collapsible').collapsible({
        accordion : false 
        // A setting that changes the collapsible behavior to expandable instead of the default accordion style
        });

        $(".button-collapse").sideNav();

      	$('.parallax').parallax();

        $(".fancy_title").lettering();
        $(".subtitle").lettering('words');

        $(".quote").lettering('words');
        $(".schpiel").lettering('lines');

        $(".languages").lettering('words');
        $(".frameworks").lettering('words');
        $(".tools").lettering('words');
        $(".other").lettering('words');

        $(".experience-1").lettering('lines');
        $(".experience-2").lettering('lines');
        $(".experience-3").lettering('lines');
        $(".experience-4").lettering('lines');
        $(".experience-5").lettering('lines');
        $(".experience-6").lettering('lines');

      });

      $.fn.extend({
        animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
          $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName );
          });
        }
      });

      function nameShow() {
        $('.fancy_title').animateCss('fadeInUpBig');
        $('.fancy_title').show();
      }
      setTimeout(nameShow, 1500)

      function subtitleShow() {
        $('.subtitle').animateCss('fadeInUpBig');
        $('.subtitle').show();
      }
      setTimeout(subtitleShow, 2000)

      function navbarShow() {
        // $('.nav-wrapper').animateCss('fadeIn'); 
        // $('.nav-wrapper').show();
        $('.navbar-fixed').show();        
        $('.navbar-fixed').animateCss('fadeInUpBig');        
      }
      setTimeout(navbarShow, 3000);

      function changeToWhite() {
        $('.parallax-1').css('background-color', '#ffc024');
      }
      setTimeout(changeToWhite, 4500)

     


      // $('h1').mouseenter(function() {
      // 	alert('hi');
      // 	$(this).addClass('animated flip');
      // }).mouseleave(function() {
      // 	$(this).removeClass('animated flip')
      // });


