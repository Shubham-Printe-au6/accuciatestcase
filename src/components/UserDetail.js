import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {Link} from "react-router-dom";


const UserDetail = (props) => {

    const history = useHistory();
    const [user, setUser] = useState({});
    // console.log(props.location.pathname.slice(6))
    const userId = props.location.pathname.slice(6)

    useEffect(() => {
        axios.get(`http://localhost:5000/users/${userId}`)
            .then(res => {
                setUser(res.data);
            })
            .catch(err => console.log(err));

    }, [userId]);

    const deleteUser = () => {
        axios.delete(`http://localhost:5000/users/delete/${userId}`)
            .then(res => window.alert(res.data))
            .catch(err => console.log(err));

            history.push("/");
    }


    return ( 
        <div>
            <h1 className="text-center"><strong>User Details</strong></h1>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Label</th>
                        <th>User Detail</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Name: </td>
                        <td>{user.name}</td>
                    </tr>
                    <tr>
                        <td>Email: </td>
                        <td>{user.email}</td>
                    </tr>
                    <tr>
                        <td>Phone Number: </td>
                        <td>{user.phone}</td>
                    </tr>
                    <tr>
                        <td>Age: </td>
                        <td>{user.age}</td>
                    </tr>
                    <tr>
                        <td>Gender: </td>
                        <td>{user.gender}</td>
                    </tr>
                    <tr>
                        <td>Address: </td>
                        <td>{user.address}</td>
                    </tr>                    
                </tbody>
            </table>
            
            <Link to={`/updateUser/${userId}`}>
            <button type="button" className="btn btn-warning mr-5">
                <strong>
                Upate
                </strong>
            </button>
            </Link>
            
            <button onClick={() => deleteUser(userId)} type="button" className="btn btn-danger mx-5">
                <strong>
                Delete
                </strong>
            </button>

        </div>
    )
}
export default UserDetail;