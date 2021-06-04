import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Connection from './pages/Connection';
import Home from './pages/Home';
import Outils from './pages/Outils';


const App = () => {
  return (
    <Switch>
      {/* Route des différents pages */}
      <Route exact path="/" component={Home} />
      <Route exact path="/outils" component={Outils} />
      <Route exact path="/connection" component={Connection} />
      <Redirect to="/" /> {/* Redirection automatique si le chemin de l'url est invalide */}
    </Switch>
  );
};

export default App;