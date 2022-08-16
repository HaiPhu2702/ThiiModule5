import React, {useState} from 'react';
import axios from "axios";
import { nanoid } from 'nanoid'
import {useNavigate} from "react-router-dom";
import "../App.css"


const Add = () => {
   const [name,setName] = useState('')
   const [price,setPrice] = useState('')
   const [stock,setStock] = useState('')
   const [description,setDescription] = useState('')

const navigate=useNavigate()

const handleSubmit=async ()=>{
       await axios.post(`http://localhost:3001/products`,{
           id:nanoid(),
           name: name,
           price:price,
           stock:stock,
           description:description
       }).then(res=>navigate(`/`))

}

    return (
        <div className="App">


            <h1>Thêm sản phẩm</h1>
            <br/>
            <br/>

            <p>Tên sản phẩm</p>
                <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" onChange={(e)=>setName(e.target.value)}></input>
            <br/>
            <br/>

            <div>

                <div className="priceStock">



                <div>
                    <p>Giá(đ)</p>
                    <div className="input-group">
                        <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" onChange={(e)=>setPrice(e.target.value)}></input>
                    </div>
                </div>

                <div>
                    <p>Tồn kho</p>
                    <div className="input-group">
                        <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" onChange={(e)=>setStock(e.target.value)}></input>
                    </div>
                </div>


                </div>

                <div>
                    <p>Mo ta</p>
                    <textarea className="form-control" placeholder="mo ta san pham" onChange={(e)=>setDescription(e.target.value)}/>
                </div>
                <br/>
                <br/>
                <br/>

                 <button type="button" className="btn btn-info" onClick={handleSubmit}>Thêm sản phẩm</button>
                 <button type="button" className="btn btn-secondary">Hủy </button>


            </div>


        </div>
    );
};

export default Add;