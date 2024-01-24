import axios from "axios";

const baseUrl = "http://localhost:8000/users"
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


export async function deleteAllHistory() {
    //como delete tiene "seguridad" -> necesita ID pa eliminar, hacemos un map qe recorra todos los ids
    try {
        const response = await axios.get(baseUrl);

        // creamos variable qe tenga cada id de los users del data.response - pa la url
        const userIds = response.data.map(user => user.id);

        //delete de cada ID de la constante userIdes
        const deletePromises = userIds.map(userId => axios.delete(`${baseUrl}/${userId}`));

        // await que termine de borrar la laaarga lista
        await Promise.all(deletePromises);

        console.log('All items deleted successfully.');
    } catch (error) {
        console.error('Error deleting items:', error.message);
    }
}