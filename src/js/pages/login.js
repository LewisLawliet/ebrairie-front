/*import React from 'react';

const Login = () => {
    handleSubmit=async()=>{
        e.preventDefault()
        let result = await api.post("/users/authenticate', { 'email': 'nadir@test.com', 'password': 'test")
        console.log(result)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>email</label>
                    <input type="password"></input>
                </div>
                <div>
                    <label>password</label>
                    <input type="password"></input>
                </div>
                <button>Connexion</button>
            </form>
        </div>
    );
};

export default Login;*/
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import api from '../utils/api'

const Login = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    
    const [errors, setErrors] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors(null);

        try {
            let result = await api.post('/users/authenticate', { 'email': '', 'password': '' });
            dispatch({ type: 'USER_SET', payload: result.data })
            history.push('/');
        }
        catch (err) {
            setErrors(err.response?.data?.message);
            dispatch({ type: 'USER_RESET' })
        }
    }

    return (
        <div>
            {
                errors && <p>{errors}</p>
            }
            <form onSubmit={handleSubmit}>
                <div>
                    <label>email</label>
                    <input type="email"></input>
                </div>
                <div>
                    <label>password</label>
                    <input type="password"></input>
                </div>
                <button>loggin</button>
            </form>
        </div>
    );
};

export default Login;