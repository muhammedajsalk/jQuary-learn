
$(document).on("submit","form",function(e){
    e.preventDefault();
    var $this=$(this);
    
    var data=$this.serialize();
    var action=$this.attr("action");
    var method=$this.attr("method");
    $.ajax({
        type:method,
        url:action,
        data: data,
        success:(response)=>{
            Swal.fire({
                title: 'Success',
                text: 'Successsfully complete',
                icon: 'success',
            });
        },
        error:(error)=>{
            Swal.fire({
                title: "Error! O",
                text: "Do you want to continue",
                icon: "error",
              })
        },
    });
})