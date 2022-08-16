import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import "../App.css"

const Home = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchListProduct = async () => {
            const res = await axios.get('http://localhost:3001/products')
            console.log(res.data)
            setProducts(res.data)

        }
        fetchListProduct()
    }, [products])



    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3001/products/${id}`)
    }

    return (
        <div className="App">

            <div className="navbar">
                <h1>Danh sach san pham</h1>

                <Link to="/add">
                    <button type="button" className="btn btn-info">Thêm sản phẩm</button>
                </Link>

            </div>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tên sản phẩm</th>
                    <th scope="col">Giá(đ)</th>
                    <th scope="col">Tồn kho</th>
                    <th scope="col" cosplan="2"></th>
                </tr>
                </thead>
                <tbody>

                {products.map((product, index) => (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>

                        <Link to={`/detail/${product.id}`}>
                            <td className="name">{product.name}</td>
                        </Link>



                        <td>{product.price}</td>
                        <td>{product.stock}</td>
                        <td>

                            <Link to={`/update/${product.id}`} >
                             <button type="button" className="btn btn-primary" >
                                 Cập nhật
                            </button>
                            </Link>
                            <button type="button" className="btn btn-danger"
                                    onClick={() => handleDelete(product.id)}> Xóa
                            </button>
                        </td>
                    </tr>
                ))}


                </tbody>
            </table>

            <div>

            </div>
        </div>


    );
};

export default Home;