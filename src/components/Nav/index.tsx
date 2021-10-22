import React from 'react';
import { Link } from 'react-router-dom'

const Nav: React.FC = () => {
  return (
    <nav>
      <Link to='/'> Home </Link>
      <Link to='/cadastrar'> Cadastrar </Link>
      <Link to='/logar'> Logar </Link>
    </nav>
  );
}

export default Nav;