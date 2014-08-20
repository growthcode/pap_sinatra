$(document).ready(function(){
    $('.sortable').sortable({
    update: function( event, ui ) {
      console.log("inside sortable function")
      console.log($('.sortable li'))


      $.ajax({
        type: "PUT",
        url: '/paps',
        data: $('.sortable').sortable('serialize')
      })
      .success(function(data){
        console.log("in the success fucntion")
        console.log(data.step_id)
        console.log(data.order)
      }

        ).done()
    }
  });
});







