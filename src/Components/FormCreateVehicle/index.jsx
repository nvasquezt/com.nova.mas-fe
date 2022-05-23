import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from 'src/Components/Button';
import { createVehicle } from 'src/services/vehicleServices';
import { HOME_ROUTE } from 'src/Constants';
import './FormCreateVehicle.scss';

const FormCreateVehicle = () => {
  const [formStatus, setFormStatus] = useState(false);
  return (
    <div className="formCreateVehicle">
      <Formik
        initialValues={{
          id: 0,
          licensePlate: '',
          brand: '',
          modelAge: 0,
          classCar: '',
          fuelType: '',
          cylinder: '',
          capacity: 0,
          soatCode: '',
          rtmCode: '',
          picVehicle:
            'https://res.cloudinary.com/dunrpkkpq/image/upload/v1652967670/initialLogo_eis34k.jpg',
          insurancePolicy: '',
          vehiclePhone: '',
        }}
        validate={(values) => {
          const errors = {};
          if (!values.id) {
            errors.id = 'Required';
          }
          if (!values.licensePlate) {
            errors.licensePlate = 'Required';
          }
          if (!values.brand) {
            errors.brand = 'Required';
          }
          if (!values.modelAge) {
            errors.modelAge = 'Required';
          }
          if (!values.classCar) {
            errors.classCar = 'Required';
          }
          if (!values.fuelType) {
            errors.fuelType = 'Required';
          }
          if (!values.cylinder) {
            errors.cylinder = 'Required';
          }
          if (!values.capacity) {
            errors.capacity = 'Required';
          }
          if (!values.soatCode) {
            errors.soatCode = 'Required';
          }
          if (!values.rtmCode) {
            errors.rtmCode = 'Required';
          }
          if (!values.insurancePolicy) {
            errors.insurancePolicy = 'Required';
          }
          if (!values.vehiclePhone) {
            errors.vehiclePhone = 'Required';
          }
          return errors;
        }}
        onSubmit={(values) => {
          const createVehicleProcess = async () => {
            values.id = Number(values.id);
            values.modelAge = Number(values.modelAge);
            values.capacity = Number(values.capacity);
            const response = await createVehicle(values);
            if (response.message !== 'Error while adding vehicle') {
              window.location.href = HOME_ROUTE;
            } else {
              setFormStatus(true);
            }
          };
          createVehicleProcess();
        }}
      >
        {({ errors }) => (
          <Form>
            <div className="formCreateVehicle__form">
              <div className="formCreateVehicle__form--label">
              <label htmlFor="id">Ambulance Number</label>
              <ErrorMessage
                name="id"
                component={() => <div className="formCreateVehicle__form--error">{errors.id}</div>}
              />
            </div>
            <Field name="id" type="text" />
            <div className="formCreateVehicle__form--label">
              <label htmlFor="licensePlate">License Plate</label>
              <ErrorMessage
                name="licensePlate"
                component={() => (
                  <div className="formCreateVehicle__form--error">{errors.licensePlate}</div>
                )}
              />
            </div>
            <Field name="licensePlate" type="text" />
            <div className="formCreateVehicle__form--label">
              <label htmlFor="brand">Brand</label>
              <ErrorMessage
                name="brand"
                component={() => <div className="formCreateVehicle__form--error">{errors.brand}</div>}
              />
            </div>
            <Field name="brand" type="text" />
            <div className="formCreateVehicle__form--label">
              <label htmlFor="modelAge">Model Age</label>
              <ErrorMessage
                name="modelAge"
                component={() => <div className="formCreateVehicle__form--error">{errors.modelAge}</div>}
              />
            </div>
            <Field name="modelAge" type="text" />
            <div className="formCreateVehicle__form--label">
              <label htmlFor="classCar">Class Car</label>
              <ErrorMessage
                name="classCar"
                component={() => <div className="formCreateVehicle__form--error">{errors.classCar}</div>}
              />
            </div>
            <Field name="classCar" type="text" />
            <div className="formCreateVehicle__form--label">
              <label htmlFor="fuelType">Fuel Type</label>
              <ErrorMessage
                name="fuelType"
                component={() => <div className="formCreateVehicle__form--error">{errors.fuelType}</div>}
              />
            </div>
            <Field name="fuelType" type="text" />
            <div className="formCreateVehicle__form--label">
              <label htmlFor="cylinder">Cylinder</label>
              <ErrorMessage
                name="cylinder"
                component={() => <div className="formCreateVehicle__form--error">{errors.cylinder}</div>}
              />
            </div>
            <Field name="cylinder" type="text" />
            <div className="formCreateVehicle__form--label">
              <label htmlFor="capacity">Capacity</label>
              <ErrorMessage
                name="capacity"
                component={() => <div className="formCreateVehicle__form--error">{errors.capacity}</div>}
              />
            </div>
            <Field name="capacity" type="text" />
            <div className="formCreateVehicle__form--label">
              <label htmlFor="soatCode">Soat Code</label>
              <ErrorMessage
                name="soatCode"
                component={() => <div className="formCreateVehicle__form--error">{errors.soatCode}</div>}
              />
            </div>
            <Field name="soatCode" type="text" />
            <div className="formCreateVehicle__form--label">
              <label htmlFor="rtmCode">Rtm Code</label>
              <ErrorMessage
                name="rtmCode"
                component={() => <div className="formCreateVehicle__form--error">{errors.rtmCode}</div>}
              />
            </div>
            <Field name="rtmCode" type="text" />
            <div className="formCreateVehicle__form--label">
              <label htmlFor="insurancePolicy">Insurance Policy</label>
              <ErrorMessage
                name="insurancePolicy"
                component={() => (
                  <div className="formCreateVehicle__form--error">{errors.insurancePolicy}</div>
                )}
              />
            </div>
            <Field name="insurancePolicy" type="text" />
            <div className="formCreateVehicle__form--label">
              <label htmlFor="vehiclePhone">Vehicle Phone</label>
              <ErrorMessage
                name="vehiclePhone"
                component={() => (
                  <div className="formCreateVehicle__form--error">{errors.vehiclePhone}</div>
                )}
              />
            </div>
            <Field name="vehiclePhone" type="text" />
            </div>
            <div className="formCreateVehicle__button">
              <Button type="submit" name={'Submit'} />
              {formStatus && <div className="formCreateVehicle__form--error">Error</div>}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormCreateVehicle;
