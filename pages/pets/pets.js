const hamburger = document.querySelector(".hambueger__menu");
const listMenu = document.querySelector(".header__list");
const body = document.body;

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    listMenu.classList.toggle("active");
    body.classList.add("disable__scroll");
})

document.querySelectorAll(".header__list").forEach(n => n.addEventListener("click",() => {
    hamburger.classList.remove("active");
    listMenu.classList.remove("active");
    body.classList.remove("disable__scroll");
    body.classList.add("enable__scroll");
}))