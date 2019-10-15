function makeItVibrate(event) {
  let squares = document.querySelectorAll("[title]");

  squares.forEach(element => {
    element.classList.add("vibrate");
    let duration = Math.random() * 0.2+0.3;
    let direction = ["shakeX", "shakeY"][Math.floor(Math.random() * 2)];
    element.style.setProperty("--duration", `${duration}s`);
    element.style.setProperty("--direction", `${direction}`);
    setTimeout(function() {
      element.classList.remove("vibrate");
      element.style.removeProperty("--duration")
      element.style.removeProperty("--direction")
    }, 4000);
  });
}

document.getElementById("vibrate").addEventListener("click", makeItVibrate);
