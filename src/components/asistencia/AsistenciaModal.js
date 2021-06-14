import React, { useContext, useState } from 'react';
import { makeStyles, Modal, Fade, Backdrop, Typography, Button } from '@material-ui/core';
import { IoCreateOutline, IoSaveOutline } from "react-icons/io5";
import moment from 'moment';
import { SelectorHour } from "./SelectorHour";
import { AsistenciaContext } from '../../context/AsistenciaContext';
import { types } from '../../types/types';
import { updateAsisstance } from '../../helpers/updateAsisstance';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      height: '20rem',
      border: '1px solid #949494',
      borderRadius: '5px',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 3, 3),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly'
    },
  }));

export const AsistenciaModal = ({register}) => {

    const {asistencia, dispatch} = useContext(AsistenciaContext);

    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);

        dispatch({
            type: types.setRegisterActive,
            payload: {
                ...register
            }
        })
    }

    const handleClose = () => {
        setOpen(false);
    }

    const saveChangesRegister = () => {
        const {_id, entrada, salida, comida} = asistencia.activeRegister;
        const date = moment().format("D-M-YYYY");
        updateAsisstance({employeeId: _id, date}, {entrada, salida, comida});

        dispatch({
            type: types.updateRegisters,
            payload: {
                ...asistencia.activeRegister
            }

        })

        handleClose();
    }




    return (
        <div className = "align-items" >
            <IoCreateOutline onClick={handleOpen}/>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <Typography variant='h5'>Modificar registro de asistencia</Typography>
                        <SelectorHour />
                        <Button
                            onClick={saveChangesRegister}
                            variant="contained"
                            color="primary"
                            size="large"
                            // className={classes.button}
                            startIcon={<IoSaveOutline />}
                            >
                            Guardar
                        </Button>

                    </div>
                </Fade>
            </Modal>
        </div>
    )
}
