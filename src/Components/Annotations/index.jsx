/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAnnotationByIdThunk } from 'src/Store/actions';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../Button';

const Annotations = (props) => {
  const id = props.idUser;
  const dispatch = useDispatch();
  const annotationById = useSelector((state) => state.annotationById);

  useEffect(() => {
    dispatch(getAnnotationByIdThunk(id));
  }, [dispatch]);

  return (
    <div>
      <div>
        <h1>Annotations</h1>
      </div>
      {annotationById.map((annotation) =>
        annotationById ? (
          <div key={annotation.idAnnotation}>
            <p>
              <strong>ID Number:</strong> {annotation.idAnnotation} <br />
              <strong>Date:</strong> {annotation.date} <br />
              <strong>Description:</strong> {annotation.description} <br />
            </p>
          </div>
        ) : null
      )}
      <Link to={`/newannotation/${id}`}>
        <Button type={'button'} name={'Add new annotation'} />
      </Link>
    </div>
  );
};

export default Annotations;
