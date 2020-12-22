$(".home_btn").on('click', function(event){
    event.stopPropagation();
    event.stopImmediatePropagation();
    location.reload();
});