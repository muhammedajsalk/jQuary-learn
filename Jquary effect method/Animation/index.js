$("button").click(function(){
    $("div").animate({left:"250px"})
});

$("button").click(function(){
    $("div.box2").animate({left:"250px",opacity:"0.5"})
});

$("button").click(function(){
    $("div.box3").animate({left:"250px",opacity:"0.5",height:"10px"})
});

//using relative values
$("button").click(function(){
    $("div.box4r").animate({left:"250px",height:"+=100px"})
});


var div=$("div.box5q")
//uses queue functionality
$("button").click(function(){
    
    div.animate({left:"250px"})
    div.animate({height:"+=100px"})
    div.animate({opacity:"0.5"})
    div.animate({width:"500px"},2000)
    div.animate({height:"-=100px"},3000)
    div.animate({width:"-=200px"})
});

//animation stop
$("#stop").click(function(){
    div.stop();
})