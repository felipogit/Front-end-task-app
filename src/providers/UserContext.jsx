// UserProvider.js
import { createContext, useEffect } from "react";
import { useState } from "react";
import { api } from './../services/api';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const [user, setUser] = useState(storedUser || null)
    const navigate = useNavigate();


    const userLogout = () => {
        localStorage.removeItem("@TOKEN");
        setUser(null);
        navigate('/');
    }

    const userLogin = async (formData) => {
        try {
            const { data } = await api.post('/auth/login', formData);
            localStorage.setItem("@TOKEN", data.token);
            // aqui estou colocando o token no localStorage
            setUser(data);
            navigate('/');
        } catch (error) {
            toast('Email ou senha inválidos, por favor tente novamente!', {
                style: {
                    backgroundColor: 'red',
                    color: 'white',
                },
            });
        }
    }



    


    return (
        <UserContext.Provider value={{ setUser, userLogin, userLogout, user }}>
            {children}
        </UserContext.Provider>
    )
}
