$("button").click(function(){
    console.log($("h1").attr("data-number"));//1st method
});

$("button").click(function(){
    console.log($("h1").data("number"));//2st method
});

