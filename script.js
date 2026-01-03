const btnImages = document.getElementById("btnImages");
const btnVideos = document.getElementById("btnVideos");

function showImages() {
  btnImages.classList.add("active");
  btnVideos.classList.remove("active");

  document.querySelectorAll(".media-image").forEach(el => el.style.display = "block");
  document.querySelectorAll(".media-video").forEach(el => el.style.display = "none");
}

function showVideos() {
  btnVideos.classList.add("active");
  btnImages.classList.remove("active");

  document.querySelectorAll(".media-image").forEach(el => el.style.display = "none");
  document.querySelectorAll(".media-video").forEach(el => el.style.display = "block");
}
