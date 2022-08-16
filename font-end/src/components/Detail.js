import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const ProductsDetail = () => {
    const {id} = useParams();
    const [productDetail, setProductDetail] = useState([]);

    useEffect(()=>{
        async function fetData() {
            const data = await axios.get("http://localhost:3001/products/" + id)
            setProductDetail(data.data)
        }
        fetData()
    },[])
    return (
        <div>
            <h1>Product Detail </h1>
            <h3>Product Name: {productDetail.name} </h3>
            <h3>Product Price: {productDetail.price} VND </h3>
            <h3>Product Stock: {productDetail.stock} </h3>
            <hr/>
            <strong>Description</strong>
            <p>{productDetail.description}</p>

        </div>
    );
};
export default ProductsDetail;