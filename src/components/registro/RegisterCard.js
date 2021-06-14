import React, { useContext, useEffect, useState } from 'react';
import { Typography, Divider, IconButton } from '@material-ui/core';
import { IoTrashOutline } from "react-icons/io5";
import moment from 'moment';
import { types } from '../../types/types';
import { getEmployee } from '../../helpers/getEmployee';
import { deleteAsisstance } from '../../helpers/deleteAsisstance';
import { AsistenciaContext } from '../../context/AsistenciaContext';
import { AsistenciaModal } from '../asistencia/AsistenciaModal';

export const RegisterCard = (register) => {

    const {asistencia, dispatch} = useContext(AsistenciaContext);

    const [employee, setEmployee] = useState({
        nameFull: ''
    });

    const handledeleteAsisstance = async() => {
        await deleteAsisstance(register._id);

        dispatch({
            type: types.deleteAsisstance,
            payload: register._id
        });

    }

    useEffect(async() => {
        const { employee } = await getEmployee(register.employeeId);
        setEmployee(employee);
    }, []);

    return (
        <div className = "card">
            <div className = "datosRegister">
                <Typography>{employee.nameFull}</Typography>
                <Typography className = "textSecundary">{register.date}</Typography>
            </div>
            
            <Divider orientation="vertical" flexItem className="divider"/>
            
            <div className = "horarioCard">
                
                <div>
                    <Typography>Entrada:</Typography>
                    {
                        register.entrada ?
                            <Typography>{moment(register.entrada).format("HH:mm")}</Typography>
                            : <Typography> --:-- </Typography>
                    }
                </div>
                <div>
                    <Typography>Comida:</Typography>
                    {
                        register.comida ?
                            <Typography>{moment(register.comida).format("HH:mm")}</Typography>
                            : <Typography> --:-- </Typography>
                    }
                </div>
                <div>
                    <Typography>Salida:</Typography>
                    {
                        register.salida ? 
                            <Typography>{moment(register.salida).format("HH:mm")}</Typography>
                            : <Typography> --:-- </Typography>
                    }
                </div>
            </div>
            <Divider orientation="vertical" flexItem className="divider"/>

            <div className="iconsCardRegister">
                <IconButton onClick ={handledeleteAsisstance}>
                    <IoTrashOutline/>
                </IconButton>
            </div> 
        </div>
    )
}
