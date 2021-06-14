import clienteAxios from "../axios/axios";

export const createAssistance = async(datos) => {

    const response = await clienteAxios.post('/asisstance/', datos);

    if(response.data.ok) {
        const { data } = await response;
        return data;
    } else  {
        return null;
    }
}