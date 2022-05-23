import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from 'src/Components/Button';
import { createUser } from 'src/services/userServices';
import { HOME_ROUTE } from 'src/Constants';
import './FormCreateUser.scss';

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
              <div className="formCreateUser__form--label">
                <label htmlFor="idUser"> ID User </label>
                <ErrorMessage
                  name="idUser"
                  component={() => (
                    <div className="formCreateUser__form--error">
                      {errors.idUser}
                    </div>
                  )}
                />
              </div>
              <Field type="text" name="idUser" />
              <div className="formCreateUser__form--label">
                <label htmlFor="idVehicleFk"> Ambulance Number </label>
                <ErrorMessage
                  name="idVehicleFk"
                  component={() => (
                    <div className="formCreateUser__form--error">
                      {errors.idVehicleFk}
                    </div>
                  )}
                />
              </div>
              <Field type="number" name="idVehicleFk" />
              <div className="formCreateUser__form--label">
                <label htmlFor="name"> Name </label>
                <ErrorMessage
                  name="name"
                  component={() => (
                    <div className="formCreateUser__form--error">
                      {errors.name}
                    </div>
                  )}
                />
              </div>
              <Field type="text" name="name" />
              <div className="formCreateUser__form--label">
                <label htmlFor="lastName"> Last Name </label>
                <ErrorMessage
                  name="lastName"
                  component={() => (
                    <div className="formCreateUser__form--error">
                      {errors.lastName}
                    </div>
                  )}
                />
              </div>
              <Field type="text" name="lastName" />
              <div className="formCreateUser__form--label">
                <label htmlFor="userPhone"> Phone </label>
                <ErrorMessage
                  name="userPhone"
                  component={() => (
                    <div className="formCreateUser__form--error">
                      {errors.userPhone}
                    </div>
                  )}
                />
              </div>
              <Field type="text" name="userPhone" />
              <div className="formCreateUser__form--label">
                <label htmlFor="email"> Email </label>
                <ErrorMessage
                  name="email"
                  component={() => (
                    <div className="formCreateUser__form--error">
                      {errors.email}
                    </div>
                  )}
                />
              </div>
              <Field type="email" name="email" />
              <div className="formCreateUser__form--label">
                <label htmlFor="password"> Password </label>
                <ErrorMessage
                  name="password"
                  component={() => (
                    <div className="formCreateUser__form--error">
                      {errors.password}
                    </div>
                  )}
                />
              </div>
              <Field type="password" name="password" />
              <div className="formCreateUser__form--label">
                <label htmlFor="jobPosition"> Job Position </label>
                <ErrorMessage
                  name="jobPosition"
                  component={() => (
                    <div className="formCreateUser__form--error">
                      {errors.jobPosition}
                    </div>
                  )}
                />
              </div>
              <Field type="text" name="jobPosition" />
            </div>
            <div className="formCreateUser__button">
              <Button type="submit" name={'Submit'} />
              {formStatus && (
                <div className="formCreateUser__form--error">
                  Error creating user
                </div>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormCreateUser;
