



let cartData = JSON.parse(localStorage.getItem("cartData"));
console.log(cartData);

function appendData() {
    document.getElementById("cart").innerHTML = null;
cartData.map(function (data,index) {
    let div = document.createElement("div");

    let image = document.createElement("img");
    image.setAttribute("src", data.strMealThumb);

    let itemName = document.createElement("p");
    itemName.innerText = data.strMeal;

    let price = document.createElement("p");
    price.innerText = Math.floor((data.idMeal / 200));
    
    let remove = document.createElement("button")
    remove.textContent = "remove";
    remove.addEventListener("click", function() {
        removeTask(index);
    })
    
    div.append(image,itemName,price,remove);

    document.getElementById("cart").append(div);

}) 
    totalPrice();
}

appendData();
 
function totalPrice() {
let total = cartData.reduce(function (ac, cv) {
    return ac + Math.floor(cv.idMeal/200);
},0)
document.getElementById("total").textContent = `₹ ${total}`
}


function removeTask(index) {
    cartData.splice(index, 1);
    console.log(cartData);
    localStorage.setItem("cartData", JSON.stringify(cartData));
    appendData();
}


document.getElementById("checkout").addEventListener("click", function () {
    window.location.href = "checkout.html"
})

