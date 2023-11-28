import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    background-color:#D2EEF9;
    width: 100%;
    max-width: 320px;
    height: 500px;
    gap: 20px;
    padding: 10px;

    h1{
        color: #121214;
    }

    label{
        color: #121214;
    }

    input{
        border: 1px solid #000;
        width: 100%;
        height: 40px;
        background-color: #f0f0f0;
        border-radius: 5px;

    }

    button{
        background-color: #121214;
        color: #D2EEF9;
        width: 100%;
        height: 40px;
    }

input:focus {
    outline: none; /* Substitua pela cor desejada em hexadecimal, RGB, ou nome da cor */
}
`