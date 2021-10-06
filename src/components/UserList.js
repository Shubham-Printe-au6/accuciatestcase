import React, {useState, useEffect} from 'react';
import axios from 'axios';
import User from './User';


const UserList = () => {

    const [users, setUsers] = useState([]);

    const userList = users.map(user => {
        return(
            <User id={user._id} name={user.name} email={user.email} key={user._id} />
        )
    })

    useEffect(() => {
        axios.get('http://localhost:5000/users')
            .then(res => {
                if(res.data.length>0) {
                    setUsers(res.data);
                }
            })
            .catch(err => console.log(err));

    }, [])

    return ( 
        <div>
            <h1 className="text-center"><strong>User List</strong></h1>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {userList}
                </tbody>
            </table>
        </div>
    )
}
export default UserList;