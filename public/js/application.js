$(document).ready(function(){


  // 2nd .change allows initial rendering of page to invokes this method and NOT wait for the first change
  $('.manage_actions').change( changeViewOfActions ).change();

});

// invoking sortable first so that .change() and sortable(enable/disable) doesn't cause a no method error
$('.sortable').sortable({
  update: dragAndSortActionItems
}).disableSelection();


function dragAndSortActionItems ( event, ui ) {
  console.log("in the sortable function")

  $.ajax({
    type: "PUT",
    url: '/paps',
    data: $('.sortable').sortable('serialize')
  }).success(function(data){
    console.log("in the success fucntion")
    console.log(data.action_id)
  }).error(function(){
      console.log("in the failure callback function")
    }).done(function(){
      console.log("in the done function")
  })
}


function changeViewOfActions(){
  $( ".manage_actions option:selected").each(function(){
      if($(this).attr("value")=="actions_all"){
        $(".sortable li").show();
        $( ".sortable" ).sortable('disable');
      }
      if($(this).attr("value")=="action_sort"){
        $( ".sortable" ).sortable('enable');
        $(".sortable li").show();
      }

      if($(this).attr("value")=="act_status"){
        $(".sortable .action_complete").show();
        $(".sortable .action_incomplete").hide();
        $( ".sortable" ).sortable('disable');
      }
      if($(this).attr("value")=="pri_1"){
        $(".sortable .action_1").show();
        $(".sortable .action_2").hide();
        $(".sortable .action_3").hide();
        $(".sortable .action_4").hide();
        $(".sortable .action_5").hide();
        $( ".sortable" ).sortable('disable');
      }
      if($(this).attr("value")=="pri_1-2"){
        $(".sortable .action_1").show();
        $(".sortable .action_2").show();
        $(".sortable .action_3").hide();
        $(".sortable .action_4").hide();
        $(".sortable .action_5").hide();
        $( ".sortable" ).sortable('disable');
      }
      if($(this).attr("value")=="pri_1-3"){
        $(".sortable .action_1").show();
        $(".sortable .action_2").show();
        $(".sortable .action_3").show();
        $(".sortable .action_4").hide();
        $(".sortable .action_5").hide();
        $( ".sortable" ).sortable('disable');
      }
      if($(this).attr("value")=="pri_1-4"){
        $(".sortable .action_1").show();
        $(".sortable .action_2").show();
        $(".sortable .action_3").show();
        $(".sortable .action_4").show();
        $(".sortable .action_5").hide();
        $( ".sortable" ).sortable('disable');
      }
      if($(this).attr("value")=="pri_1-5"){
        $(".sortable").show();
        $( ".sortable" ).sortable('disable');
      }
  });
}
