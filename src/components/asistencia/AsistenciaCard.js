import React, { useContext, useEffect, useState } from 'react';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { IoLogInOutline, IoRestaurantOutline, IoLogOutOutline } from "react-icons/io5";
import moment from 'moment';
import { AsistenciaContext } from '../../context/AsistenciaContext';
import { types } from '../../types/types';
import { getAsisstance } from '../../helpers/getAsisstance';
import { updateAsisstance } from '../../helpers/updateAsisstance';
import { createAssistance } from '../../helpers/createAsisstance';
import { AsistenciaModal } from '../asistencia/AsistenciaModal';

export const AsistenciaCard = ({nameFull, _id, puesto, area}) => {

    const {dispatch, asistencia} = useContext(AsistenciaContext);

    const employee = asistencia.employees.find(e => e._id === _id);
    
    const [register, setRegister] = useState({});

    const date = moment().format("D-M-YYYY");
    const employeeId = employee._id;
    
    const changeRegister = (registro) => {

        dispatch({
            type: types.setRegister,
            payload: {
                _id,
                ...registro 
            }
        });
        setRegister({
            ...registro
        });
    }

    useEffect(async() => {
        const asisstances = await getAsisstance({employeeId, date});

        if(!asisstances.asisstances) {
            createAssistance({employeeId, date});
        } else {
            const {entrada, comida, salida} = asisstances.asisstances;
            
            dispatch({
                type: types.setRegister,
                payload: {
                    _id,
                    entrada, comida, salida
                }
            });
        }
        
    },[]);

    useEffect(() => {

        updateAsisstance({employeeId, date}, register);

    }, [register]);

    return (
        <div className = "card">
            <div className = "datosPersonalesCard">
                <Typography>{nameFull}</Typography>
                <Typography className = "textSecundary">{_id}</Typography>
            </div>
            
            <Divider orientation="vertical" flexItem className="divider"/>
            
            <div className = "datosPuestoCard">
                <Typography className="puestoCard textCenter">{puesto}</Typography>
                <Divider orientation="vertical" flexItem className="hidden"/>
                <Typography className="areaCard textCenter">{area}</Typography>
            </div>
                   
            <div className = "iconsCard">
                {
                    !employee.entrada &&
                        <IconButton onClick = { () => {
                            changeRegister({entrada: moment().toDate().getTime()});
                        }}>
                            <IoLogInOutline />
                        </IconButton>
                }
                
                {
                    
                    !employee.comida && 
                        <IconButton onClick = { () => {
                            if(employee.entrada) {
                                changeRegister({comida: moment().toDate().getTime()});
                            }
                            
                        }}>
                            <IoRestaurantOutline />
                        </IconButton>
                }
                
                {
                    !employee.salida &&
                        <IconButton  onClick = { () => {
                            if(employee.entrada && employee.comida) {
                                changeRegister({salida: moment().toDate().getTime()});
                            }
                            
                        }}>
                            <IoLogOutOutline />
                        </IconButton>
                }
                
                {
                    employee.entrada &&
                        <IconButton>
                            <AsistenciaModal register={employee}/>
                        </IconButton>
                }
                
                
            </div>
        </div>
    )
}
