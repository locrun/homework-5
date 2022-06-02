const toggleBtn = document.querySelector(".toggle");
const content = document.querySelector(".content");
const images = document.querySelector("button img");

let cookiesTheme = document.cookie.split("=")[1];
if (!document.cookie) {
  document.cookie = "theme=light";
}
if (cookiesTheme === "dark") {
  content.className = "content dark";
  images.src = "./images/sun.svg";
}
toggleBtn.addEventListener("click", function () {
  let cookiesTheme = document.cookie.split("=")[1];

  if (cookiesTheme === "light") {
    document.cookie = "theme=dark; expires=Tue, 19 Jan 2038 03:14:07 GMT";
    content.className = "content dark";
    images.src = "./images/sun.svg";
  } else if (cookiesTheme === "dark") {
    document.cookie = "theme=light; expires=Tue, 19 Jan 2038 03:14:07 GMT";
    content.className = "content light";
    images.src = "./images/moon.svg";
  }
});
