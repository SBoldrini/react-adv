import {Formik, Form} from 'formik';
import { MySelect, MyTextInput } from '../components';
import formJson from "../data/custom-form.json";
import * as Yup from 'yup';

const initilValues: {[key: string] : any} = {};
const requiredFields: {[key: string] : any} = {};

for (const input of formJson) {
  initilValues[input.name] = input.value;

  if(!input.validations) continue;

  let schema = Yup.string();
  
  for (const rule of input.validations) {
    if(rule.type === 'required') {
      schema = schema.required('Este campo es requerido');
    }
    if(rule.type ==='minLength') {
      schema = schema.min((rule as any).value || 1, `Minimo de ${(rule as any).value || 2} caracteres`);
    }
    if(rule.type ==='email') {
      schema = schema.email('Debe ser un email válido');
    }
  }

  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({...requiredFields})

export const DynamicForm = () => {
  return (
    <div>
      <h1>DynamicForm</h1>
      <Formik
        initialValues={initilValues}
        validationSchema= {validationSchema}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form noValidate>
            {formJson.map(({type, name, paceholder, label, options}) => {
              let field = (
                <MyTextInput
                  key={name}
                  type={type as any}
                  name={name}
                  label={label}
                  placeholder={paceholder}
                />
              );

              if (type === 'select') {
                field = (
                  <MySelect label={label} name={name}>
                    <option value="">Select an option</option>
                    {
                      options?.map(({id, lable}) => (
                        <option key={lable} value={id}>{lable}</option>
                      ))
                    }
                  </MySelect>
                );
              }

              return field;
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
