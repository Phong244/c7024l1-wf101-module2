import axios from "axios";
let url = "http://localhost:8080/rooms";

export async function getAllRoom() {
    try{
        const response = await axios.get(`${url}?_sort=name&_order=asc`);
        return response.data;
    }catch (e) {
        return []
    }

}

export async function searchRoom(searchName,searchType) {

    let url1 =`${url}?name_like=${searchName}&type.id=${searchType}&_sort=name&_order=asc`
    if (searchType==""){
        url1 =`${url}?name_like=${searchName}&_sort=name&_order=asc`
    }
    try {
        const  response = await axios.get(url1);
        return response.data;
    }catch (e) {
        return [];
    }
}

export async function addNewRoom(room) {

    try {
        const  response = await axios.post(url,room);
    }catch (e) {
        console.log("lỗi "+e);
    }

}

export async function deleteRoomById(id) {
    try {
        const  response = await axios.delete(`${url}/${id}`);
    }catch (e) {
        console.log("lỗi "+e);
    }
}

export async function getRoomByID(id) {
    try {
        const response = await axios.get(`${url}/${id}`);
        return response.data;
    }catch (e) {
        return null;
    }
}

export async function updateRoom(room) {
    try {
        const response = await axios.put(`${url}/${room.id}`,room);
        return response.data;
    }catch (e) {
        return null;
    }
}