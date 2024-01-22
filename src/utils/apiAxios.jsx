import axios from "axios";

const baseUrl = "http://localhost:3001/users"
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Accept'] = 'application/json'

export const getAllData = () => {
    try {
        const request = axios.get(baseUrl)
        return request.then(response => response.data)
    } catch (error) {
        console.error('error: ', error)
    }
}


export const createUser = async (user) => {
    try {
        const res = await axios.post(`${baseUrl}`, user)
        return res.data

    } catch (error) {
        console.error('error: ', error)
    }

}


export const updateUsername = async (userId, newUsername) => {
    try {
        const response = await axios.patch(`${baseUrl}/${userId}`, { username: newUsername });
        return response.data;
        
    } catch (error) {
        console.error('Error al actualizar nombre de usuario:', error)
    }
};

export const deleteUser = async (userId) => {
    try {
        const response = await axios.delete(`${baseUrl}/${userId}`)
        return response.data
    } catch (error) {
        console.error('Error al eliminar usuario:', error)
    }
}

export const updateUserResults = async (userId, newResults) => {
    try {
        const response = await axios.patch(`${baseUrl}/${userId}`, { results: newResults });
        return response.data;
    } catch (error) {
        console.error('Error al actualizar resultados:', error);
        throw error;
    }
}

export const deleteAllHistory = async () => {
    try {
        const response = await axios.delete(`${baseUrl}/deleteAll`);
        return response.data;
    } catch (error) {
        console.error('Error al eliminar todo el historial:', error);
        throw error;
    }
};