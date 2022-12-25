import logo from './logo.svg';
import './App.css';
import { Component, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Card } from './Card';
import { Cart } from './Cart';

function App() {
  const products = [
    {
      id: 1,
      title: "Apple",
      price: 90000,
      Rating: "4.8",
      imageUrl: "https://www.reliancedigital.in/medias/Apple-iPhone-14-Pro-Max-Mobile-Phone-493177798-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMzk2N3xpbWFnZS9qcGVnfGltYWdlcy9oZDQvaDAzLzk4OTA3MjgyNDczMjYuanBnfGM1ZDU5NmEyOTUzZmZkMWViODBhZDQzODdjM2E3ZmEzOWZmYzA3NzliNDNhNDgxZGE4NTk5YzY5NDIyZmExYWE",
    },
    {
      id: 2,
      title: "Noise Watch",
      price: 13000,
      Rating: "4.0",
      imageUrl: "https://i0.wp.com/onmartindia.com/wp-content/uploads/2022/01/noise-pulse-black-2.jpg?fit=1500%2C1500&ssl=1",
    },
    {
      id: 3,
      title: "Mobile Case",
      price: 2000,
      Rating: "3.5",
      imageUrl: "https://phonecovers.co.in/wp-content/uploads/2021/01/vjhgj-450x450.jpg",
    },
    {
      id: 4,
      title: "Dell",
      price: 60000,
      Rating: "3.8",
      imageUrl: "https://5.imimg.com/data5/SELLER/Default/2021/9/HF/YJ/EU/673268/dell-vostro-3500-laptop-500x500.jpg",
    },
    {
      id: 5,
      title: "iPad",
      price: 25000,
      Rating: "3.0",
      imageUrl: "https://fdn.gsmarena.com/imgroot/news/20/09/new-ipads-announced/-1200/gsmarena_008.jpg",
    },
    {
      id: 6,
      title: "Android",
      price: 16000,
      Rating: "4.0",
      imageUrl: "https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/08/08113628/cellphone-device-electronics-699122.jpg",
    }
  ];

  // cart is mutated one so it's set in useState
  const [cartList, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  // make addToCart function
  let addToCart = (product) => {
    setCart([...cartList, product]);
    setTotal(total + product.price);
  }

  // removeCart button function
  let removeCart = (product) => {
    let itemIndex = cartList.findIndex(item => product.id === item.id);
    cartList.splice(itemIndex, 1)
    setCart([...cartList])
    setTotal(total - product.price)
  }

  return (
    <div className="container">
      <div class="head">
        <h1 class="title"> Shop in style </h1>
        <h4 class="sub-title">(  All your favorites upto 50% off.🎁 )</h4>
      </div>
      <div className="row mt-4">
        <div className="col-lg-9">
          <div className="row">
            {products.map((products) => {
              return <Card product={products} addToCart={addToCart} cartList={cartList} />
            })}
          </div>
        </div>

        {/* cart Items column */}

        <div className="col-lg-3 colcolor" >
          <h3>Your's Cart</h3>
          <Cart cartList={cartList} removeCart={removeCart} />
          <h2 class="sub-card">Total Price = {total} </h2>
        </div>
      </div>
    </div>

  );
}

export default App;
