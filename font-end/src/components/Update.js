import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {nanoid} from "nanoid";

const Update = () => {
    const navigate=useNavigate()
    const {id} = useParams();
    const[name,setName]=useState('')
    const[price,setPrice]=useState('')
    const[stock,setStock]=useState('')
    const[description,setDescription]=useState('')

    const [productDetail, setProductDetail] = useState([]);

    useEffect(()=>{
        async function fetData() {
            const res = await axios.get("http://localhost:3001/products/" + id)
            setProductDetail(res.data)
        }
        fetData()
    },[id])

    const handleUpdate=async ()=>{
            await axios.put(`http://localhost:3001/products/${id}`,{
                id:nanoid(),
                name:name,
                price:price,
                stock:stock,
                description:description
            })
            navigate(`/`)
    }

    const handleExit=()=>{

    }
    return (
        <div className="App">


            <h1>Cập nhật  sản phẩm</h1>
            <br/>
            <br/>

            <p>Tên sản phẩm</p>
            <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"
                defaultValue={productDetail.name}  onChange={(e)=>setName(e.target.value)} ></input>
            <br/>
            <br/>

            <div>
                <div>
                    <p>Giá(đ)</p>
                    <div className="input-group">
                        <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"
                               defaultValue={productDetail.price}   onChange={(e)=>setPrice(e.target.value)} ></input>
                    </div>
                </div>

                <div>
                    <p>Tồn kho</p>
                    <div className="input-group">
                        <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"
                               defaultValue={productDetail.stock}  onChange={(e)=>setStock(e.target.value)}  ></input>
                    </div>
                </div>



                <div>
                    <p>Mo ta</p>
                    <textarea className="form-control" placeholder="mo ta san pham"
                              defaultValue={productDetail.description}     onChange={(e)=>setDescription(e.target.value)}  />
                </div>

                <button type="button" className="btn btn-info" onClick={handleUpdate}>Cap nhat</button>


                    <button type="button" className="btn btn-secondary" onClick={handleExit}>Hủy</button>

            </div>


        </div>
    );
};

export default Update;