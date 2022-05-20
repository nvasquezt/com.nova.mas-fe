import React from 'react';
import FormCreateAnnotation from './FormCreateAnnotation';
import Button from '../Button';
import { HOME_ROUTE } from '../../Constants';
import { Link, useParams } from 'react-router-dom';

const CreateAnnotations = () => {
  const id = useParams().id;
  return (
    <div>
      <div>
        <FormCreateAnnotation />
      </div>
      <div>
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
