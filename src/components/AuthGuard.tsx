import React from 'react'
import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom';

const AuthGuard = () => {
    const success = useSelector((state: any) => state.login.success);
    const navigate = useNavigate();
    React.useEffect(() => {
        !success && navigate('/sign-in');
    }, [success]);
    return (<></>)
}

export default AuthGuard;