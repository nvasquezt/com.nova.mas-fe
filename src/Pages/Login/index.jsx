import React from 'react';
import Button from 'src/Components/Button';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Login = () => {
  return (
    <div>
      <div>Login</div>
      <div>
        <Formik
          initialValues={{ idUser: '', password: '' }}
          validate={(values) => {
            const errors = {};
            if (!values.idUser) {
              errors.idUser = 'Required';
            }
            if (!values.password) {
              errors.password = 'Required';
            }
            return errors;
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors }) => (
            <Form>
              <div>
                <label htmlFor="idUser">User</label>
                <Field name="idUser" type="text" />
                <ErrorMessage
                  name="idUser"
                  component={() => <div>{errors.idUser}</div>}
                />
                <label htmlFor="password">Password</label>
                <Field name="password" type="password" />
                <ErrorMessage
                  name="password"
                  component={() => <div>{errors.password}</div>}
                />

                <Button type="submit" name="Login" />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
