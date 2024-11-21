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