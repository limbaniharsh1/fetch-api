import logo from "./logo.svg";
import { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import { ArrowRight,ArrowLeft } from 'react-bootstrap-icons';
import "./App.css";

function App() {
  let [data, setdata] = useState([]);
  let[count,setcount]=useState(10)

  useEffect(() => {
    get();
  }, [count]);

  let get = async () => {
    let req = await fetch(`https://dummyjson.com/products?pages=1&limit=${count}`);
    let res = await req.json();
    setdata(res.products);
    // console.log(res);
  };
  console.log(count)
  return (
    <div className="App" style={{ display: "flex", flexWrap: "wrap" }}>
      {data.map((v, i) => {
        return (
          <Col xs={12} md={4} lg={3} key={i} className="main">
            <div className="m-border">
              <div className="i-box">
                <img src={v.thumbnail} alt={`img${i}`} />
                {/* <div style={{backgroundImage:{images}}}></div> */}
              </div>
              <h2>{v.title}</h2>
              <p>{v.description}</p>
              <h6>rating : {v.rating}</h6>
              <h6>available stock : {v.stock}</h6>
              <h3>Price : ${v.price}</h3>
              <div className="m-btn">
                <button className="buy-btn">buy now</button>
                <button className="cart-btn">add to cart</button>
              </div>
            </div>
          </Col>
        );
      })}
        <button className="ar-left" onClick={()=>setcount(count==5 ? count=5 : count-5)}><ArrowLeft color="white" size='30px'/></button>
        <button className="ar-right" onClick={()=>setcount(5+count)}><ArrowRight color="white" size='30px' /></button>
    </div>
  );
}

export default App;
