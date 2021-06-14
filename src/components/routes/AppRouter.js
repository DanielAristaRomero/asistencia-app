import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import { Navbar } from '../ui/Navbar';
import { AsistenciaScreen } from '../asistencia/AsistenciaScreen';

import { LoginScreen } from '../auth/LoginScreen';
import { RegistroScreen } from '../registro/RegistroScreen';

  export const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path ="/login" component = {LoginScreen} />
                <Route exact path ="/registro" component = {RegistroScreen} />
                <Route exact path ="/" component = {AsistenciaScreen} />

                <Redirect to = "/"/>
            </Switch>
        </Router>
    )
}