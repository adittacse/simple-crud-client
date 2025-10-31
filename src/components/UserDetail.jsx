import React from 'react';
import {Link, useLoaderData, useNavigate} from "react-router";

const UserDetail = () => {
    const user = useLoaderData();
    const navigate = useNavigate();

    return (
        <div>
            <h3>User Details</h3>
            <p>{user.name}: {user.email}</p>
            <button onClick={() => navigate(-1)}>Go Back!</button>
        </div>
    );
};

export default UserDetail;