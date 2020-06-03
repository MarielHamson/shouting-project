$(document).ready(function() {
  $("#form1").submit(function(event){
    const input=$("input#sentence").val().toUpperCase();
    $("#words").text(input+""+"!!");

  $(".response").show();

  event.preventDefault();
  })
});