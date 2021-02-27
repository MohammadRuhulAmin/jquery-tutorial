$(document).ready(function(){
   $('#btn-show').hide();
   $('#btn-hide').click(function(){
        $('#description').hide();
        $('#btn-show').show();
   });

   $('#btn-show').click(()=>{
        $('#description').show();
        $('#btn-hide').show();
        $('#btn-show').hide();
   });
   $('#hideMe').click(function(){
       $('*').hide();
   });
   $('#mySelf').click(function(){
    $(this).hide();
   });
   $('#listHide').click(function(){
        $('ul li:nth-child(1)').hide();
   });  
});


