import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoutes from './private.routes'

import App from './App';
import Cadastrar from './Cadastrar';
import Logar from './Logar';
import Nav from './components/Nav';
import Dash from './Dash';

export default function Roter(){
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/cadastrar" component={Cadastrar} />
        <Route path="/logar" component={Logar} />
        <PrivateRoutes exact path="/dash" component={Dash} />
      </Switch>
    </BrowserRouter>
  )
}

