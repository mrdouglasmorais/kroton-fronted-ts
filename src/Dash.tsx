import React from 'react';

const Dash: React.FC = () => {
  const isLogged: string | null = localStorage.getItem('@userKronton');
  const { user } = isLogged && JSON.parse(isLogged);
  return(
    <div>
      <h1>Dash</h1>
      <h3>Olá { user?.name }.</h3>
      <p>Esta view só pode ser renderizada, se o client estiver logado.</p>
    </div>
  );
}

export default Dash;