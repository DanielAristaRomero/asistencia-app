import clienteAxios from "../axios/axios";

export const getEmployees = async() => {

    const response = await clienteAxios.get('/employees/');

    if(response.data.ok) {
        const { data } = await response;
        return data;
    } else  {
        return null;
    }
}