// $("h1") or jquery("h1")

$("h1").css("color","red");

$("h1").addClass("big");

//removeClass(), hasClass()

$("h1").text("Changed");

$("h1").html("<em>Italics</em>");

//before(), after(), prepend(), append(),
//remove(), hide(), show(), toggle()
//fadeOut(), fadeIn(), fadeToggle()
//slideUp(), slideDown(), slideToggle()
//$("h1").animate(opacity,0.5); --> after on click opacity chnage to 50%, second param should be a NUMBER
//can be chained one after another using '.' --> slideUp().slideDown();

$("a").attr("href","https://www.bing.com");

$("h1").click(function (){
  $("h1").css("color","green");
});

//another way

$("h1").on("mouseover", function(){
  $("h1").css("color","purple");
});

//for all buttons

$("button").click(function (){
  $("h1").css("color","blue");
});

$(document).keydown(function (event){
  $("h1").text(event.key);
});
