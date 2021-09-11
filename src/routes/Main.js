import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EditarProducto from '../components/EditarProducto';
import Header from '../components/Header';
import Logear from '../components/Logear';
import NuevoProducto from '../components/NuevoProducto';
import Productos from '../components/Productos';
import Registro from '../components/Registro';


const Main = () => {
  return (
    <Router>
      <Header />

      <div className="container">
        <Switch>
          <Route exact path="/" component={Productos} />
          <Route exact path="/producto/nuevo" component={NuevoProducto} />
          <Route exact path="/producto/editar/:id" component={EditarProducto} />
          <Route exact path="/logear" component={Logear} />
          <Route exact path="/registro" component={Registro} />
        </Switch>
      </div>
        
      
    </Router>
  )
}

export default Main;