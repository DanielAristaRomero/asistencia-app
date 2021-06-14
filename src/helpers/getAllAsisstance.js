import clienteAxios from "../axios/axios";

export const getAllAsisstance = async() => {
    
    const response = await clienteAxios.get('/asisstance/');

    if(response.data.ok) {
        const { data } = await response;
        return data;
    } else  {
        return null;
    }
}