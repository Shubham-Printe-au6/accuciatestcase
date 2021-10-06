import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {Formik} from 'formik';
import * as Yup from 'yup';
import clsx from "clsx"


const UpdateUser = (props) => {
    const history = useHistory();
    const userId = props.location.pathname.slice(12);
    const [userDetail, setUserDetail] = useState({
        name: '',
        email: '',
        phone: '',
        age: 0,
        gender: '',
        address: ''
    });

    useEffect(() => {
        axios.get(`http://localhost:5000/users/${userId}`)
            .then(res => {
                setUserDetail({
                    name: res.data.name,
                    email: res.data.email,
                    phone: res.data.phone,
                    age: res.data.age,
                    gender: res.data.gender,
                    address: res.data.address,
                })
            })
            .catch(err => console.log(err));

    }, [userId])

    return ( 
        <div>
            <h1 className="text-center"><strong>Update User</strong></h1>
            <br />
            <Formik
            initialValues={{
                name: '',
                email: '',
                phone: '',
                age: '',
                gender: '',
                // photo: 'some photo string',
                address: ''
            }}
            onSubmit={(values, {setSubmitting}) => {

                const user = {
                    name: values.name,
                    email: values.email,
                    phone: values.phone,
                    age: values.age,
                    gender: values.gender,
                    address: values.address
                }

                // call addUser api
                axios.put("http://localhost:5000/users/edit/"+userId, user)
                    .then(res => window.alert(res.data))
                    .catch(err => console.log(err));

                // pushing user list screen
                history.push("/");
                
            }}
            validationSchema={Yup.object().shape({
                name: Yup.string("Enter your name").required("Name is required"),
                email: Yup.string("Enter your email-id").email("Please enter a valid email-id").required("Email-id is required"),
                phone: Yup.string("Enter your phone number").min(10, "Must be exactly 10 digits").max(10, "Must be exactly 10 digits").required("Phone number is required"),
                age: Yup.number("Enter your age").required("Age number is required"),
                gender: Yup.string("Select your gender").matches(/(male|female|Female|Male)/, "Must be either male or female").required("Gender is required"),
                address: Yup.string("Enter your address").required("Address is required"),
            })}
            >
            {(props) => {
                const {values, touched, errors, handleChange, handleBlur, handleSubmit} = props;

                return( 
                    <form onSubmit={handleSubmit}>
                        <div className="container form-group">
                        <div className="row pb-3">
                            <div className="col-xl-12">
                                <label>Name: </label>
                                <input
                                name='name'
                                type="text"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.name}
                                className={clsx('form-control', errors.name && touched.name)}
                                placeholder={"Your name"}
                                
                                />
                                {errors.name && touched.name && (
                                  <div>{errors.name}</div>
                                )} 
                            </div>
                        </div>  

                        <div className="row pb-3">
                            <div className="col-xl-12">
                                <label>Email: </label>
                                <input
                                name='email'
                                type="text"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                className={clsx('form-control', errors.email && touched.email)}
                                placeholder="Your email"
                                
                                />
                                {errors.email && touched.email && (
                                  <div>{errors.email}</div>
                                )}                            
                            </div>
                        </div>   

                        <div className="row pb-3">
                            <div className="col-xl-12">
                                <label>Phone: </label>
                                <input
                                name='phone'
                                type="text"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.phone}
                                className={clsx('form-control', errors.phone && touched.phone)}
                                placeholder="Your phone number"
                                />
                                {errors.phone && touched.phone && (
                                  <div>{errors.phone}</div>
                                )}                            
                            </div>
                        </div> 

                        <div className="row pb-3">
                            <div className="col-xl-12">
                                <label>Age: </label>
                                <input
                                name='age'
                                type="text"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.age}
                                className={clsx('form-control', errors.age && touched.age)}
                                placeholder="Your age"
                                />
                                {errors.age && touched.age && (
                                  <div>{errors.age}</div>
                                )}                            
                            </div>
                        </div> 

                        <div className="row pb-3">
                            <div className="col-xl-12">
                                <label>Gender: </label>
                                <input
                                name='gender'
                                type="text"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.gender}
                                className={clsx('form-control', errors.gender && touched.gender)}
                                placeholder="Your gender"
                                />
                                {errors.gender && touched.gender && (
                                  <div>{errors.gender}</div>
                                )}                            
                            </div>
                        </div> 

                        <div className="row pb-3">
                            <div className="col-xl-12">
                                <label>Address: </label>
                                <input
                                name='address'
                                type="text"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.address}
                                className={clsx('form-control', errors.address && touched.address)}
                                placeholder="Your address"
                                />
                                {errors.address && touched.address && (
                                  <div>{errors.address}</div>
                                )}                            
                            </div>
                        </div> 
                        <br />
                        <div className="row justify-content-md-center">
                            <div className="col col-lg-2">
                                <button type="submit" className="btn btn-success"><strong>Update User</strong></button>
                            </div>
                        </div>          
                    </div>
                </form>
                )
            }}
            </Formik>
        </div>
    )
}
export default UpdateUser;