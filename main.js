window.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".toggle");
  const content = document.querySelector(".content");
  const images = document.querySelector("button img");
  const theme = localStorage.getItem("theme");

  if (theme === null) {
    localStorage.setItem("theme", "light");
    content.className = "content light";
  }
  if (theme === "dark") {
    content.className = "content dark";
    images.src = "./images/sun.svg";
  }

  toggleBtn.addEventListener("click", function () {
    const theme = localStorage.getItem("theme");

    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      content.className = "content dark";
      images.src = "./images/sun.svg";
    } else if (theme === "dark") {
      localStorage.setItem("theme", "light");
      content.className = "content light";
      images.src = "./images/moon.svg";
    }
  });
});
