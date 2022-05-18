import React from 'react';
import CtvMaintenance from 'src/Components/CtvMaintenance';
import PrevMaintenance from 'src/Components/PrevMaintenance';
import SpecMaintenance from 'src/Components/SpecMaintenance';
import Button from 'src/Components/Button';
import { Link } from 'react-router-dom';

const MaintenancesPage = () => {
  return (
    <div>
      <div>
        <h1>Maintenances</h1>
      </div>
      <div>
        <PrevMaintenance />
      </div>
      <div>
        <CtvMaintenance />
      </div>
      <div>
        <SpecMaintenance />
      </div>
      <div>
        <Link to={'/vehiclepage'}>
          <Button type={'button'} name={'Vehicle detail'} />
        </Link>
        <Link to={'/home'}>
          <Button type={'button'} name={'Home'} />
        </Link>
      </div>
    </div>
  );
};

export default MaintenancesPage;
