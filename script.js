
var search = document.querySelector(".search");
var btn = document.querySelector(".btn");
var input = document.querySelector(".search");

btn.addEventListener("click", () => {
    search.classList.toggle("active");
    input.focus()
})
