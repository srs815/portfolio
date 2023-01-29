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
    $('a').click(function(){
       pop.play();
    });

    var el = $(document).scrollTop();

    function myClick(clicker){
      $('#modal-'+clicker).css('display', 'none');
      //Hide modals

      $('#'+clicker+'-cta').click(function(){
         $('#modal-'+clicker).css('z-index', '1000');
         $('#modal-'+clicker).fadeIn('fast');
         $('#modal-'+clicker).scrollTop(0);
         el = $(document).scrollTop();
         $('body').addClass('my-body-noscroll-class');
         return false;
      });//See More

      $('#'+clicker+'-exit').click(function(){
         $('#modal-'+clicker).fadeOut('fast');
         $('body').removeClass('my-body-noscroll-class');
         $(document).scrollTop(el);
         $('#video-'+clicker).attr('src', $('#video-'+clicker).attr('src'));
         $('#video-'+clicker).css('display', 'block');
         return false;
      });//Close Top

      $('#'+clicker+'-exit-bottom').click(function(){
         $('#modal-'+clicker).fadeOut('fast');
         $('body').removeClass('my-body-noscroll-class');
         $(document).scrollTop(el);
         $('#video-'+clicker).attr('src', $('#video-'+clicker).attr('src'));
         $('#video-'+clicker).css('display', 'block');
         return false;
      });//Close Bottom

    }//myClick

});//doc ready
