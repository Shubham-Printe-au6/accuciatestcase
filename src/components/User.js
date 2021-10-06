import React from "react";
import {Link} from "react-router-dom";

const User = ({name, email, id}) => {
    return ( 
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>
                <Link to={`/user/${id}`}>Details</Link>
            </td>
        </tr>
    )
};

export default User;