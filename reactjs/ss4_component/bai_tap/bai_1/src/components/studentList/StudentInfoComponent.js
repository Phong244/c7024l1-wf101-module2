import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

//Các thông tin của sinh viên bao gồm: ID, Name, Age, Address
const students = [
    {
        id: 1,
        name: 'Nguyen Van A',
        age: 20,
        address: 'Ha Noi'
    },
    {
        id: 2,
        name: 'Tran Van B',
        age: 21,
        address: 'Hai Phong'
    },
    {
        id: 3,
        name: 'Le Van C',
        age: 22,
        address: 'Hai Duong'
    },
    {
        id: 4,
        name: 'Pham Van D',
        age: 23,
        address: 'Bac Ninh'
    },
    {
        id: 5,
        name: 'Hoang Van E',
        age: 24,
        address: 'Hai Duong'
    }
]
class ListComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>Student List</h1>
                <table className={'table table-light'}>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                    </thead>
                    <tbody>
                    {students.map(student => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.address}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ListComponent;