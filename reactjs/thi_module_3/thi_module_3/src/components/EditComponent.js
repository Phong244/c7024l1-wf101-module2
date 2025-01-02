import {ErrorMessage, Field, Form, Formik} from "formik";
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {getProductById, updateProduct} from "../service/productService";
import {toast} from "react-toastify";

export default function EditComponent() {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    useEffect(() => {
        const fetProduct = async () => {
            let product = await getProductById(id);
            setProduct(product);
        }
        fetProduct();
    }, [id])

    const navigate = useNavigate();
    const handleSubmit = async (value) => {
        await updateProduct(id, value);
        toast.success("Chỉnh sửa  thành công");
        navigate('/home');
    }

    if (product == null) {
        return "";
    }
    return (
        <>
            <Formik initialValues={product} onSubmit={handleSubmit}>
                <Form>
                    <div>
                        <label>Tên:</label>
                        <Field type='text' name='title'/>
                        <ErrorMessage name='title' style={{color: 'red'}} component='div'/>
                    </div>
                    <div>
                        <label>Giá:</label>
                        <Field type='number' name='price'/>
                        <ErrorMessage name='price' style={{color: 'red'}} component='div'/>
                    </div>
                    <div>
                        <label>Mô tả:</label>
                        <Field type='text' name='description'/>
                        <ErrorMessage name='description' style={{color: 'red'}} component='div'/>
                    </div>
                    <div>
                        <button type='submit'>Sửa</button>
                        <button type='button' onClick={() => navigate('/home')}>Trở lại</button>
                    </div>
                </Form>
            </Formik>
        </>
    );
}