$(".all").click(function(){
    $(".ph1,.ph2,.ph3").fadeIn();
});
$(".new").click(function(){
    $(".ph1").fadeIn();
    $(".ph2, .ph3").fadeOut();

});
$(".low").click(function(){
    $(".ph2").fadeIn();
    $(".ph1, .ph3").fadeOut();

});
$(".hig").click(function(){
    $(".ph3").fadeIn();
    $(".ph2, .ph1").fadeOut();

})



