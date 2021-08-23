import React, { useState } from 'react';
import { login } from '../../data/DataService';
import { Authenticate } from './Auth';

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {

        let data = {
            email,
            password
        };

        login(data).then( res => {
            console.log(res.status)
            Authenticate(res.data)
            window.location = '/';
        }).catch( err => {
            setError(err.message);
        })
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
            <button onClick={handleLogin}>Login</button>
            { error && 
                <p>{error}</p>
            }
        </div>
    )
}
