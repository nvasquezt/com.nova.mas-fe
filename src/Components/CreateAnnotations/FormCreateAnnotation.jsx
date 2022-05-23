import React, { useState, useEffect } from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import { createAnnotation } from 'src/services/annotationServices';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUserByIdThunk } from 'src/Store/actions';
import Button from 'src/Components/Button';
import './FormCreateAnnotation.scss';

const FormCreateAnnotation = () => {
  const user = useSelector((state) => state.userById);
  const id = useParams().id;
  const [formStatus, setFormStatus] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserByIdThunk(id));
  }, [dispatch]);

  return (
    <div className="formAnnotation">
      <div>
        <h2>Create Annotation</h2>
        <p>
          Please register here Annotations for the crew member {user.name}{' '}
          {user.lastName}
        </p>
      </div>
      <Formik
        initialValues={{
          idUserFk: id,
          description: '',
        }}
        validate={(values) => {
          const errors = {};
          if (!values.description) {
            errors.description = 'Required';
          }
          return errors;
        }}
        onSubmit={(values) => {
          const createAnnotationProcess = async () => {
            console.log(values, 'values');
            const response = await createAnnotation(values);
            if (response.message === 'Error while adding annotation') {
              setFormStatus(true);
            } else {
              window.location.href = `/crewpage/${id}`;
            }
          };
          createAnnotationProcess();
        }}
      >
        {({ errors }) => (
          <Form>
            <div className="formAnnotation__formCointainer">
              <label htmlFor="description">Description</label>
              <Field
                as="textarea"
                className="formAnnotation__formCointainer--field"
                name="description"
                id="description"
                cols="100"
                rows="10"
              />
              <ErrorMessage
                name="description"
                component={() => (
                  <div className="formAnnotation__error">
                    {errors.description}
                  </div>
                )}
              />
              <Button type={'submit'} name={'Create'} />
            </div>
            {formStatus && (
              <div className="formAnnotation__error">
                Error while adding annotation
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormCreateAnnotation;
