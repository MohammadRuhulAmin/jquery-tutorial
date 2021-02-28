$(document).ready(function(){
    $('#btn_1').click(function(){
        $('#div_1').css("font-size","25px").slideUp(2000).slideDown(2000).hide(1000);
    });

    $('#showText').click(function(){
        alert("Message"+ $('#textInfo').html());
    });


    $('#get_name').click(function(){
        alert($('#get_input_name').val());
    });
    $('#btn_link').click(function(){
        alert($('#link_1').attr("href"));
    });

    $('#my_btn').click(function(){
        alert($('#my_h1').attr("id"));
    });

});