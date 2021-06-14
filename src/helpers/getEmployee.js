import clienteAxios from "../axios/axios";

export const getEmployee = async(employeeId) => {

    const response = await clienteAxios.post(`/employees/${employeeId}`);

    if(response.data.ok) {
        const { data } = await response;
        return data;
    } else  {
        return null;
    }
}