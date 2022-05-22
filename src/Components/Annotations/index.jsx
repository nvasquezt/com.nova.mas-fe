import React, { useEffect } from 'react';
import { getAnnotationByIdThunk } from 'src/Store/actions';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './Annotations.scss';

const Annotations = (props) => {
  const id = props.idUser;
  const dispatch = useDispatch();
  const annotationById = useSelector((state) => state.annotationById);

  useEffect(() => {
    dispatch(getAnnotationByIdThunk(id));
  }, [dispatch]);

  return (
    <div className="annotations">
      {annotationById.map((annotation) =>
        annotationById ? (
          <div className="annotations__info" key={annotation.idAnnotation}>
            <p>
              <strong>ID Number:</strong> {annotation.idAnnotation} <br />
              <strong>Date:</strong> {annotation.date} <br />
              <strong>Description:</strong> {annotation.description} <br />
            </p>
          </div>
        ) : null
      )}
    </div>
  );
};

Annotations.propTypes = {
  idUser: PropTypes.number.isRequired,
};

export default Annotations;
