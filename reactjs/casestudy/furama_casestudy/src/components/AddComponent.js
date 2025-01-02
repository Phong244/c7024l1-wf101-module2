import React, {useCallback, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {getAllType} from "../service/typeService";
import {addNewRoom} from "../service/roomService";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddComponent() {
    const [room] = useState(
        {
            name: "",
            size: "",
            price: "",
            maxGuest: "",
            image: "",
            type: ''
        })
    const [typeList, setTypeList] = useState([]);

    useEffect(() => {
            const fetchData = async () => {
                setTypeList(await getAllType());
            }
            fetchData();
    }, []);

    const navigate = useNavigate()

    const handleSubmit = useCallback(
        async (value) => {
            const { type, ...rest } = value;
            const newType = typeList.find(t => t.id === parseInt(type));

            const room = {
                ...rest,
                type: newType
            }
            console.log('room', room);
            await addNewRoom(room);
            toast.success("Add room successfully!");
            navigate("/home");
        },
        [typeList, navigate],
    );

    const handleValidate = Yup.object({
        name: Yup.string().required("Name is required").matches(/^[A-Z][a-z]* [A-Z][a-z]*$/, "Name is invalid"),
        size: Yup.number().required("Size is required"),
        price: Yup.string().required("Price is required").matches(/^\d+\$\/day$/, "Price valid is xxx$/day"),
        maxGuest: Yup.number().required("Max guest is required").min(1, "Min is 1"),
        image: Yup.string().required("Image is required"),
        type: Yup.number().required("Type is required"),
    })

    console.log('typeList:', typeList);

    return (
        <div>
            <Formik initialValues={room} onSubmit={handleSubmit} validationSchema={handleValidate}>
                <Form>
                    <div className="form-group">
                        <label>Name</label>
                        <Field type="text" className="form-control" name="name"/>
                        <ErrorMessage name="name" component="div" className="alert alert-danger"/>
                    </div>
                    <div className="form-group">
                        <label>Size</label>
                        <Field type="number" className="form-control" name="size"/>
                        <ErrorMessage name="size" component="div" className="alert alert-danger"/>
                    </div>
                    <div className="form-group">
                        <label>Price</label>
                        <Field type="text" className="form-control" name="price"/>
                        <ErrorMessage name="price" component="div" className="alert alert-danger"/>
                    </div>
                    <div className="form-group">
                        <label>Max Guest</label>
                        <Field type="number" className="form-control" name="maxGuest"/>
                        <ErrorMessage name="maxGuest" component="div" className="alert alert-danger"/>
                    </div>
                    <div className="form-group">
                        <label>Image</label>
                        <Field type="text" className="form-control" name="image"/>
                        <ErrorMessage name="image" component="div" className="alert alert-danger"/>
                    </div>
                    <div className="form-group">
                        <label>Type</label>
                        <Field as="select" className="form-control" name="type" type="number">
                            <option value={''}>Select type</option>
                            {typeList.map((type, i) => {
                                return <option key={i} value={type.id}>{type.name}</option>
                            })}
                        </Field>
                        <ErrorMessage name="type" component="div" className="alert alert-danger"/>
                    </div>
                    <button type={'submit'} className="btn btn-primary">Add</button>
                </Form>
            </Formik>
        </div>
    );
}

export default AddComponent;