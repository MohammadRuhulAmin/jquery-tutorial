$(document).ready(function(){
    $('#btn_1').click(()=>{
        $('#para_1').append("Md Ruhul Amin");
    });


    $('#btn_2').click(()=>{
        $('#para_1').prepend("Ruhul");
    });


    $('#before').click(function(){
        $('#para_2').before("hi ruhul amin");
    });

    $('#after').click(function(){
        $('#para_2').after('Hi ruhul amin');
    });

    $('#empty').click(function(){
        $('#div_2').empty();
    });

    $('#remove').click(function(){
        $('#div_3').remove();
    });


    $('#style').click(function(){
        $("#my_style_text").addClass("ruhul about");
    });


    $('#style_2').click(function(){
        $('#my_style_text_toggle').toggleClass("ruhul about");
    });


    $('#btn_dim').click(function(){
        
        $('#dimention').css({
            "font-size":"25px",
            "color":"red",
            "background":"green"
        }).width(500).height(50);
    });

});