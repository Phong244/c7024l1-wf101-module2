import axios from "axios";

let url = `http://localhost:3000/products`

export async function getAllProduct(page, size) {

    try {
        const response = await axios.get(`${url}?_sort=name&_order=asc`);
        const data = response.data;
        return {
            data: data,
        };

    } catch (e) {
        return [];
    }
}

export async function addNewProduct(product) {

    try {
        const response = await axios.post(url, product);
        console.log("---------service- thêm mới-------------")
    } catch (e) {
        console.log("lỗi " + e);
    }

}

export async function updateProduct(id, product) {

    try {
        const response = await axios.put(`${url}/` + id, product);
    } catch (e) {
        console.log("lỗi " + e);
    }

}

export async function getProductById(id) {
    try {
        const response = await axios.get(`${url}/` + id);
        console.log(response);
        return response.data;

    } catch (e) {
        console.log("lỗi " + e);
        return null;
    }
}

export async function deleteProductById(id) {
    try {
        const response = await axios.delete(`${url}/` + id);
        console.log("---------service- thêm mới-------------")
    } catch (e) {
        console.log("lỗi " + e);
    }
}