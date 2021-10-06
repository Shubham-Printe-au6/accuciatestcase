import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from './Navbar';
import UserList from './UserList';
import UserDetail from './UserDetail';
import AddUser from './AddUser';
import UpdateUser from './UpdateUser';


const App = () => {
    return ( 
        <Router>
            <div className="container">
                <Navbar />
                <br />
                <Route path='/' exact component={UserList} />
                <Route path='/user/:id' component={UserDetail} />
                <Route path='/addUser' component={AddUser} />
                <Route path='/updateUser/:id' component={UpdateUser} />
            </div>
        </Router>
    )
};

export default App;