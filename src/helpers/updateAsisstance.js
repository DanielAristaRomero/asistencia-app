import clienteAxios from "../axios/axios";

export const updateAsisstance = async(params, registro) => {
    const {date, employeeId} = params;

    const response = await clienteAxios.put(`/asisstance/${date}&${employeeId}`, registro);

    if(response.data.ok) {
        const { data } = await response;
        return data;
    } else  {
        return null;
    }
}