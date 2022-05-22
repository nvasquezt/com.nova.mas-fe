import React, { useState } from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import Button from 'src/Components/Button';
import { createAnnotation } from 'src/services/annotationServices';
import { useParams } from 'react-router-dom';

const FormCreateAnnotation = () => {
  const id = useParams().id;
  const [formStatus, setFormStatus] = useState(false);
  return (
    <div className='formAnnotation'>
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
            <div className='formAnnotation__formCointainer'>
              <label htmlFor="description">Description</label>
              <Field name="description" id="description" cols="30" rows="10" />
              <ErrorMessage
                name="description"
                component={() => (
                  <div className="error">{errors.description}</div>
                )}
              />
            </div>
            <Button type={'submit'} name={'Create'} />
            {formStatus && (
              <div className='formAnnotation__error'>Error while adding annotation</div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormCreateAnnotation;
