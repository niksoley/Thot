$(document).ready(function() {
  $("input[type='radio']").on('change', function() {
    var selectedValue = $("input[name='layout']:checked").val();
    if (selectedValue) {
      $("#assunto").val(selectedValue);
    }
  });
});

$("#coringaBack").on("click", function() {
  $("#layout5").trigger("click");
});