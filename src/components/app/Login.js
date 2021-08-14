import React, { useState } from 'react';
import { login } from '../../data/DataService';
import { Authenticate } from './Auth';

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {

        let data = {
            email,
            password
        };

        login(data).then( res => {
            Authenticate(res.data)
            window.location = '/';
        }).catch( err => {
            console.log('err:', err);
        })
    }

    return (
        <div>
            <input 
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="email"
            />
            <input 
                onChange={(e) => setPassword(e.target.value)} 
                value={password}
                placeholder="password"
            />
            <button onClick={handleLogin}>Login</button>

        </div>
    )
}
