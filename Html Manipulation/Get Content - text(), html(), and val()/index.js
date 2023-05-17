//text value
let text =$("h1").text();//text contents mathram idkukayullu
console.log(text);

//html value
let text2 =$("h1.h12").html();
console.log(text2);// textnte kude child elements idthu kanikum

///njammal inputil type cheyuna karyam consoleil kanikaan
$("input").on("change",function(){
    let $this=$(this)
    console.log($this.val());
});

///njammal inputtil repeat ayyi type cheyumpol consoleil kaanaan
$("input").on("change keyup",function(){
    let $this=$(this)
    console.log($this.val());
});


$("input").on("change keyup",function(){
    let $this=$(this)
    if(parseInt($this.val())>=10){
        console.log("pass");
    }else{
        console.log("fail");
    }
});
