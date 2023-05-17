$("button").click(function(){
    $("h1").addClass("hello");//class add cheyaan upayokikuna function//muldiple classes add cheyaan shadikum
});

$("button.second").click(function(){
    $("h2").removeClass();// class remove cheyaan
})

$("button.third").click(function(){
    $("h3").toggleClass("h3");// toggle type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
})

$("button.four").click(function(){
   if($("h4").hasClass("hi")){
    console.log("hi");                        // undo illayo nokaan
   }else{
    console.log("hello");
   }
});
