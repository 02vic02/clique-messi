const heart = document.getElementById("heart");
const envelope = document.querySelector(".envelope");

heart.addEventListener("click", () => {
  envelope.classList.toggle("open");
});
