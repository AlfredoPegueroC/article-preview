const btn = document.querySelectorAll(".btn");
const modal = document.querySelector(".modal");


btn.forEach(item => {
  item.addEventListener("click", e => {
    modal.classList.toggle("active");
  })
})

