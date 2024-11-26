import React, {useState} from "react";
import {addNewStudent} from "../service/studentService";

function AddStudent({handleIsLoading}) {
    const [student, setStudent] = useState({});
    const handleOnChange = (event) => {
        setStudent((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }
    const handleSave = () => {
        addNewStudent(student);
        handleIsLoading();
    }
    return (
        <>
            <h2>Add Student</h2>
            <form>
                ID:
                <input name={'id'} onChange={(event) => {
                    handleOnChange(event)
                }}/>
                Name:
                <input name={'name'} onChange={(event) => {
                    handleOnChange(event)
                }}/>
                <button onClick={handleSave} type="button">Save</button>
            </form>
        </>
    );
}

export default React.memo(AddStudent);