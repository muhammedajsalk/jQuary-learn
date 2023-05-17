$(document).ready(function(){
    $.ajax({
        type:"post",
        url:"https://reqres.in/api/users",
        data:{
            "name": "morpheus",
            "job": "leader"
        },
        success:(response)=>{
            console.log(response);
        },
        error:(error)=>{},
    })
})