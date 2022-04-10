import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './style.css';
import { FiLogIn } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';


export const Login = () => {

    const navigate = useNavigate();

    //validation schema
    const loginSchema = Yup.object().shape({
        email: Yup.string().required('Please enter email')
            .email('Invalid email address!'),
        password: Yup.string().required('Please enter password')
            .min(6, 'Password must be minimum 6 characters')
    })

    //onsubmit
    const onSubmitLogin = async (values) => {
       if(values){
           localStorage.setItem('user', values.email)
           navigate('/items');  
           window.location.reload();
       }
    }

    return (
        <>
            <div className='card'>
                <h2 className='text-center mb-3'>Sign In</h2>
                <Formik
                    validationSchema={loginSchema}
                    onSubmit={onSubmitLogin}
                    initialValues={{
                        email: 'user@gmail.com',
                        password: 'user@123',
                    }}
                >
                    {({
                        handleSubmit,
                        handleChange,
                        errors,
                        values,
                    }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Email ID</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    isInvalid={!!errors.email}
                                />
                                <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    isInvalid={!!errors.password}
                                />
                                <Form.Control.Feedback type='invalid'>{errors.password}</Form.Control.Feedback>
                            </Form.Group>

                            <Button type="submit"><FiLogIn /> Login</Button>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}
