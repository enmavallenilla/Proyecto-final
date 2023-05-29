const icon = document.querySelector(".icon__hamburger");
const navmenu = document.querySelector(".nav");

icon.addEventListener("click", () => {
    navmenu.classList.toggle("nav--show");
})
