import React from 'react'
import logo from '../assets/logo.svg';

export default function Footer() {
    return (
        <>
            <footer className='flex flex-col items-center gap-4  border-t border-gray-200 py-10 text-gray-500'>
                <img src={logo} alt="Cook Recipe" className="w-40 h-auto" />
                <small>&copy 2026 Recipe Cook</small>
            </footer>
        </>
    )
}
