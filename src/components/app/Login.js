import React, { useState } from 'react';
import { login } from '../../data/DataService';
import { Authenticate } from './Auth';

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {

        if (!isValid()) {
            setError('email and password required');
            return;
        }

        let data = {
            email,
            password
        };

        login(data).then( res => {
            Authenticate(res.data)
            window.location = '/';
        }).catch( err => {
            setError(err.message);
        })
    }

    const isValid = () => {
        if (email.length === 0 || password.length === 0) {
            return false;
        }
        return true;
    }

    return (
        <div>
            <input
                className="login"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="email"
            />
            <input
                className="login"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="password"
                type="password"
            />
            <button className="btn-blue" onClick={handleLogin}>Login</button>
            { error && 
                <p className="error">{error}</p>
            }
        </div>
    )
}
