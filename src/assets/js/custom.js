$(document).ready(function () {
    $(document).on('click','.js-numpade-btn', function(e){
        $('.numpad').toggleClass('open');
    });

    $(document).click(function(e){
        var container = $(".js-numpade-btn, .numpad");

        // If the target of the click isn't the container
        if(!container.is(e.target) && container.has(e.target).length === 0){
            $('.numpad').removeClass('open');
        }

    });
});