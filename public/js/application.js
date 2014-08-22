$(document).ready(function(){


  // 2nd .change allows initial rendering of page to invokes this method and NOT wait for the first change
  $('.manage_actions').change( changeViewOfActions ).change();
  $('.bottom_saver').on( "click", saveButtonsTopAndBottom  )
  $('.top_saver').on( "click", saveButtonsTopAndBottom  )

});

// invoking sortable first so that .change() and sortable(enable/disable) doesn't cause a no method error
$('.sortable').sortable({
  placeholder: "ui-state-highlight",
  revert: true,
  update: dragAndSortActionItems
}).disableSelection();

function saveButtonsTopAndBottom (event) {
  event.preventDefault();
  console.log("in the saveButtonsTopAndBottom function")
// debugger
  var data = $(".form_new_action").serializeArray();
  if($(this).hasClass("bottom_saver")){
    data.push({name: "submit_type", value: "bottom_saver"});
  } else if($(this).hasClass("top_saver")) {
    data.push({name: "submit_type", value: "top_saver"});
  }

  $.ajax({
    type: "POST",
    url: $(this).attr("href"),
    data: $.param(data),
    // data: $(".form_new_action").serialize()
  }).success(function(data){
    console.log("in the 'success' saveButtonsTopAndBottom  fucntion");
    console.log("The action statement is: '" + data.action_statement + "'  on action.id: '" + data.id + "'  on action.step: '" + data.step);
// debugger
    $(".form_new_action").trigger("reset");

    // DO THE APPEND STUFF, SEE:
    // https://github.com/mule-deer-2014/ph2-p8-javascript-dynamic-elements-and-events-challenge/blob/HeTheBranDonCarlBerg/source/dynamic-todos/app/views/index.erb
    // https://github.com/mule-deer-2014/ph2-p8-javascript-dynamic-elements-and-events-challenge/blob/HeTheBranDonCarlBerg/source/dynamic-todos/public/js/application.js

  }).error(function(){
    console.log("in the 'failure' saveButtonsTopAndBottom  callback function")
  }).done(function(){
    console.log("in the 'done' saveButtonsTopAndBottom  function")
  })
}

function dragAndSortActionItems ( event, ui ) {
  console.log("in the sortable function")

  $.ajax({
    type: "PUT",
    url: '/paps',
    data: $(this).sortable('serialize')
  }).success(function(data){
    console.log("in the 'success' dragAndSortActionItems fucntion")
    console.log(data.action_id)
  }).error(function(){
      console.log("in the 'failure' dragAndSortActionItems callback function")
    }).done(function(){
      console.log("in the 'done' dragAndSortActionItems function")
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
