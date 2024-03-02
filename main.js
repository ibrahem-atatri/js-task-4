
axios.get('https://dummyjson.com/products').then(response => {

//    console.log(response.data.products);
const products = response.data.products;
let result = '';
for (let i = 0; i < 9; i++) {
    result +=`<div class = "product">
    <div class="img"> <img src=${products[i].thumbnail} alt=" image not found">  </div>
    <h2>${products[i].title}</h2>
    <div class="about-product"> 
    <p>Brand: ${products[i].brand}</p>
    <p>Available: ${products[i].stock}</p>
    </div>
    <div class="about-product"> 
    <p>Price: ${products[i].price}$</p>
    <p>Rating: ${products[i].rating}/5</p>
    </div>

  </div>`
    
}

    document.querySelector(".products .products-contant").innerHTML = result;
})
.catch(function(error){
    alert("error");
});

