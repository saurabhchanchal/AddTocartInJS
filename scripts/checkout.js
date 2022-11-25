 
let d = JSON.parse(localStorage.getItem("cartData"));
d = [];
localStorage.setItem("cartData", JSON.stringify(d));

document.getElementById("place-order").addEventListener("click", function () {
    document.getElementById("order-message").textContent = "Your order is succesfuly placed"
})

