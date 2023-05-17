
$(document).on("submit","form",function(e){
    e.preventDefault();
    var $this=$(this);
    
    var data=$this.serialize();
    console.log(data);
    $.ajax({
        type:"post",
        url:"https://reqres.in/api/users",
        data: data,
        success:(response)=>{
            console.log(response);
            alert("suceess");
        },
        error:(error)=>{},
    });
})