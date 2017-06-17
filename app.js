/*
menu toggle function for mobile
*/
(function (window, document) {
      document.getElementById('toggle').addEventListener('click', function (e) {
          document.getElementById('tuckedMenu').classList.toggle('custom-menu-tucked');
          document.getElementById('toggle').classList.toggle('x');
      });
      })(this, this.document);
/*
  function for scrolling from navbar
*/

function scrollNav() {
  $('.nav a').click(function(){
    //Toggle Class
    $(".active").removeClass("active");
    $(this).closest('li').addClass("active");
    var theClass = $(this).attr("class");
    $('.'+theClass).parent('li').addClass('active');
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 160
    }, 1000);
    return false;
  });
  $('.scrollTop a').scrollTop();
}
scrollNav();

$.fn.moveIt = function(){
  var $window = $(window);
  var instances = [];

  $(this).each(function(){
    instances.push(new moveItItem($(this)));
  });

  window.onscroll = function(){
    var scrollTop = $window.scrollTop();
    instances.forEach(function(inst){
      inst.update(scrollTop);
    });
  }
}

var moveItItem = function(el){
  this.el = $(el);
  this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop){
  this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
};

// Initialization
$(function(){
  $('[data-scroll-speed]').moveIt();
});




$empire = $('.empire');

$('.welcome-btn').on('click', ()=>{
  $('.welcome-btn').fadeOut();
    $empire.animate({
      marginTop: "-=340px",
      width: "7%",
      position: "relative",
      zIndex: "2"
    }, 1500)
})
