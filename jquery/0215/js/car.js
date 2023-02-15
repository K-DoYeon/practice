$(document).ready(function(){
    $(document).keydown(function(e){
        // console.log(e.keyCode);
        switch(e.keyCode){
            case 37:
             $('.cloud').show();
             $('.mycar').css('transform', 'rotate(270deg)')
             .stop()
             .animate({left: '-=200px'}, 500, function(){
                $('.cloud').hide();
             });
            break;
            case 38:
             $('.cloud').show();
             $('.mycar').css('transform', 'rotate(0deg)')
             .stop()
             .animate({top: '-=200px'}, 500, function(){
                $('.cloud').hide();
             });
            break;
            case 39:
             $('.cloud').show();
             $('.mycar').css('transform', 'rotate(90deg)')
             .stop()
             .animate({left: '+=200px'}, 500, function(){
                $('.cloud').hide();
             });
            break;
            case 40:
             $('.cloud').show();
             $('.mycar').css('transform', 'rotate(180deg)')
             .stop()
             .animate({top: '+=200px'}, 500, function(){
                $('.cloud').hide();
             });
            break;
        }

    });
});