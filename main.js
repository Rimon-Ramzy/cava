let nav = document.querySelector("nav .links")
let barsIcon = document.querySelector(".bars")
let closeIcon = document.querySelector(".close")

let mainImg = document.getElementById("MainImg");
let smallImg = document.querySelectorAll(".small-img")
let productShop = document.querySelectorAll(".product-shop")


barsIcon.addEventListener("click", () => {
  nav.style.right = "0"
})
closeIcon.addEventListener("click", () => {
  nav.style.right = "-300px"
})

smallImg.forEach(img => {
  img.addEventListener("click", (e) => {
    mainImg.src = e.target.src
  })
})

console.log(productShop);

productShop.forEach(product => {
  console.log(product);
  product.addEventListener("click", () => {
    window.location.href = "sproduct.html";
  })
})