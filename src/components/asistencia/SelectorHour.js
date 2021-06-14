import React, { useContext, useEffect, useState } from 'react';
import MomentUtils from '@date-io/moment';
import moment from 'moment';
import { MuiPickersUtilsProvider, KeyboardTimePicker } from '@material-ui/pickers';
import { AsistenciaContext } from '../../context/AsistenciaContext';
import { types } from '../../types/types';

export const SelectorHour = () => {

    const {asistencia, dispatch} = useContext(AsistenciaContext);

    const {activeRegister} = asistencia;

    const {entrada, comida, salida} = activeRegister;

    const [registro, setRegistro] = useState({
        entrada,
        comida, 
        salida
    });

    useEffect(() => {
        dispatch({
            type: types.setRegisterActive,
            payload: {
                ...activeRegister,
                ...registro
            }
        });
    }, [registro])

    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <div className="modalTimePicker">
                {
                    entrada &&
                        <KeyboardTimePicker
                            margin="normal"
                            label="Entrada"
                            value={moment(registro.entrada)}
                            onChange={(date) => {
                                setRegistro({
                                    ...registro,
                                    entrada: date.toDate().getTime()
                                })
                            }}
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                        />
                }
                
                {
                    comida &&
                        <KeyboardTimePicker
                            margin="normal"
                            label="Comida"
                            value={moment(registro.comida)}
                            onChange={(date) => {
                                setRegistro({
                                    ...registro,
                                    comida: date.toDate().getTime()
                                })
                            }}
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                        />
                }

                {
                    salida && 
                        <KeyboardTimePicker
                            margin="normal"
                            label="Salida"
                            value={moment(registro.salida)}
                            onChange={(date) => {
                                setRegistro({
                                    ...registro,
                                    salida: date.toDate().getTime()
                                })
                            }}
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                        />
                }
            </div>
        </MuiPickersUtilsProvider>
    )
}
