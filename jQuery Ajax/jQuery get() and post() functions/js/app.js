//get method jqueary
$(document).ready(function(){
    $.get("https://reqres.in/api/users",function(response){
       console.log(response);
    })
})

//post method jqueary
$(document).ready(function(){
    $.post(
        "https://reqres.in/api/users",
        {name:"ajsal",job:"software egineer"},
     function(response){
        console.log(response);
     }
    );
});