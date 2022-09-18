import React from 'react'
import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom';

const AuthGuard = () => {
    let success = useSelector((state: any) => state.login.success);
    const check = localStorage.getItem('user');
    if (check !== null) success = true;
    const navigate = useNavigate();
    React.useEffect(() => {
        !success && navigate('/sign-in');
    }, [success]);
    return (<></>)
}

export default AuthGuard;