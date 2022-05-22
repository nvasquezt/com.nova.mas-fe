import React from 'react';
import FormCreateAnnotation from './FormCreateAnnotation';
import Button from '../Button';
import { HOME_ROUTE } from '../../Constants';
import { Link, useParams } from 'react-router-dom';
import './CreateAnnotation.scss';

const CreateAnnotations = () => {
  const id = useParams().id;
  return (
    <div className="formAnnotation">
      <div className="formAnnotation__form">
        <FormCreateAnnotation />
      </div>
      <div className="formAnnotation__buttonsContainer">
        <Link to={`/crewpage/${id}`}>
          <Button type={'button'} name={'User detail'} />
        </Link>
        <Link to={HOME_ROUTE}>
          <Button type={'button'} name={'Home'} />
        </Link>
      </div>
    </div>
  );
};

export default CreateAnnotations;
