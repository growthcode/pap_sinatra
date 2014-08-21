$(document).ready(function(){
    $('.sortable').sortable({
    update: function( event, ui ) {
      console.log("inside sortable function")


      $.ajax({
        type: "PUT",
        url: '/paps',
        data: $('.sortable').sortable('serialize')
      })
      .success(function(data){
        console.log("in the success fucntion")
        console.log(data.action_id)
      }

        ).error(function(){
          console.log("in the failure callback function")
        }).done().disableSelection()
    }
  });
});







