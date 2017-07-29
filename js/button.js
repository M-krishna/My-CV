$(document).ready(function(){
   $(window).scroll(function(){
      if($(this).scrollTop() > 20)
          {
              $('.scrollTop').fadeIn()
          }
       else
           {
               $('.scrollTop').fadeOut()
           }
       
   }); 
    
    $('a[href*="#top"]').on('click',function(e) {
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);
		$('hmtl,body').animate({
			'scrollTop':$target.offset().top

		},1000,'swing');

	});
    
    
    
});