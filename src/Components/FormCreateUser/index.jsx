import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from 'src/Components/Button';
import { createUser } from 'src/services/userServices';
import { HOME_ROUTE } from 'src/Constants';

const FormCreateUser = () => {
  const [formStatus, setFormStatus] = useState(false);
  return (
    <div className="formCreateUser">
      <Formik
        initialValues={{
          idUser: '',
          idVehicleFk: 0,
          name: '',
          lastName: '',
          userPhone: '',
          email: '',
          password: '',
          picProfile:
            'https://res.cloudinary.com/dunrpkkpq/image/upload/v1652993808/userDefault_ybqwkg.jpg',
          jobPosition: '',
        }}
        validate={(values) => {
          const errors = {};
          if (!values.idUser) {
            errors.idUser = 'Required';
          }
          if (!values.idVehicleFk) {
            errors.idVehicleFk = 'Required';
          }
          if (!values.name) {
            errors.name = 'Required';
          }
          if (!values.lastName) {
            errors.lastName = 'Required';
          }
          if (!values.userPhone) {
            errors.userPhone = 'Required';
          }
          if (!values.email) {
            errors.email = 'Required';
          }
          if (!values.password) {
            errors.password = 'Required';
          }
          if (!values.jobPosition) {
            errors.jobPosition = 'Required';
          }
          return errors;
        }}
        onSubmit={(values) => {
          const createUserProcess = async () => {
            const response = await createUser(values);
            if (response.message === 'Error while adding user') {
              setFormStatus(true);
            } else {
              window.location.href = HOME_ROUTE;
            }
          };
          createUserProcess();
        }}
      >
        {({ errors }) => (
          <Form>
            <div className="formCreateUser__form">
              <label htmlFor="idUser"> ID User </label>
              <Field type="text" name="idUser" />
              <ErrorMessage
                name="idUser"
                component={() => <div className="error">{errors.idUser}</div>}
              />
              <label htmlFor="idVehicleFk"> Ambulance Number </label>
              <Field type="number" name="idVehicleFk" />
              <ErrorMessage
                name="idVehicleFk"
                component={() => (
                  <div className="error">{errors.idVehicleFk}</div>
                )}
              />
              <label htmlFor="name"> Name </label>
              <Field type="text" name="name" />
              <ErrorMessage
                name="name"
                component={() => <div className="error">{errors.name}</div>}
              />
              <label htmlFor="lastName"> Last Name </label>
              <Field type="text" name="lastName" />
              <ErrorMessage
                name="lastName"
                component={() => <div className="error">{errors.lastName}</div>}
              />
              <label htmlFor="userPhone"> Phone </label>
              <Field type="text" name="userPhone" />
              <ErrorMessage
                name="userPhone"
                component={() => (
                  <div className="error">{errors.userPhone}</div>
                )}
              />
              <label htmlFor="email"> Email </label>
              <Field type="email" name="email" />
              <ErrorMessage
                name="email"
                component={() => <div className="error">{errors.email}</div>}
              />
              <label htmlFor="password"> Password </label>
              <Field type="password" name="password" />
              <ErrorMessage
                name="password"
                component={() => <div className="error">{errors.password}</div>}
              />
              <label htmlFor="jobPosition"> Job Position </label>
              <Field type="text" name="jobPosition" />
              <ErrorMessage
                name="jobPosition"
                component={() => (
                  <div className="error">{errors.jobPosition}</div>
                )}
              />
            </div>
            <Button type="submit" name={'Submit'} />
            {formStatus && <div className="error">Error creating user</div>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormCreateUser;
