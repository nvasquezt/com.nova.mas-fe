const initialState = {
  allVehicles: [],
  selectedVehicle: {},
  allUsers: [],
  userById: {},
  annotationById: [],
  allDates: [],
  dateByIdVehicle: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ALL_VEHICLES':
      return {
        ...state,
        allVehicles: action.payload,
      };
    case 'GET_VEHICLE_BY_ID':
      return {
        ...state,
        selectedVehicle: action.payload,
      };
    case 'ALL_USERS':
      return {
        ...state,
        allUsers: action.payload,
      };
    case 'GET_USER_BY_ID':
      return {
        ...state,
        userById: action.payload,
      };
    case 'GET_ANNOTATION_BY_ID':
      return {
        ...state,
        annotationById: action.payload,
      };
    case 'ALL_DATES':
      return {
        ...state,
        allDates: action.payload,
      };
    case 'GET_DATE_BY_ID_VEHICLE':
      return {
        ...state,
        dateByIdVehicle: action.payload,
      };
    default:
      return state;
  }
}
