import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from 'src/Components/Button';
import { createVehicle } from 'src/services/vehicleServices';
import { HOME_ROUTE } from 'src/Constants';

const FormCreateVehicle = () => {
  const [formStatus, setFormStatus] = useState(false);
  return (
    <div>
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
            <div>
              <label htmlFor="id">Ambulance Number</label>
              <Field name="id" type="text" />
              <ErrorMessage
                name="id"
                component={() => <div className="error">{errors.id}</div>}
              />
              <label htmlFor="licensePlate">License Plate</label>
              <Field name="licensePlate" type="text" />
              <ErrorMessage
                name="licensePlate"
                component={() => (
                  <div className="error">{errors.licensePlate}</div>
                )}
              />
              <label htmlFor="brand">Brand</label>
              <Field name="brand" type="text" />
              <ErrorMessage
                name="brand"
                component={() => <div className="error">{errors.brand}</div>}
              />
              <label htmlFor="modelAge">Model Age</label>
              <Field name="modelAge" type="text" />
              <ErrorMessage
                name="modelAge"
                component={() => <div className="error">{errors.modelAge}</div>}
              />
              <label htmlFor="classCar">Class Car</label>
              <Field name="classCar" type="text" />
              <ErrorMessage
                name="classCar"
                component={() => <div className="error">{errors.classCar}</div>}
              />
              <label htmlFor="fuelType">Fuel Type</label>
              <Field name="fuelType" type="text" />
              <ErrorMessage
                name="fuelType"
                component={() => <div className="error">{errors.fuelType}</div>}
              />
              <label htmlFor="cylinder">Cylinder</label>
              <Field name="cylinder" type="text" />
              <ErrorMessage
                name="cylinder"
                component={() => <div className="error">{errors.cylinder}</div>}
              />
              <label htmlFor="capacity">Capacity</label>
              <Field name="capacity" type="text" />
              <ErrorMessage
                name="capacity"
                component={() => <div className="error">{errors.capacity}</div>}
              />
              <label htmlFor="soatCode">Soat Code</label>
              <Field name="soatCode" type="text" />
              <ErrorMessage
                name="soatCode"
                component={() => <div className="error">{errors.soatCode}</div>}
              />
              <label htmlFor="rtmCode">Rtm Code</label>
              <Field name="rtmCode" type="text" />
              <ErrorMessage
                name="rtmCode"
                component={() => <div className="error">{errors.rtmCode}</div>}
              />
              <label htmlFor="insurancePolicy">Insurance Policy</label>
              <Field name="insurancePolicy" type="text" />
              <ErrorMessage
                name="insurancePolicy"
                component={() => (
                  <div className="error">{errors.insurancePolicy}</div>
                )}
              />
              <label htmlFor="vehiclePhone">Vehicle Phone</label>
              <Field name="vehiclePhone" type="text" />
              <ErrorMessage
                name="vehiclePhone"
                component={() => (
                  <div className="error">{errors.vehiclePhone}</div>
                )}
              />
            </div>
            <Button type="submit" name={'Submit'} />
            {formStatus && <div className="error">Error</div>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormCreateVehicle;
