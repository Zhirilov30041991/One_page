$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText : ["<img src=\"images/prev-end.png\">","<img src=\"images/prev-next.png\">"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})





// Начало диалога//
$('.button').click(function(){
 $('#dialog').dialog('open');
});


$( "#dialog" ).dialog({
  autoOpen: false,
  distance: 300
});
// Конец диалога//