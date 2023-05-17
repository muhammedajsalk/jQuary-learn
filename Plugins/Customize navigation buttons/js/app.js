$(document).ready(function(){
   var owl= $('.owl-carousel');
    owl.owlCarousel({
        margin:10,             //compalsery
        items:5,
        nav:true,
        loop:true,
        
        navText:[
           "<button class='prev'>prev</button>",
           "<button class='next'>Next</button>",
        ],
        responsive : {
            0:{
                items:1,
                nav:false,
                dots:false
            },
            640:{
                items:2,
            },
            980:{
                items:3,
            }
        }
    });
});