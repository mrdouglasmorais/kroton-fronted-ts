import { Route, Redirect } from 'react-router-dom';
import jwt_decode from "jwt-decode";

const PrivateRoutes: any = ({ component: Component, path: Path, ...rest}: any) => {
  const isLogged: string | null = localStorage.getItem('@userKronton')

  const isActiveSession: any = () => {
    if(isLogged === null) {
      return false;
    } else {
      const { token } = JSON.parse(isLogged);
      const tokenPayload: any = jwt_decode(token);
      const expires = tokenPayload.exp;
      const timeNow = Date.now() / 1000;
      return timeNow > expires ? false : true;
    }
  }
  return(
    <Route 
      {...rest} 
      render={ props => (
        isActiveSession() ? <Component {...props}/> : <Redirect to="logar" />
      )}
    />
  );
}

export default PrivateRoutes;