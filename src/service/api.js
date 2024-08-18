import axios from 'axios';


const url = "http://localhost:3006/stores";

export const getallStores = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

export const addStores = async (store) => {
    return await axios.post(url,store);
}

export const editStores = async (id, store) => {
    return await axios.put(`${url}/${id}`,store);
}


export const deleteStores = async (id) => {
    return await axios.delete(`${url}/${id}`);
}