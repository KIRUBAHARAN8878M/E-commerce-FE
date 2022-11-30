import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Cart from './Components/Cart/Cart';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Viewproduct from './Components/Home/Viewproduct';
import { env } from './config';
import Swal from 'sweetalert2';
import Signup from './Components/Auth/Signup/Signup';
import Recovery from './Components/Auth/Recovery/Recovery';
import Activate from './Components/Auth/AccActivate/Activate';
import Update from './Components/Auth/Update/Update';
import Login from './Components/Auth/Login/Login';



function App() {

  //Alert function;
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  const [data, setData] = useState([{}])
  const [isloading, setLoading] = useState(false)

  useEffect(() => {
    LoadData();
  }, []);

  let LoadData = async () => {
    try {
      setLoading(true);
      let req = await axios.get(`${env.api}/Product/User_Products`, {
        headers: {
          authorisation: window.localStorage.getItem("app-token")
        }
      })
      setData(req.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }

  }
  const [cart, setCart] = useState(0);
  const [value, setValues] = useState([]);
  const [total, setTotal] = useState(0);

  const handleIncrement = (ele, idx) => {

    const incre = value.map((obj, index) => {
      if (index === idx) {
        const inc = { ...obj, count: obj.count + 1 }
        return { ...inc }
      } else {
        return { ...obj }
      }
    })
    setValues(incre)
  }
  const handleDecrement = (ele, idx) => {

    const dec = value.map((obj, index) => {
      if (index === idx) {
        const dec = { ...obj, count: obj.count - 1 }
        return { ...dec }
      } else {
        return { ...obj }
      }
    })
    setValues(dec)
  }

  const addToCart = (item) => {
    setCart(cart + 1)
    Toast.fire({ icon: 'success', title: 'Item add your cart' })
    setValues([...value, item])
    setTotal(total + item.price)
  }
  const removeFromCart = (ele) => {
    if (cart > 0) {


      alert("Are you sure want to remove item")
      setCart(cart - 1)
      let index = value.findIndex((obj) => obj._id === ele._id);
      console.log(ele.price)
      value.splice(index, 1);
      setValues([...value]);
      setTotal(total - ele.price);
    }
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Auth */}
          <Route path='/' element={<Login />} />
          <Route path='/Register' element={<Signup />} />
          <Route path='/Activate/:id' element={<Activate />} />
          <Route path='/Recovery' element={<Recovery />} />
          <Route path='/Update/:id/:token' element={<Update />} />

          <Route path="/Home" element={<Home cart={cart} value={value} total={total} handleToCart={addToCart} data={data} isloading={isloading} />} />
          <Route path="/products" element={<Products cart={cart} isloading={isloading} value={value} data={data} handleToCart={addToCart} />} />
          <Route path="/viewproduct/:id" element={<Viewproduct cart={cart} handleToCart={addToCart} isloading={isloading} />} />
          <Route path="/cart" element={<Cart value={value} cart={cart} total={total} setTotal={setTotal} handleToRemove={removeFromCart} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
