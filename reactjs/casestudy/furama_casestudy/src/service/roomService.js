import axios from "axios";

let url = "http://localhost:8080/rooms";

const defaultParams = {
    _sort: "name",
    _order: "asc"
};

export async function getAllRoom() {
    try{
        const response = await axios.get(url, { params: defaultParams });
        return response.data;
    }catch (e) {
        return []
    }

}

export async function searchRoom(searchName, searchType, page = 1, limit = 10) {
    const params = {
        ...defaultParams,
        name_like: searchName,
        _page: page,
        _per_page: limit,
    };

    if (searchType) {
        params['type.id'] = searchType
    }

    try {
        const response = await axios.get(url, {
            params: params
        });
        return response.data;
    }catch (e) {
        return [];
    }
}

export async function addNewRoom(room) {

    try {
        return axios.post(url, room);
    }catch (e) {
        console.log("lỗi "+e);
    }
}

export async function deleteRoomById(id) {
    try {
        return axios.delete(`${url}/${id}`);
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