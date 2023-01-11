const btnImages = document.getElementById("btnImages");
const btnVideos = document.getElementById("btnVideos");

function showImages() {
  btnImages.classList.add("active");
  btnVideos.classList.remove("active");

  document
    .querySelectorAll(".media-image")
    .forEach((el) => (el.style.display = "block"));
  document
    .querySelectorAll(".media-video")
    .forEach((el) => (el.style.display = "none"));
}

function showVideos() {
  btnVideos.classList.add("active");
  btnImages.classList.remove("active");

  document
    .querySelectorAll(".media-image")
    .forEach((el) => (el.style.display = "none"));
  document
    .querySelectorAll(".media-video")
    .forEach((el) => (el.style.display = "block"));
}
document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let notes = document.getElementById("notes").value;

  let subject = "طلب حجز من موقع شوارق الأمل";

  let message =
    `مرحباً شوارق الأمل\n` +
    `لدي طلب حجز:\n` +
    `- الاسم: ${name}\n` +
    `- البريد: ${email}\n` +
    `- ملاحظات: ${notes}`;

  let mailURL =
    `mailto:shawariqalamal@gmail.com` +
    `?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(message)}`;

  window.open(mailURL, "_self");

  this.reset();
});

function toggleMore(btn) {
  const moreText = btn.nextElementSibling;

  if (moreText.style.display === "none" || moreText.style.display === "") {
    moreText.style.display = "block";
    btn.textContent = "إخفاء";
  } else {
    moreText.style.display = "none";
    btn.textContent = "اقرأ المزيد";
  }
}

 
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = document.querySelector(".close");

  document.querySelectorAll(".gallery-image").forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
    });
  });

  closeBtn.onclick = () => modal.style.display = "none";

  modal.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };


  