'use client'
import React from 'react';
import {useRouter} from "next/navigation";

function Logout(props) {
    const router = useRouter();
    function handleLogout() {
        router.push('/api/user/login');
    }
    return (
        <li><a className="dropdown-item" onClick={handleLogout} >Logout</a></li>
    );
}

export default Logout;