import React, { useContext, useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import 'fontsource-roboto';
import { AsistenciaCard } from '../asistencia/AsistenciaCard';
import { AsistenciaContext } from '../../context/AsistenciaContext';
import { getEmployees } from '../../helpers/getEmployees';
import { types } from '../../types/types';

export const AsistenciaScreen = () => {

    const [loading, setLoading] = useState(true);

    const {asistencia, dispatch} = useContext(AsistenciaContext);

    useEffect(async() => {
      const { employees } = await getEmployees();
      dispatch({
        type: types.setRegisterToday,
        payload: {
          employees
        }
      });
      setLoading(false)
    }, [])

    return (
        <>
            <div className="container">
              <div className="col-10">
                <div className="title">
                    <Typography variant="h4">Asistencia</Typography>
                </div>
                  
                {
                  loading ?
                    <div>
                      <Skeleton animation="wave" height={140} variant="text"/> 
                      <Skeleton animation="wave" height={140} variant="text"/> 
                      <Skeleton animation="wave" height={140} variant="text"/> 
                      <Skeleton animation="wave" height={140} variant="text"/> 
                    </div> :

                    asistencia.employees.map( register => 
                      <AsistenciaCard key={register._id}{...register}/>
                    )
                }
              </div>
            </div>

        </>
    )
}
