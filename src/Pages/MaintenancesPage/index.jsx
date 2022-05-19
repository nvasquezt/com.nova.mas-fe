import React from 'react';
import CtvMaintenance from 'src/Components/CtvMaintenance';
import PrevMaintenance from 'src/Components/PrevMaintenance';
import SpecMaintenance from 'src/Components/SpecMaintenance';
import Button from 'src/Components/Button';
import { Link } from 'react-router-dom';
import { HOME_ROUTE, VEHICLEPAGE_ROUTE } from 'src/Constants';

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
        <Link to={VEHICLEPAGE_ROUTE}>
          <Button type={'button'} name={'Vehicle detail'} />
        </Link>
        <Link to={HOME_ROUTE}>
          <Button type={'button'} name={'Home'} />
        </Link>
      </div>
    </div>
  );
};

export default MaintenancesPage;
