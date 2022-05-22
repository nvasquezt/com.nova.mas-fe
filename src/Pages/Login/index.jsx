import React, { useState } from 'react';
import Button from 'src/Components/Button';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { login } from '../../services/loginServices';
import './Login.scss';

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
              <div className="login__formContainer">
                <div className="login__formContainer--fields">
                  <label htmlFor="userId">User </label>
                  <Field name="userId" type="text" />
                  <ErrorMessage
                    name="userId"
                    component={() => (
                      <div className="login__error">{errors.userId}</div>
                    )}
                  />
                </div>
                <div className="login__formContainer--fields">
                  <label htmlFor="password">Password</label>
                  <Field name="password" type="password" />
                  <ErrorMessage
                    name="password"
                    component={() => (
                      <div className="login__error">{errors.password}</div>
                    )}
                  />
                </div>
                <Button type="submit" name="Login" />
                {loginStatus && (
                  <div className="login__error">Invalid Login</div>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
