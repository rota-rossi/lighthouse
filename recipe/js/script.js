$(document).ready(function(){

    $(".worddef").hover(function(){
        $("#definition").insertAfter($(this));
        $("#definition").toggle();
    });
    $("li").click(function(){
       $(this).toggleClass("crossed"); 
    });
    $(".instruction-line").click(function(){
        $(this).nextAll(".instruction-line").removeClass("direction-done");
        $(this).prevAll(".instruction-line").addClass("direction-done");
        $(this).toggleClass("direction-done");
    });
    $("#btn-hide-imgs").click(function(){
        $(this).text(function(i,v){
            return v === "Hide all images" ? "Show all images" : "Hide all images";
        });
        $("img").toggle('slow');
        $("#with-image").toggle();
        $("#without-image").toggle();
    });
});
