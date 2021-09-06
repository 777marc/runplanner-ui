import React from 'react'
import { isAuthenticated } from './Auth';

export default function Menu() {
    return (
        <div className="flex-container">
            <a href="/dashboard" className={ hasFocus('dashboard') }>dashboard</a>
            <a href="/plans" className={ hasFocus('plans') }>Plans</a>
            <a href="/about" className={ hasFocus('about') }>about</a>
            <a href="/contact" className={ hasFocus('contact') }>contact</a>
            <a href={isAuthenticated() ? '/logout' : '/login'}>
                {isAuthenticated() ? 'logout' : 'login'}
            </a>
        </div>
    )
}

const hasFocus = (linkName) => {
    const url = window.location.pathname;
    if (url.includes(linkName)) {
        return "menu-highlight";
    }
    return "";
}
