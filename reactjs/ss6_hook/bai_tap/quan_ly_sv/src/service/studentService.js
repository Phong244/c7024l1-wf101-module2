// kết nối API

const studentList = [
    {
        id: 1,
        name:"Ph1"
    },
    {
        id: 2,
        name:"Ph2"
    },
    {
        id: 3,
        name:"Ph3"
    }
]

export function getAllStudent() {
// kết nối API của back-end
    return studentList;
}

export function addNewStudent(student) {
// kết nối API để thêm mới
    studentList.push(student);
}

export function deleteStudentById(id) {
    for (let i = 0; i < studentList.length; i++) {
        if (studentList[i].id == id) {
            studentList.splice(i, 1);
            break;
        }
    }
}

export function searchByName(name) {
    return studentList.filter(student => student.name.includes(name));
}