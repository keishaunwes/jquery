$(document).ready(function() {
colors = ["pink","orange","blue","green",]
random = Math.floor(Math.random())*colors.length;
  $("body").append("<div></div>");

  let $btnSubmit = $("#btnSubmit");
  let $text = $(".text");

  $btnSubmit = $btnSubmit.prop("disabled", true);
  $(".text").keyup(function() {
    if ($text.val() !== "") {
      $btnSubmit = $btnSubmit.prop("disabled", false);
    }
  });

  $btnSubmit.click(e => {
    e.preventDefault();
    let newli = $("<li></li>");
    newli.text($text.val());
    $("div").append(newli);

    newli.click(function() {
    newli.css({
        "background-color": colors[random],
            "border-radius":"50px 20px"
    
    })
    
    newli.dblclick(function() {
        newli.remove()
        });
      });
    });
  });


// function colorchange(){
// document.overlay = GPolyline.fromEncoded({
//   color: "#0000FF",
//   weight: 10,
//   points: encoded_points,
//   zoomFactor: 32,
//   levels: encoded_levels,
//   numLevels: 4
// )}