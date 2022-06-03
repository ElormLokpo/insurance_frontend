import { Formik, Form, Field, ErrorMessage } from "formik";
import {Link} from 'react-router-dom';
import * as Yup from 'yup';
import './signin.scss';



const SignIn = ()=>{
    let initials = {
        email: '',
        password: ''
    }
    
    let validate = Yup.object({
        email: Yup.string().required('Required'),
        password: Yup.string().min(8, 'Minimum of 8 characters').required('Required')
    })
    return(
      <div class = 'f-cont'>
      <div class = 'form-container card shadow-lg'> 
          <Formik 
                initialValues={initials}
                validationSchema = {validate}
            >
                {(formik) => <Form>
                        <h5>Login</h5>
                        <Field type = 'text' class = 'form-control f' name = 'email' placeholder = 'Email' />
                        <small class = 'err'><ErrorMessage class = 'invalid-feedback' name = 'email' /><br /></small>

                        <Field type = 'text' class = 'form-control f' name = 'password' placeholder = 'Password' />
                        <small class = 'err'><ErrorMessage name = 'password' /><br /></small> 

                        <button class = 'btn btn-dark b'><Link to = '/dashboardCl'>Login</Link></button>
                    
                    </Form>}
        </Formik>
        </div>
      </div>

    )
}        

export default SignIn;