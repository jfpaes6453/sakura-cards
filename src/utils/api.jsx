export const getAllTasks = async()=>{
    const response = await fetch(`${process.env.API_URL}/data`,{cache:"no-store"});
    const users = await response.json()
    return users;
}