const hamburger = document.querySelector(".hambueger__menu");
const listMenu = document.querySelector(".header__list");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    listMenu.classList.toggle("active");
})

document.querySelectorAll(".header__list").forEach(n => n.addEventListener("click",() => {
    hamburger.classList.remove("active");
    listMenu.classList.remove("active");
}))