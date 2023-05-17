let $div=$("div.box");
console.log("height is",$div.height());//height kittan
console.log("width is",$div.width());//width kittan


console.log("Outer height is",$div.outerHeight());//border hightum chernuttula kittan
console.log("Outer width is",$div.outerWidth());//border widthum chernuttula


console.log("inner height is",$div.innerHeight());//paddingum hightum chernuttula kittan
console.log("inner width is",$div.innerWidth());//paddigum widthum chernuttula

console.log("outer height margin is",$div.outerHeight(true));//margin hightum chernuttula kittan
console.log("outer width margin is",$div.outerWidth(true));//margin widthum chernuttula
