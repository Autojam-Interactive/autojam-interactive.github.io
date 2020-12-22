$(".home_btn").on('click', function(event){
    event.stopPropagation();
    event.stopImmediatePropagation();
    location.reload();
});

$(".contact_btn, .about_btn, .games_btn").on('click', function(event){
    event.stopPropagation();
    event.stopImmediatePropagation();
    $("html, body").animate({ scrollTop: $(document).height() }, 800);
});

var d = new Date(); page.currentYear = d.getFullYear(); 
