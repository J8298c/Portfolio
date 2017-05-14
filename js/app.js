$(".proBtn").on('click', function(){
  $('.projectDisplay').fadeIn("slow", "linear");
  $('.about').fadeOut("fast", "linear");
  $(".techDisplay").fadeOut("fast", "linear");
})
$(".skillsBtn").on('click', function(){
  $(".techDisplay").fadeIn("slow", "linear");
  $('.projectDisplay').fadeOut("fast", "linear");
  $('.about').fadeOut("fast", "linear");
});
$(".aboutBtn").on('click', function(){
  $('.about').fadeIn("slow", "linear");
  $(".techDisplay").fadeOut("fast", "linear");
  $('.projectDisplay').fadeOut("fast", "linear");
})
