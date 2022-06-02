import { Formik, Form, Field, ErrorMessage, useField, useFormikContext } from "formik";
import * as Yup from 'yup';
import PhoneInput from "react-phone-number-input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-phone-number-input/style.css'

const PhoneInputField = ({
    field,
    form
}) => {
    return (
        <div>
            <PhoneInput
                placeholder="Enter phone number"
            />
        </div>
    );
};

const DatePickerField = ({ ...props }) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);
    return (
      <DatePicker
        {...field}
        {...props}
        selected={(field.value && new Date(field.value)) || null}
        onChange={(val) => {
          setFieldValue(field.name, val);
        }}
      />
    );
  };
  

const FormCl = ()=>{

    const initials = {
        lastname: '',
        othername: '',
        phone: '',
        date_of_birth: '',
        email: '',
        details: '',
        address: '',
        is_active:'',
        date_joined: '',
    }

    const validate = Yup.object({
        lastname: Yup.string().required('Required'),
        other_name: Yup.string().required('Required'),
        phone: Yup.string().required('Required'),
        date_of_birth: Yup.string().required('Required'),
        email: Yup.string().required('Required'),
        details: Yup.string().required('Required'),
        address: Yup.string().required('Required'),
        is_active: Yup.string().required('Required'),
        date_joined: Yup.string().required('Required'),
        
    })
    return(
        <div>
            <Formik 
                initialValues={initials}
                validationSchema = {validate}
            
            >
                {(formik)=><Form class = 'shadow-lg'>
                        <div class = 'us-names'>
                            <div>
                                <Field type = 'text' name = 'lastname' class = 'form-control' placeholder = 'Lastname'/>
                                <small><ErrorMessage name = 'lastname' /></small>
                            </div>
                            <div>
                                <Field type = 'text' name = 'other_name' class = 'form-control' placeholder = 'Other names'/>
                                <small><ErrorMessage name = 'other_name' /></small>  
                            </div>                           
                           
                        </div>
                        
                        <div>
                            <Field type = 'tel' name = 'phone' component = {PhoneInputField} class = 'form-control' placeholder = 'Phone Number'/>
                            <small><ErrorMessage name = 'phone' /></small>
                        </div>

                        <div class = 'date-field'>
                            <div>
                                <label>Date of birth:</label>
                                <DatePickerField name="date_of_birth" className = 'form-control'/>
                                <small><ErrorMessage name = 'date_of_birth' /></small>
                            </div>
                            
                            <div>
                                <label>Date Joined:</label>
                                <DatePickerField name="date_joined" className = 'form-control'/>
                                <small><ErrorMessage name = 'date_joined' /></small>
                            </div>
                            
                         </div>

                         <div>
                             <Field type = 'text' name = 'details' class = 'form-control' placeholder = 'Details'/>
                             <small><ErrorMessage name = 'details' /></small>
                         </div>
                         <div>
                             <Field type = 'text' name = 'address' class = 'form-control' placeholder = 'Address'/>
                             <small><ErrorMessage name = 'address' /></small>
                         </div>

                         

                        
                         <button class = 'sub-btn'>Register Client</button>
                    
                     </Form>}
             </Formik> 
          
        </div>
        
    )
}

export default FormCl;

