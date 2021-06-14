import React, { useReducer } from 'react';
import { AsistenciaContext } from './context/AsistenciaContext';
import { asistenciaReducer } from './context/asistenciaReducer';
import { AppRouter } from './components/routes/AppRouter';

export const AsistenciaApp = () => {

    const [asistencia, dispatch] = useReducer(asistenciaReducer, {});
    
    return (
            <AsistenciaContext.Provider value={{asistencia, dispatch}}>
                <AppRouter />
            </AsistenciaContext.Provider>
    )
}
