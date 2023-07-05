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


    // Function to check if an element is in the viewport
    function isElementInViewport(element) {
      var rect = element.getBoundingClientRect();
      var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
      var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      var boundary = 100; // Adjust the boundary value as per your requirements
    
      return (
        rect.top >= -boundary &&
        rect.left >= -boundary &&
        rect.bottom <= viewportHeight + boundary &&
        rect.right <= viewportWidth + boundary
      );
    }

   // Function to lazy load the images
   function lazyLoadImages() {
      $(".lazy").each(function() {
      if (isElementInViewport(this)) {
         // Replace the data-src attribute with the src attribute to trigger the image load
         $(this).attr("src", $(this).data("src"));
         $(this).removeClass("lazy");
      }
      });
   }

   // Attach scroll event listener to trigger lazy loading on scroll
   $(window).on("scroll", lazyLoadImages);

   // Trigger initial lazy loading on page load
   lazyLoadImages();

});//doc ready
