import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import api from '../utils/api'

const Register = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    
    const [errors, setErrors] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors(null);

        try {
            let result = await api.post('/users', { 'email': '', 'password': '' });
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
                    <input type="email" required minLength="4" ></input>
                </div>
                <div>
                    <label>password</label>
                    <input type="password" required minLength="4"></input>
                </div>
                <button>Créer compte</button>
            </form>
        </div>
    );
};

export default Register;