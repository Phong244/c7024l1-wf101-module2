import React, {useState} from "react";
import {addNewProduct} from "../service/productService";
import {useNavigate} from 'react-router-dom';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddComponent() {
    const [product] = useState({
        title: '',
        price: '',
        description: '',
    });

    const navigate = useNavigate();

    const handleSubmit = async (value) => {
        await addNewProduct(value);
        toast.success("Thêm mới thành công");
        navigate('/home');
    };


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
                        <button type='submit'>Thêm</button>
                        <button type='button' onClick={() => navigate('/home')}>Trở lại</button>
                    </div>
                </Form>
            </Formik>
        </>
    );
}

export default AddComponent;