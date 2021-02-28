$(document).ready(function(){
 $('#btn_1').click(function(){
    $('#text_info').slideToggle(5000);
 });
 
 $('#btn_2').click(function(){
    $('#text_info').stop();
 });


});