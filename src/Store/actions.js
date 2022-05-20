import { getAllVehicles, getVehicleById } from 'src/services/vehicleServices';
import { getAllUsers, getUserById } from 'src/services/userServices';
import { getAnnotationById } from 'src/services/annotationServices';
import { getAllDates } from 'src/services/dateServices';

export const getAllVehiclesAction = (vehicles) => ({
  type: 'ALL_VEHICLES',
  payload: vehicles,
});
export const getVehicleByIdAction = (vehicle) => ({
  type: 'GET_VEHICLE_BY_ID',
  payload: vehicle,
});
export const getAllUsersAction = (users) => ({
  type: 'ALL_USERS',
  payload: users,
});
export const getUserByIdAction = (user) => ({
  type: 'GET_USER_BY_ID',
  payload: user,
});
export const getAnnotationByIdAction = (annotation) => ({
  type: 'GET_ANNOTATION_BY_ID',
  payload: annotation,
});
export const getAllDatesAction = (dates) => ({
  type: 'ALL_DATES',
  payload: dates,
});

export const getAllVehiclesThunk = () => async (dispatch) => {
  try {
    const vehicles = await getAllVehicles();
    dispatch(getAllVehiclesAction(vehicles));
  } catch (error) {
    console.log(error, 'error');
  }
};

export const getVehicleByIdThunk = (id) => async (dispatch) => {
  try {
    const vehicle = await getVehicleById(id);
    dispatch(getVehicleByIdAction(vehicle));
  } catch (error) {
    console.log(error, 'error');
  }
};

export const getAllUsersThunk = () => async (dispatch) => {
  try {
    const users = await getAllUsers();
    dispatch(getAllUsersAction(users));
  } catch (error) {
    console.log(error, 'error');
  }
};

export const getUserByIdThunk = (id) => async (dispatch) => {
  try {
    const user = await getUserById(id);
    dispatch(getUserByIdAction(user));
  } catch (error) {
    console.log(error, 'error');
  }
};

export const getAnnotationByIdThunk = (id) => async (dispatch) => {
  try {
    const annotation = await getAnnotationById(id);
    dispatch(getAnnotationByIdAction(annotation));
  } catch (error) {
    console.log(error, 'error');
  }
};

export const getAllDatesThunk = () => async (dispatch) => {
  try {
    const dates = await getAllDates();
    dispatch(getAllDatesAction(dates));
  } catch (error) {
    console.log(error, 'error');
  }
};
