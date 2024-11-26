import React, {useCallback, useEffect, useRef, useState} from "react";
import {getAllStudent, searchByName} from "../service/studentService";
import AddStudent from "./AddStudent";
import DeleteStudent from "./DeleteStudent";

const ListStudent = () => {
    const [studentList, setStudentList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const searchNameRef = useRef();
    const [isShowModal, setIsShowModal] = useState(false);
    const [deleteStudent, setDeleteStudent] = useState({});


    useEffect(() => {
        setStudentList(() => (
            [
                ...getAllStudent()
            ]
        ));
    }, [isLoading]);

    // const handleIsLoading = () => {
    //     setIsLoading((prevState) => !prevState)
    // }

    const handleIsLoading = useCallback(() => {
            setIsLoading((prevState) => !prevState)
        }, [],
    );


    const handleSearch = () => {
        const searchName = searchNameRef.current.value;
        const listSearch = searchByName(searchName);
        setStudentList(() => (
            [
                ...listSearch
            ]
        ));
    }

    const handleShowModal = (student) => {
        setDeleteStudent(() => ({
            ...student
        }))
        setIsShowModal(prevState => !prevState);
    }

    // const handleCloseModal = () => {
    //     setIsShowModal(prevState => !prevState);
    // }

    const handleCloseModal = useCallback(() => {
            setIsShowModal(prevState => !prevState);
        }, [],
    );

    return (
        <>
            <AddStudent handleIsLoading={handleIsLoading}/>
            <form>
                <input ref={searchNameRef} placeholder={'Enter name'}/>
                <button type={'button'} onClick={handleSearch}>Search</button>
            </form>
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
                {studentList.map((student, i) => (
                    <tr key={student.id}>
                        <td>{i + 1}</td>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>
                            <button onClick={() => {
                                handleShowModal(student);
                            }} className={'btn btn-sm btn-danger'}>Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <DeleteStudent handleIsLoading={handleIsLoading} isShowModal={isShowModal} deleteStudent={deleteStudent}
                           handleCloseModal={handleCloseModal}/>
        </>
    );
}
export default ListStudent;