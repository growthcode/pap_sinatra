$(document).ready(function() {



$(function() {
    $( "#sortable" ).sortable({
      update: function( event, ui ) {
        var counter = 1;
        console.log($(this));
        console.log($(this).find(".hook--order").length)
        // debugger
        $(this).find(".hook--order").each(function(){
        $(this).val(counter);
        counter++;
      })
    }
  });
});
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
  // $( "ol li" ).each(function( index ) {
  //   console.log( (index + 1) + ": " + $( this ).text() );
  // });

  // prints out action_steps order in console before any sorting takes place
  // $(".each_pap").each(function(){
  //   console.log("li")
  // })


});








