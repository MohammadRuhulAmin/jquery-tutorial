$(document).ready(function(){
    $('#btn_2').click(function(){
        $('#custom_modal').hide(2000);
    });
    $('#btn_1').click(function(){
        $('#custom_modal').show(1000);
    });

    $('#btn_3').click(function(){
        $('#custom_modal').hide();

    });


    $('#btn_3').click(function(){
        $('#custom_modal').hide();
        $('#message_1').show();
    });
    $('#btn_x').click(function(){
        $('#message_1').hide();
    });


});