import React, { useState } from 'react';
import Button from 'src/Components/Button';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { login } from '../../services/loginServices';
import './Login.css';

const Login = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  if (sessionStorage.token) {
    return <h1>You are logged in</h1>;
  }
  return (
    <div className="login">
      <div className="login__title">
        <h1>Login</h1>
      </div>
      <div className="login__formContainer">
        <Formik
          initialValues={{ userId: '', password: '' }}
          validate={(values) => {
            const errors = {};
            if (!values.userId) {
              errors.userId = 'Required';
            }
            if (!values.password) {
              errors.password = 'Required';
            }
            return errors;
          }}
          onSubmit={(values) => {
            const logInProcess = async () => {
              const response = await login(values);
              const { token } = response;
              if (typeof token === 'string') {
                window.location.href = '/home';
                sessionStorage.setItem('token', token);
              } else {
                setLoginStatus(true);
              }
            };
            logInProcess();
          }}
        >
          {({ errors }) => (
            <Form>
              <div className="login__formContainer--inputs">
                <label htmlFor="userId">User</label>
                <Field name="userId" type="text" />
                <ErrorMessage
                  name="userId"
                  component={() => <div className="error">{errors.userId}</div>}
                />
                <label htmlFor="password">Password</label>
                <Field
                  className={
                    errors.password || errors.password || loginStatus
                      ? 'error'
                      : null
                  }
                  name="password"
                  type="password"
                />
                <ErrorMessage
                  name="password"
                  component={() => (
                    <div className="error">{errors.password}</div>
                  )}
                />
                <Button type="submit" name="Login" />
                {loginStatus && <div className="error">Invalid Login</div>}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
