
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../providers/UserContext';

export const HomePage = () => {

    const { userLogout } = useContext(UserContext);


    return (
        <div>
            <h1>Bem vindo a pagina Home</h1>
            <Link to={'/register'}>Faça o cadastro Para criar um Usuario, clique aqui!</Link>

            <div>

            <button onClick={userLogout} >Clique aqui para remover o token do local storage!</button>

            </div>

        </div>
    )

}
