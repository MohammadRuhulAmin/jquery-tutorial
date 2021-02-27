$(document).ready(function(){
    $('#div_1').on({
        mouseenter:function(){
            $('#para_1').css("font-size","25px");

        },
        mouseleave:function(){
            $('#para_1').css("font-size","5px");
        }
    });

    $('#btn_hide').on({
        click:function(){
            $('#para_1').hide('slow');
        }
    });

    $('#btn_show').on({
        click:function(){
            $('#para_1').show('slow');
        }
    });

    $('#btn_1').click(function(){
        $('#div_2').hide(5000);
    });

    $('#btn_2').click(()=>{
        $('#div_3').toggle(3000);
    });
});