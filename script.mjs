
const targetElement = document.querySelectorAll(".factor, .types");
console.log(targetElement);  
document.addEventListener("scroll", function(){
    for(let i  = 0;i < targetElement.length; i++){
        const getElementDistance = targetElement[i].
        getBoundingClientRect().top + targetElement[i].clientHeight * .6
        
        if(window.innerHeight > getElementDistance){
            targetElement[i].classList.add("show");
        }
    }
});


  $(function(){
    $('a[href^=#]').click(function(){
      var adjust = -200;
      var speed = 400;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top + adjust;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
    });
  });

$(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 0) {
        $('header').css('background-color', '#bec785');
        $('header').css('height', '80px');
      } else {
        $('header').css('background-color', '#EDEFE1');
        $('header').css('height', '110px');
      }
    });
  });
