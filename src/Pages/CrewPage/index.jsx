import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'src/Components/Button';

const CrewPage = () => {
  return (
    <div>
      <div>
        <img src="image.png" alt="john doe" />
      </div>
      <div>
        <h1>John doe</h1>
        <h5>ID Number</h5>
        <h5>phone</h5>
        <h5>status</h5>
        <h5>Role</h5>
      </div>
      <div>
        <Button type={'button'} name={'Annotations'} />
        <Link to={'/home'}>
          <Button type={'button'} name={'Home'} />
        </Link>
      </div>
    </div>
  );
};

export default CrewPage;
