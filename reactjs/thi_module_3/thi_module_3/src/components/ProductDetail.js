import React, {useEffect, useState} from "react";
import {useParams,useNavigate} from "react-router-dom"
import {getProductById} from "../service/productService";

function ProductDetail() {
    const [product, setProduct] = useState({id: "", name: ""})

    const {id} = useParams();// useLocal() => truyền một đối tượng
    const navigate = useNavigate();
    useEffect(()=>{
        const fetData = async  ()=>{
            let p = await getProductById(id)
            setProduct(p)
        }
        fetData();
    },[])
    const handleBack = () => {
        navigate('/home')
    };

    return (
        <div>
            <h1>Product Detail</h1>
            <p><strong>Name:</strong> {product.title}</p>
            <p><strong>Price:</strong> {product.price}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <button onClick={handleBack}>Trở lại</button>
        </div>
    );
}

export default ProductDetail;