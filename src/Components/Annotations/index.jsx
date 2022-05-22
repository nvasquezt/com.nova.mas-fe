import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAnnotationByIdThunk } from 'src/Store/actions';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../Button';
import PropTypes from 'prop-types';

const Annotations = (props) => {
  const id = props.idUser;
  const dispatch = useDispatch();
  const annotationById = useSelector((state) => state.annotationById);

  useEffect(() => {
    dispatch(getAnnotationByIdThunk(id));
  }, [dispatch]);

  return (
    <div className="annotations">
      <div className="annotations__title">
        <h1>Annotations</h1>
      </div>
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
      <Link to={`/newannotation/${id}`}>
        <Button type={'button'} name={'Add new annotation'} />
      </Link>
    </div>
  );
};

Annotations.propTypes = {
  idUser: PropTypes.number.isRequired,
};

export default Annotations;
