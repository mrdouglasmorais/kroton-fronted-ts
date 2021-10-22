import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Cadastrar from './Cadastrar';
import Logar from './Logar';

import Nav from './components/Nav'


export default function Roter(){
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/cadastrar" component={Cadastrar} />
        <Route path="/logar" component={Logar} />
      </Switch>
    </BrowserRouter>
  )
}

