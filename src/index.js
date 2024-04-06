const progress = document.querySelector(".progress");

progress.addEventListener("click", () => {
  const value = Math.floor(Math.random() * 100);
  progress.style.setProperty("--progress", `${value}%`);
});
