import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

const Nav: React.FC = () => {
  const isLogged: string | null = localStorage.getItem('@userKronton');
  const [ isLoggedUser, setIsLoggeduser ] = useState<boolean | any>(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    if(window.location.pathname === '/dash' || isLogged !== undefined) {
      return true;
    } else {
      return false;
    };
  })
  const history = useHistory()
  const finishSession = () => {
    localStorage.removeItem('@userKronton');
    toast.success('Sessão encerrada', {
      onClose: () => history.push('/')
    })
    setIsLoggeduser(false)
  }

  console.log(window.location.pathname)
  
  return (
    <nav>
      <Link to='/'> Home </Link>
      <Link to='/cadastrar'> Cadastrar </Link>
      <Link to='/logar'> Logar </Link>
      { isLoggedUser && (
        <>
          <Link to='/dash'> Dash </Link>
          <button onClick={finishSession}>Encerrar sessão</button>
        </>
      )}
    </nav>
  );
}

export default Nav;