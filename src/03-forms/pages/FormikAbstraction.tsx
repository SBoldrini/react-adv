import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import {MyTextInput, MyCheckbox, MySelect} from '../components';

import '../styles/styles.css';


export const FormikAbstraction = () => {

  return (
    <div>
      <h1>Formik Abstraction</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: ''
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
                        .max(15, 'Debe de tener almenos 15 cracteres')
                        .required('Required'),
          lastName: Yup.string()
                        .max(15, 'Debe de tener almenos 15 cracteres')
                        .required('Required'),
          email: Yup.string()
                        .email('Debe ser un email válido')
                        .required('Required'),
          terms: Yup.boolean()
                      .oneOf([true], 'Debe de aceptar las condiciones'),
          jobType: Yup.string()
                        .notOneOf(['it-jr'], 'Esta opción no es permitida')
                        .required('Requerido')
    
        })}
      >
        {(formik) => (
            <Form>
              <MyTextInput 
                label="Fist Name" 
                name="fistName"
                placeholder="Sebastian"
              />

              <MyTextInput 
                label="Last Name" 
                name="lastName"
                placeholder="Boldrini"
              />

              <MyTextInput 
                label="Email" 
                name="email"
                placeholder="Ingresar email"
                type="email"
              />

              <MySelect label="Job Type" name="jobType" >
                <option value="">Pick something</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="it-senior">IT-Senior</option>
                <option value="it-jr">IT-jr</option>
              </MySelect>

              <MyCheckbox label="Terms & Conditions" name="terms" />
      
              <button type="submit">Submit</button>
            </Form>
          )  
        }

      </Formik>

    </div>
  )
}
