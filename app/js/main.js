$(function(){  
   
   $('.promo-slider__list').slick({
      arrows: true,
   });    

   
   // var mixer = mixitup('.product__cards');
   // var mixer = mixitup('.actions__cards');

   var containerEl1 = document.querySelector('[data-ref="container-1"]');
   var containerEl2 = document.querySelector('[data-ref="container-2"]');
 
     var config = {
       controls: {
         scope: 'local'
      }
   };
 
   var mixer1 = mixitup(containerEl1, config);
   var mixer2 = mixitup(containerEl2, config);



});