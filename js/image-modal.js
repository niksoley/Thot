// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("imgModal");

function reply_click(clicked_id) {
  modal.style.display = "block";
  modalImg.src = document.getElementById(clicked_id).src;
}


// When the user clicks on modalImg, close the modal
modalImg.onclick = function() {
  modal.style.display = "none";
}