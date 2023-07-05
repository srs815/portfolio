$(document).ready(function(){

   //Date function
   $('#date').text(new Date().getFullYear());

   var items = new Array();
   storeid();

   for(var i = 0; i < items.length; i++){
      myClick(items[i]);
   }

   //Find all the rows and get their ids
   function storeid(){
      var className = document.getElementsByClassName('row');
      var classnameCount = className.length;
      for(var j = 0; j < classnameCount; j++){
          items.push(className[j].id);
      }
   }

    //Sound
    var pop = $("#pop")[0];

    $(window).on('popstate', function() {
      // Handle the URL change
      
         items.forEach(function(clicker) {
            $('#modal-' + clicker).fadeOut('fast');
            $('body').removeClass('my-body-noscroll-class');
            $(document).scrollTop(el);
            $('#video-' + clicker).attr('src', $('#video-' + clicker).attr('src'));
            $('#video-' + clicker).css('display', 'block');
          });
      
    });

    var el = $(document).scrollTop();

    function myClick(clicker){
      $('#modal-'+clicker).css('display', 'none');
      //Hide modals

      $('#'+clicker+'-cta').click(function(){
         $('#modal-'+clicker).css('z-index', '1000');
         $('#modal-'+clicker).fadeIn('fast');
         $('#modal-'+clicker).scrollTop(0);
         $('body').addClass('my-body-noscroll-class');
         pop.play();
         window.history.pushState({}, '', '/portfolio/#modal-'+clicker);
         el = $(document).scrollTop();
         return false;
      });//See More

      $('#'+clicker+'-exit').click(function(){
         $('#modal-'+clicker).fadeOut('fast');
         $('body').removeClass('my-body-noscroll-class');
         $('#video-'+clicker).attr('src', $('#video-'+clicker).attr('src'));
         $('#video-'+clicker).css('display', 'block');
         pop.play();
         window.history.go(-1);
         $(document).scrollTop(el);
         return false;
      });//Close Top

      $('#'+clicker+'-exit-bottom').click(function(){
         $('#modal-'+clicker).fadeOut('fast');
         $('body').removeClass('my-body-noscroll-class');
         $('#video-'+clicker).attr('src', $('#video-'+clicker).attr('src'));
         $('#video-'+clicker).css('display', 'block');
         pop.play();
         window.history.go(-1);
         $(document).scrollTop(el);
         return false;
      });//Close Bottom

    }//myClick

});//doc ready
