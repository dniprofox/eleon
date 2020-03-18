$(function () {

	////rings-slider////////
  $('.rings-slider__items').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,    
		dots: false,
		arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {          
          slidesToShow: 3,
          slidesToScroll: 1,         
        }
      },  
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,          
        }
      },    
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,          
        }
      }            
     
    ]
  });


  
});