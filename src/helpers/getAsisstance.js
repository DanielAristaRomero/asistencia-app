import clienteAxios from "../axios/axios";

export const getAsisstance = async(datos) => {
    
    const response = await clienteAxios.post('/asisstance/search/', datos);

    if(response.data.ok) {
        const { data } = await response;
        return data;
    } else  {
        return null;
    }
}