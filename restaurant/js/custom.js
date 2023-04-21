$(document).bind("mobileinit", function(){
    $("#restau").on("pageshow", function(){
        loadview01();
    });
    $("#detail").on("pageshow", function(){
        loadview02();
    })
});