import clienteAxios from "../axios/axios";

export const deleteAsisstance = async(_id) => {
    
    const response = await clienteAxios.delete(`/asisstance/${_id}`);

    if(response.data.ok) {
        const { data } = await response;
        return data;
    } else  {
        return null;
    }
}