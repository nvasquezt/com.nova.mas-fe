import React from 'react';
import CtvMaintenance from 'src/Components/CtvMaintenance';
import PrevMaintenance from 'src/Components/PrevMaintenance';
import SpecMaintenance from 'src/Components/SpecMaintenance';
import Button from 'src/Components/Button';
import { Link, useParams } from 'react-router-dom';
import { HOME_ROUTE } from 'src/Constants';
import './MaintenancesPage.scss';

const MaintenancesPage = () => {
  const id = useParams().id;
  return (
    <div className="maintenancesPage">
      <div className="maintenancesPage__title">
        <h1>Maintenances</h1>
      </div>
      <div className="maintenancesPage__prevMaintContainer">
        <PrevMaintenance />
      </div>
      <div className="maintenancesPage__addMaintenance">
        <Link to={`/addprevmaintenance/${id}`}>
          <Button type="button" name="+ Preventive maintenance" />
        </Link>
      </div>
      <div className="maintenancesPage__ctvMaintContainer">
        <CtvMaintenance />
      </div>
      <div className="maintenancesPage__addMaintenance">
        <Button type="button" name="+ Corrective maintenance" />
      </div>
      <div className="maintenancesPage__specMaintContainer">
        <SpecMaintenance />
      </div>
      <div className="maintenancesPage__addMaintenance">
        <Button type="button" name="+ Especific maintenance" />
      </div>
      <div className="maintenancesPage__buttonsContainer">
        <Link to={HOME_ROUTE}>
          <Button type={'button'} name={'Home'} />
        </Link>
        <Link to={`/vehiclepage/${id}`}>
          <Button type={'button'} name={'Vehicle detail'} />
        </Link>
      </div>
    </div>
  );
};

export default MaintenancesPage;
