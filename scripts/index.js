

async function getProduct() {

    try {
      let res = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian");
      let data = await res.json()
      
      appendproduct(data)

     // console.log("data:",data)
    }
    catch(error) {
      console.log("err:" ,error);
    }
  }
  getProduct()

  let cartData = JSON.parse(localStorage.getItem("cartData")) || [];

  function appendproduct(data) {
    // console.log(data.meals);
    localStorage.setItem("dataInfo",JSON.stringify(data.meals))
    // console.log("data:",data.meals);
    //console.log("data:",data);
    let data2 = data.meals
    let menu = document.getElementById("menu");
    //menu.innerHTML= "";
    data2.forEach(function(el) {
      
      let div = document.createElement("div");

      let img = document.createElement("img");
      img.src = el.strMealThumb;

      let itemname = document.createElement("p");
      itemname.innerText = el.strMeal;

      let id = document.createElement("p");
      id.innerText = "price:INR"+ Math.floor(el.idMeal/500)

      let addToCartButton=document.createElement("button");
         addToCartButton.textContent = "Add to Cart"
         addToCartButton.addEventListener("click",function() {
             addToCart(el);
             countOfItems(cartData);
         })

      div.append(img , id , itemname,addToCartButton);

      menu.append(div)

      // local
    });
    //   countOfItems(cartData);
  }

  function addToCart(el) {
    console.log(el)
     cartData.push(el);
     localStorage.setItem("cartData",JSON.stringify(cartData));
     alert("aaded succesfuly");
}
  
function countOfItems(cartData) {
    // JSON.parse(localStorage.getItem("cartData"));
    // console.log(cartData.length)
    document.getElementById("count").textContent = cartData.length;

}
countOfItems(cartData);