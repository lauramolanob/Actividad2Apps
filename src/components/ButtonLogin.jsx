import React from 'react';
import '../styles/App.css';
import { Link } from 'react-router-dom';

const ButtonLogin = () => (
<>
    <Link to="/login" className="btn btn-green px-5">
        Login
    </Link>
</>
)

export default ButtonLogin
