import { useState } from 'react'
import react from 'react'
import logo from './logo.svg'
import './App.css'
import Box from './component/box'

const Show = () =>{
  return<div>abcd</div>
}

function App(){
  const [count,setCount] = useState(10);
  const [color, setName] = useState("green");
  const [boolean, setboolean] = useState(false);
  const [myStatus, setMystatus] = useState(false);
  const [product, setProduct] = useState([{name:"sp a", id:1},{name: "sp b", id:2}]);

  // const change= () =>{
  //   console.log("Đã thêm vào giỏ hàng !");
  //   setCount(11);
  // }
  // const changeStatus = () =>{
  //   setMystatus(true);
  // }

  // xoas product
  const remove= (id)=>{
    console.log(id);
    const newProduct = product.filter(item => item.id !== id); //thực hiện xóa
    setProduct(newProduct); // lưu trữ lại mảng sau khi xóa
    console.log(newProduct);
  }

  return <div>
    Number : {count} <br />
    String : <Box color={color} /> <br />
    Boolean : {boolean ? "Đã có ny" : "Chưa có ny"}<br />
    {/* Array : {product.map(item => item.name) } <br/> */}

    Products: {myStatus && <div>
      Array : {product.map(item => <div>{item.name}
       <button onClick={()=> remove(item.id)}>delete</button> </div>  ) }
    </div> }

    <Show />

    <button onClick={()=> setCount(count+1)}>Click me</button>
    <button onClick={() => setMystatus(!myStatus)}>ChangeStatus</button>

  </div>
}


export default App
