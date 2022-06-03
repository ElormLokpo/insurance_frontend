import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import {Link} from 'react-router-dom';
import './signup.scss';
import im from '../Images/leftc.jpg';
import axios from '../Api/axios';
import { useEffect } from "react";



const SignUp = ()=>{
    let initials = {
        first_name:'',
        last_name:'',
        username:'',
        email:'',
        password:'',
        re_password:''
    }

   
    let submitHandler = (values)=>{
      axios.post('', 
      JSON.stringify({values}),
      {
        headers : {"Content-Type" : "application/json"},
        withCredentials : true
        }
      )
    }
    
    let validate = Yup.object({
        first_name: Yup.string().required('Name is required!'),
        last_name: Yup.string().required('Name is required!'),
        username: Yup.string().required('Username is required!'),
        email: Yup.string().email('Invalid Email').required('Email is required!'),
        password: Yup.string().min(8, 'Password is too short').required('Password is required!'),
        re_password: Yup.string().equals([Yup.ref('password'), null], 'Password does not match')
    })

    return(
      <div class = 'f-cont-s'>
        <div class = "left-s">
            <img src = {im} />
            <h3>
                <span class = "first">Get <br />Insured</span><br />
                <span class = "second">With Paycover</span><br />
                <span class = "third">by filling out the sign up form...</span>
            </h3>
        </div>
        <div class = 'right-s'>
            <div class = 'form-container-s card shadow-lg'> 
                <Formik 
                        initialValues={initials}
                        validationSchema = {validate}
                        onSubmit = {submitHandler}
                    >
                        {(formik) => {
                            return <Form>
                                <h5>Sign Up</h5>
                                
                                <Field type = 'text' class = 'form-control f' name = 'first_name' placeholder = 'Firstname' />
                                <small class = 'err'><ErrorMessage class = 'invalid-feedback' name = 'first_name' /><br /></small>
                                
                                
                                <Field type = 'text' class = 'form-control f' name = 'last_name' placeholder = 'Lastname' />
                                <small class = 'err'><ErrorMessage class = 'invalid-feedback' name = 'last_name' /><br /></small>
                                
                                <Field type = 'text' class = 'form-control f' name = 'username' placeholder = 'Username' />
                                <small class = 'err'><ErrorMessage class = 'invalid-feedback' name = 'username' /><br /></small>
                                
                                <Field type = 'text' class = 'form-control f' name = 'email' placeholder = 'Email' />
                                <small class = 'err'><ErrorMessage class = 'invalid-feedback' name = 'email' /><br /></small>

                                <Field type = 'text' class = 'form-control f' name = 'password' placeholder = 'Password' />
                                <small class = 'err'><ErrorMessage class = 'invalid-feedback' name = 'password' /><br /></small>

                                <Field type = 'text' class = 'form-control f' name = 're_password' placeholder = 'Re-enter Password' />
                                <small class = 'err'><ErrorMessage name = 're_password' /><br /></small> 
                                
                                
                                <button class = 'btn btn-dark b' type = 'submit'><Link to = '/signin'>Sign Up</Link></button>
                            
                            </Form>}}
                </Formik>
            </div>
        </div>
       
      </div>

    )
}        

export default SignUp;