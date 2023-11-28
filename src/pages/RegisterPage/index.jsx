import { RegisterForm } from "../../componets/RegisterForm"
import { StyledContainerRegister } from "./styled"

export const RegisterPage = () => {

    return (
        <StyledContainerRegister>
            <h1>Pagina de Cadastro</h1>
            <RegisterForm />
        </StyledContainerRegister>


    )
}