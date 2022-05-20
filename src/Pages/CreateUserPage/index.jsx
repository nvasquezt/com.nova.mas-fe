import React from 'react';
import FormCreateUser from 'src/Components/FormCreateUser';
import { HOME_ROUTE } from 'src/Constants';
import Button from 'src/Components/Button';
import { Link } from 'react-router-dom';

const CreateUserPage = () => {
  return (
    <div>
      <div>
        <h1>Create User</h1>
      </div>
      <div>
        <FormCreateUser />
      </div>
      <div>
        <Link to={HOME_ROUTE}>
          <Button type={'button'} name={'Home'} />
        </Link>
      </div>
    </div>
  );
};

export default CreateUserPage;
