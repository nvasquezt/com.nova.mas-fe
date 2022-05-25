import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from 'src/Components/Button';
import { createTrackLog } from 'src/services/trackLogsServices';

const CreateRoute = () => {
  const [formStatus, setFormStatus] = useState(false);
  return (
    <div className="createRoute">
      <div className="createRoute__title">
        <h1>Create Route</h1>
      </div>
      <div className="createRoute__formCointainer">
        <Formik
          initialValues={{
            idVehicleFk: 0,
            latitude: '',
            longitude: ''
          }}
          validate={(values) => {
            const errors = {};
            if (!values.idVehicleFk) {
              errors.idVehicleFk = 'Required';
            }
            if (!values.latitude) {
              errors.latitude = 'Required';
            }
            if (!values.longitude) {
              errors.longitude = 'Required';
            }
            return errors;
          }}
          onSubmit={(values) => {
            console.log(values);
            const createTrackLogProcess = async () => {
              const response = await createTrackLog(values);
              if (response.message === 'Error while adding trackLog') {
                setFormStatus(true);
              } else {
                console.log(response);
              }
            };
            createTrackLogProcess();
          }}
        >
          {({ errors }) => (
            <Form>
              <div className="createRoute__form">
                <div className="createRoute__form--label">
                  <label htmlFor="idVehicleFk">Vehicle</label>
                  <ErrorMessage
                    name="idVehicleFk"
                    component={() => (
                      <div className="createRoute__form--error">
                        {errors.idVehicleFk}
                      </div>
                    )}
                  />
                </div>
                <Field name="idVehicleFk" type="number" />
                <div className="createRoute__form--label">
                  <label htmlFor="latitude">Latitude</label>
                  <ErrorMessage
                    name="latitude"
                    component={() => (
                      <div className="createRoute__form--error">
                        {errors.latitude}
                      </div>
                    )}
                  />
                </div>
                <Field name="latitude" type="text" />
                <div className="createRoute__form--label">
                  <label htmlFor="longitude">Longitude</label>
                  <ErrorMessage
                    name="longitude"
                    component={() => (
                      <div className="createRoute__form--error">
                        {errors.longitude}
                      </div>
                    )}
                  />
                </div>
                <Field name="longitude" type="text" />
              </div>
              <div className="createRoute__button">
              <Button type="submit" name={'Submit'} />
              {formStatus && (
                <div className="createRoute__form--error">
                  Error while adding trackLog
                  </div>
                  )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};


export default CreateRoute;
