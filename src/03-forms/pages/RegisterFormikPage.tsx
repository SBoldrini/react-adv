import { Form, Formik } from 'formik';

import '../styles/styles.css';
import { MyTextInput } from '../components';
import * as Yup from 'yup';

export const RegisterFormikPage = () => {

  return (
    <div>
      <h1>Register Formik Page</h1>
        <Formik 
          initialValues={{
            name: '',
            email: '',
            password1: '',
            password2: ''
          }}

          onSubmit={(values) => {
            console.log(values);
          }}

          validationSchema={Yup.object({
            name: Yup.string()
                      .min(2, 'Must have at least 2 characters')
                      .max(15, 'Must be less than 15 characters')
                      .required('Required'),
            email: Yup.string()
                      .email('Must be a valid email')
                      .required('Required'),
            password1: Yup.string()
                          .min(6, 'Must be at least 6 characters')
                          .required('Required'),
            password2: Yup.string()
                          .oneOf([Yup.ref('password1')], 'Passwords must be the same')
                          .min(6, 'Must be at least 6 characters')
                          .required('Required')
          })}

        >
          { ({handleReset}) => (
            <Form>
              <MyTextInput 
                label="Name" 
                name="name"
                placeholder="Insert your name" 
              /> 

              <MyTextInput 
                label="Email" 
                name="email"
                type='email'
                placeholder="Insert your email" 
              />

              <MyTextInput 
                label="Password" 
                name="password1"
                type='password'
                placeholder="*********" 
              />

              <MyTextInput 
                label="Re Password" 
                name="password2"
                type='email'
                placeholder="********" 
              />

              <button type="submit">Submit</button>
              <button type="button" onClick={handleReset}>Reset</button>
            </Form>
          )}
        </Formik>

      
    </div>
  )
}
