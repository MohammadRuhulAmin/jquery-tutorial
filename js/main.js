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

});


