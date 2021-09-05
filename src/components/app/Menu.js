import React from 'react'
import { isAuthenticated } from './Auth';

export default function Menu() {
    return (
        <div className="flex-container">
            <a href="/">dashboard</a>
            <a href="/about">about</a>
            <a href="/contact">contact</a>
            <a href={isAuthenticated() ? '/logout' : '/login'}>
                {isAuthenticated() ? 'logout' : 'login'}
            </a>
        </div>
    )
}
