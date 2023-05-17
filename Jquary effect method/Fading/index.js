// slow motion
$("#fadeIn").click(function(){
    $("h1").fadeIn(4000);
    //extra options
    // $("h1").fadeIn(slow);
    // $("h1").fadeIn(4000);
});

$("#fadeOut").click(function(){
    $("h1").fadeOut();
    //extra options
    // $("h1").fadeIn(slow);
    // $("h1").fadeIn(4000);
});

$("#fadeToggle").click(function(){
    $("h1").fadeToggle();
    //extra options
    // $("h1").fadeIn(slow);
    // $("h1").fadeIn(4000);
});