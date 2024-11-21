import React, {useEffect, useState} from "react";
import {getAllStudent} from "../service/studentService";
import AddStudent from "./AddStudent";


const ListStudent = () => {
    const [studentList, setStudentList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setStudentList(() => (
            [
                ...getAllStudent()
            ]
        ));
    }, [isLoading]);

    const handleIsLoading = () => {
        setIsLoading((prevState) => !prevState)
    }


    return (
        <>
            <AddStudent handleIsLoading={handleIsLoading}/>
            <table className={'table table-dark'}>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {studentList.map((customer, i) => (
                    <tr key={customer.id}>
                        <td>{i + 1}</td>
                        <td>{customer.id}</td>
                        <td>{customer.name}</td>
                        <td>
                            <button className={'btn btn-sm btn-danger'}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}
export default ListStudent;