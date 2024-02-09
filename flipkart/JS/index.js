let data = {
  cart: [
    {
      id: "101",
      img: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D",
      title: "Redmi Note 9 pro",
      description:
        "Flipkart Plus. A world of limitless possibilities awaits you - Flipkart Plus was kickstar",
      quantity: 0,
      price: 10000
    },
    {
      id: "102",
      img: "https://images.unsplash.com/photo-1570993492881-25240ce854f4?q=80&w=2890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Folding Table",
      description:
        "Flipkart Plus. A world of limitless possibilities awaits you - Flipkart Plus was kickstar",
      quantity: 0,
      price:1499
    },
    {
      id: "103",
      img: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "DSLR Camera",
      description:
        "Flipkart Plus. A world of limitless possibilities awaits you - Flipkart Plus was kickstar",
      quantity: 0,
      price:544899
    },
    {
      id: "104",
      img: "https://plus.unsplash.com/premium_photo-1681738777666-21c0e82bbe51?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlY3RyaWMlMjBndWl0YXJ8ZW58MHx8MHx8fDA%3D",
      title: "Electric Guitar",
      description:
        "Flipkart Plus. A world of limitless possibilities awaits you - Flipkart Plus was kickstar",
      quantity: 0,
      price: 12999
    },
  ],
};

const container = document.getElementById("container");

const read = () => {
  return JSON.parse(localStorage.getItem("data"));
}

const write = (data) => {
  localStorage.setItem("data", JSON.stringify(data));
}



data = read()
console.log(data)
if (data.cart.length === 0)
localStorage.setItem("data", JSON.stringify(data));




const minus = (id) => {
  data = read()
  console.log(data)
  let myitem

  data.cart.map((item, index) => {
    if (item.id == id) {
      if (data.cart[index].quantity > 0)
        data.cart[index].quantity--
    }
  })
  write(data)
  render()
};

const plus = (id) => {
  data = read()
  data.cart.map((item, index) => {
    if (item.id == id) {
      data.cart[index].quantity++
      console.log(data)
    }
  })
  write(data)
  console.log(localStorage)
  render()

}

cart = read().cart

const render = () => {
  cart = read().cart
  document.querySelector("#product-container").innerHTML = cart.map((item) => {
    if(item.quantity===0)
    return (
      `
      <div class="product-card" id="${item.id}">
            <img src="${item.img}"
                alt="${item.title}">
            <div class="card-info">
                <h3>${item.title}</h3>
                <h5>${item.description}</h5>
                <h4>Price : <span>Rs. ${item.price}</span></h4>
                <button onclick="plus(${item.id})">Add to Cart</button>
            </div>
        </div>
    `
    )
    else
    return (
      `
      <div class="product-card" id="${item.id}">
            <img src="${item.img}"
                alt="${item.title}">
            <div class="card-info">
                <h3>${item.title}</h3>
                <h5>${item.description}</h5>
                <h4>Price : <span>Rs. ${item.price}</span></h4>
                <h6>Quantity:</h6>
                <div class="number-group">
                    <span onclick="plus(${item.id})">+</span><span>${item.quantity}</span><span onclick="minus(${item.id})" >-</span>
                </div>
            </div>
        </div>
    `
    )
  }).join('')
}
render()

