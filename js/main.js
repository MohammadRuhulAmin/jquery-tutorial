$(document).ready(function(){
  $('#btn_1').click(function(){
    $('#para_1').hide();
  });
  $('#btn_2').dblclick(function(){
    $('#para_1').show();
  });

  $('#btn_3').mouseenter(function(){
    $('#para_1').hide();
  });
  $('#btn_4').mouseenter(()=>{
    $('#para_1').show();
  });
  $('#btn_5').mouseenter(()=>{
    alert('do you want to delete!');
  });
  $('#btn_6').mouseleave(function(){
    alert('ok deleting');
  });
  $('#para_2').hover(()=>{
      alert('hi');
  },()=>{
      alert('bye');
  });

  $('#input_1').focus(function(){
    $(this).css("background","red");
  });

  $('#div_1').mouseenter(function(){
    $('#para_3').css("font-size","25px");
  });

$('#div_2').dblclick(function(){
    $('#para_4').css("font-size","26px");
});



});


