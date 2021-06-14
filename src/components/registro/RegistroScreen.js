import React, { useContext, useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

import { RegisterCard } from './RegisterCard';
import { getAllAsisstance } from '../../helpers/getAllAsisstance';
import { types } from '../../types/types';
import { AsistenciaContext } from '../../context/AsistenciaContext';

export const RegistroScreen = () => {
    
    const [loading, setLoading] = useState(true);

    const {asistencia, dispatch} = useContext(AsistenciaContext);

    useEffect(async() => {
        const { allRegisters } = await getAllAsisstance();
        dispatch({
            type: types.setAllRegister,
            payload: {
                allRegisters
            }
          });
        
        setLoading(false)
      }, []);
  
    return (
        <div className="container">
              <div className="col-10">
                <div className="title">
                    <Typography variant="h4">Registro</Typography>
                </div>

                {
                  loading ?
                    <div>
                      <Skeleton animation="wave" height={140} variant="text"/> 
                      <Skeleton animation="wave" height={140} variant="text"/> 
                      <Skeleton animation="wave" height={140} variant="text"/> 
                      <Skeleton animation="wave" height={140} variant="text"/> 
                    </div> :

                    asistencia.allRegisters.map( register => 
                    <RegisterCard key={register._id}{...register}/>
                    )
                }

            </div>
        </div>
    )
}
