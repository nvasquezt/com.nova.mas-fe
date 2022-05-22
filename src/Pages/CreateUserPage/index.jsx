import React from 'react';
import FormCreateUser from 'src/Components/FormCreateUser';
import { HOME_ROUTE } from 'src/Constants';
import Button from 'src/Components/Button';
import { Link } from 'react-router-dom';

const CreateUserPage = () => {
  return (
    <div className="createUserPage">
      <div className="createUserPage__title">
        <h1>Create User</h1>
      </div>
      <div className="createUserPage__formCointainer">
        <FormCreateUser />
      </div>
      <div className="createUserPage__buttonsContainer">
        <Link to={HOME_ROUTE}>
          <Button type={'button'} name={'Home'} />
        </Link>
      </div>
    </div>
  );
};

export default CreateUserPage;
