$( document ).ready(function() {
    var w = window.innerWidth;
   
    if(w > 767){
        $('#menu-jk').scrollToFixed();
    }else{
       
    }
    
    // Show More News functionality
    $('#show-more-news').click(function() {
        var hiddenItems = $('.hidden-item');
        var button = $(this);
        
        if (hiddenItems.is(':visible')) {
            // Hide items
            hiddenItems.slideUp(300);
            button.text('Show More News');
        } else {
            // Show items
            hiddenItems.slideDown(300);
            button.text('Show Less News');
        }
    });
    
})

