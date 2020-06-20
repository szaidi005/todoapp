//Check Off Specific Todos By Clicking

$(document).on("click", "li", function () {
  $(this).toggleClass("completed");
});

//Use X Icon to Delete Respective li
$(document).on("click", "span", function (event) {
  $(this)
    .parent()
    .fadeOut(1000, function () {
      $(this).remove();
    });
  event.stopPropagation();
});

//Add New Todo Via Pressing Enter After Completing Input
$("input[type = 'text']").on("keypress", function (e) {
  if (e.which === 13) {
    //grabbing new todo text from input
    var todoText = $(this).val();
    //create a new li and add to ul
    $("ul").append(
      "<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + " </li>"
    );
    //clear input
    $(this).val("");
  }
});

//Fade Effect For Pencil Icon
$(".fa-edit").on("click", function () {
  $("input").fadeToggle(500);
});
