import React from 'react'
import { ROUTES } from '../const'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <>
            <h1>ログイン</h1>
            <Link to={ROUTES.TOP}>TOP</Link>
        </>
    )
}
