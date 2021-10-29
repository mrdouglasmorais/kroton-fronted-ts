import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify'

import api from './service/api'

interface IUser{
  name: string;
  email: string;
  password: string;
}

const Cadastrar: React.FC = () => {
  const [ data, setData ] = useState<IUser>({} as IUser)
  const history = useHistory()

  const handleSubmit = ( event: FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    api.post('users', data).then( response => {
      if(response.status === 200){
        toast.success('Cadastro rtealizado com sucessoß', {
          onClose: () => history.push('/logar')
        })
      }
    }).catch(() => toast.error('Erro ao cadastrar, verifique seus dados!'))

  }

  return (
    <div>
      <h1>Cadastrar</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="nome"
          onChange={ e => setData({ ...data, name: e.target.value }) }
        />
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
         value="Cadastrar" 
        />
      </form>
    </div>
  );
}

export default Cadastrar;