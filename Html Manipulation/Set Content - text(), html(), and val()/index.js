//set content
//text set
$("button.update1").on("click",function(){
    $("h1.h11").text("hello world");
});

//html set
$("button.update2").on("click",function(){
    $("h1.h12").html("<span>hello worlds</span>");
});

//value set
$("button.input").on("click",function(){
    $("input").val("123546");
});

