const read = () => {
    return JSON.parse(localStorage.getItem("data"));
}

const write = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
}

const minus = (id) => {
    data = read()
    console.log(data)
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


const render =()=>{
  cart=read().cart
  flag=0
  document.querySelector(".container").innerHTML=cart.map((ele)=>{
    if(ele.quantity!=0)
    return(
      `
      <div class="cart-card">
            <div class="card-info">
            <div>
            <div class="card-img">
                <img src="${ele.img}" alt="">
            </div>
            <div>
                <h4>${ele.title}</h4>
                <h5>Rs. ${ele.price}</h5>
            </div>
        </div>
                <div>
                    <h4>Total price</h4>
                    <h5>Rs. ${ele.price*ele.quantity}</h5>
                </div>
            </div>
            <div class="number-group">
                <span onclick="plus(${ele.id})" >+</span><span>${ele.quantity}</span><span onclick="minus(${ele.id})">-</span>
            </div>
        </div>
    `
            )
    }).join('')
    
        
}
render()