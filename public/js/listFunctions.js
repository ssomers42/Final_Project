
function hideItem() {
$('.item').hide();
}

function toggleNewItemForm() {
if($("#newItemDisplay").is(":visible")){$("#newItemDisplay").fadeOut();}
else{$('#newItemDisplay').fadeIn();}

}

function toggleNewLinkForm() {
var currentURL = window.location.hostname+"/list/{{listName}}";

if($('#newLinkDisplay').is(":visible"))
{
  $('#newLinkDisplay').fadeOut();
}
else
{
  $('#newLinkDisplay').fadeIn();
}
document.newLinkForm.link.value = currentURL;

}

function toggleSettings(){
if($("#remove").is(":visible")){$("#remove").fadeOut();}
else{$("#remove").fadeIn();}
}

function toggleSuggestedItems(){
alert("The milk has gone bad! please buy a new one before due day!");
if($("#suggestedContainer").is(":visible"))
  {
    $("#suggestedContainer").fadeOut();
    $(".suggestedItems").fadeOut();
  }
else
  {
    $("#suggestedContainer").fadeIn();
    $(".suggestedItems").fadeIn();
  }

}

$( document ).ready(function() {

  // $("#newItemForm").submit(function(e) {
  //   e.preventDefault();
  //   alert("The item has been added");
  //   //app.get('/add', add.addItem);
  // });

  $("#newLinkForm").submit(function(e) {
    e.preventDefault();
      /* Get the text field */
    var copyText = document.getElementById("link");

    /* Select the text field */
    copyText.select();

    /* Copy the text inside the text field */
    document.execCommand("Copy");

    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  });

  $("#itemList .item").click(function(e){
    e.preventDefault();
    $(this).remove();
  });
});
