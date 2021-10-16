import React, { useState } from 'react';

const App: React.FC = () => {
  const [ name, setName ] = useState<string>();
  const [ isLoad, setIsload ] = useState<boolean>(false);
  const [ showData, setShowData ] = useState<boolean>(false);
  const [ age, setAge ] = useState<number | string>();

  const handleSubmit = () => {
    setIsload(true)
    setTimeout(() => {
      setIsload(false)
      setShowData(true)
    }, 2000)
  }

  return (
    <>
      <div>
        <h1>Hello kroton</h1>
        <div>
          <hr />
          <input 
            type="text"
            placeholder="informe seu nome"
            onChange={ e => setName(e.target.value)}
          />
          <br/>
          <input 
            type="number"
            placeholder="informe sua"
            onChange={ e => setAge(e.target.value)}
          />
          <br/>
          <button
            onClick={handleSubmit}
            disabled={ name === '' || age === '' }
          > 
            Cadastrar
          </button>
        </div>
        <hr />
        { isLoad && (<p>Aguarde carregando</p>)}

        { showData && (
          <div>
            <span>Nome: {name}</span> <br/>
            <span>Idade: {age}</span>
          </div>
        )}
      </div>
    </>
  )
}

export default App;