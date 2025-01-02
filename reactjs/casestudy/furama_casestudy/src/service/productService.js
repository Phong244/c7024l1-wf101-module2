
import axios from "axios";
let url =`http://localhost:8080/products`
export async  function getAllProduct(page,size) {

    try {
        const  response = await axios.get(`${url}?_sort=name&_order=asc&_page=${page}&_limit=${size}`);
        console.log(response);
        const data = response.data;
        const totatRecord = response.headers['x-total-count'];

        return {
            data: data,
            totatRecord: totatRecord
        };

    }catch (e) {
        console.log("lỗi "+e);
        return [];
    }
}

export async  function searchProductByName(searchName,manufactureId,page,size) {

    let url1 =`${url}?name_like=${searchName}&manufacture.id=${manufactureId}&_sort=name&_order=asc&_page=${page}&_limit=${size}`
    if (manufactureId==""){
        url1 =`${url}?name_like=${searchName}&_sort=name&_order=asc&_page=${page}&_limit=${size}`
    }
    try {
        const  response = await axios.get(url1);
        const data = response.data;
        const totatRecord = response.headers['x-total-count'];

        return {
            data: data,
            totatRecord: totatRecord
        };
    }catch (e) {
        console.log("lỗi "+e);
        return [];
    }
}


export async function addNewProduct(product) {

    try {
        const  response = await axios.post(url,product);
        console.log("---------service- thêm mới-------------")
    }catch (e) {
        console.log("lỗi "+e);
    }

}
export async function updateProduct(id,product) {

    try {
        const  response = await axios.put(`${url}/`+id,product);
        console.log("---------service-update-------------")
    }catch (e) {
        console.log("lỗi "+e);
    }

}

export async function getProductById(id) {
    try {
        const  response = await axios.get(`${url}/`+id);
        console.log(response);
        return response.data;

    }catch (e) {
        console.log("lỗi "+e);
        return null;
    }
}
export async function deleteProductById(id) {
    try {
        const  response = await axios.delete(`${url}/`+id);
        console.log("---------service- thêm mới-------------")
    }catch (e) {
        console.log("lỗi "+e);
    }
}
// viét function xoá