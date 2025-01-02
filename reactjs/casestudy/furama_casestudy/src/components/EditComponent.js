import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {getRoomByID, updateRoom} from "../service/roomService";
import {getAllType} from "../service/typeService";
import {toast} from "react-toastify";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";

function EditComponent() {
    const {id} = useParams();
    const [typeList, setTypeList] = useState([]);
    const [room, setRoom] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const type = await getAllType();
            setTypeList(type);
        }
        fetchData()
    })
    useEffect(() => {
        const fetchRoom = async () => {
            let room = await getRoomByID(id);
            room = {
                ...room, type: JSON.stringify(room.type)
            }
            setRoom(room);
        }
        fetchRoom()
    }, []);
    const navigate = useNavigate();
    const handleSubmitEdit = async (value) => {
        const newRoom = {
            ...value, type: JSON.parse(value.type)
        }
        await updateRoom(newRoom);
        toast.success("Update room success");
        navigate("/home");
    }
    if (room == null) {
        return "";
    }
    const handleValidate = Yup.object({
        name: Yup.string().required("Name is required").matches(/^[A-Z][a-z]* [A-Z][a-z]*$/, "Name is invalid"),
        size: Yup.number().required("Size is required"),
        price: Yup.string().required("Price is required").matches(/^\d+\$\/day$/, "Price valid is xxx$/day"),
        maxGuest: Yup.number().required("Max guest is required").min(1, "Min is 1"),
        image: Yup.string().required("Image is required"),
        type: Yup.string().required("Type is required"),
    })
    return (<>
            <Formik initialValues={room} onSubmit={handleSubmitEdit} validationSchema={handleValidate}>
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
                        <Field as="select" className="form-control" name="type">
                            {typeList.map((type) => {
                                return <option value={JSON.stringify(type)}>{type.name}</option>
                            })}
                        </Field>
                        <ErrorMessage name="type" component="div" className="alert alert-danger"/>
                    </div>
                    <button type={'submit'} className="btn btn-primary">Save Edit</button>
                </Form>
            </Formik>
        </>);
}

export default EditComponent;