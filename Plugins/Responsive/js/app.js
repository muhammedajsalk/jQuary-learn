$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        //margin:10,             //compalsery
        //items:2,
        //nav:true,
        //dots:false,
        responsive : {
            0:{
                items:1,
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