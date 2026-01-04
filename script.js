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
 document
        .getElementById("bookingForm")
        .addEventListener("submit", function (e) {
          e.preventDefault();

          let name = document.getElementById("name").value;
          let email = document.getElementById("email").value;
           let notes = document.getElementById("notes").value;

          let message = `مرحبا عبدالرحمن,%0Aلدي طلب حجز:%0A- الاسم: ${name}%0A- البريد: ${email}%0A- ملاحظات: ${notes}`;

          // الرقم الذي وضعته: 0128467955
          let whatsappURL = `https://wa.me/249995255549?text=${message}`;
          window.open(whatsappURL, "_blank");

          this.reset();
        });