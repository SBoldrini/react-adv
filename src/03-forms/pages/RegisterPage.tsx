import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';

import '../styles/styles.css';

export const RegisterPage = () => {

  const {name,
    email,
    password1,
    password2,
    formData,
    handleInputChange,
    resetFrom,
    isValidEmail
  } = useForm({
    name: 'Sebastian',
    email: 'sboldrini@witack.com',
    password1: '123456',
    password2: '123456'
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);

  }

  return (
    <div>
      <h1>Register Page</h1>

      <form noValidate onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleInputChange}
          className={`${name.trim().length <= 0 && 'has-error'}`}
        />
        {name.trim().length <= 0 && <span>Este campo es necesaario</span>}

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleInputChange}
          className={`${!isValidEmail(email) && 'has-error'}`}
        />
        {!isValidEmail(email) && <span>El email no es valido</span>}

        <input
          type="password"
          placeholder="Password"
          name="password1"
          value={password1}
          onChange={handleInputChange}
        />
        {password1.trim().length <= 0 && <span>Este campo es necesaario</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña tiene que tener almenos 6 caracteres</span>}

        <input
          type="password"
          placeholder="Repeat Password"
          name="password2"
          value={password2}
          onChange={handleInputChange}
        />
        {password2.trim().length <= 0 && <span>Este campo es necesaario</span>}
        {password2.trim().length > 0 && password1 !== password2 && <span>Las contraseñas tienen que ser iguales</span>}

        <button 
          type="submit"
        >
          Create
        </button>

        <button type="button" onClick={resetFrom} >Reset Form</button>

      </form>
    </div>
  )
}
