import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify'

import api from './service/api'

interface IUser{
  email: string;
  password: string;
}

const Logar: React.FC = () => {
  const [ data, setData ] = useState<IUser>({} as IUser)
  const [ loader, setLoader ] = useState(false)

  const history = useHistory()

  const handleSubmit = ( event: FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    setLoader(true)
    api.post('session', data).then( response => {
      localStorage.setItem('@userKronton', JSON.stringify(response.data))
      toast.success('Conta criada com sucesso', {
        onClose: () => history.push('/dash')
      })
    }).catch(() => toast.error('Erro ao logar, verifique seus dados!'))
    .finally( () => setLoader(false))
  }

  if(loader){
    return(
      <div>
        <p>Aguarde, carregando...</p>
      </div>
    )
  }

  return (
    <div>
      <h1>Logar</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="email"
          onChange={ e => setData({ ...data, email: e.target.value }) }
        />
        <input 
          type="password" 
          placeholder="senha" 
          onChange={ e => setData({ ...data, password: e.target.value }) }
        />
        <input 
         type="submit" 
         value="Logar" 
        />
      </form>
    </div>
  );
}

export default Logar;