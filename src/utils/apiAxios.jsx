import axios from "axios";

const baseUrl = "http://localhost:3001/users"

export const getAll = () => {
    try {
        const request = axios.get(baseUrl)
        return request.then(response => response.data)
    } catch (error) {
        console.error('error: ', error)
    }

}

export const createUser = async (user) => {
    try {
        const res = await axios.post(`${baseUrl}`, user, {
            headers: {
                'Content-type': 'application/json'
            }
        })
        return res.data

    } catch (error) {
        console.error('error: ', error)
    }

}

export const updateCards = async (userId, cards) => {
    try {
        const response = await axios.put(`${baseUrl}/${userId}`, {
            selectedCards: cards,
        });
        return response.data;

    } catch (error) {
        console.error('Error updating user with selected cards:', error);
        throw error;
    }
};

export const updateUsername = async (userId, newUsername) => {
    const response = await axios.patch(`${baseUrl}/${userId}`, { username: newUsername }, { headers: { 'content-type': 'application/json' } });
    return response.data;
};

export const deleteUser = (userId) => axios.delete(`${baseUrl}/${userId}`);