const API_URL = process.env.REACT_APP_API_URL;

export const createVehicle = async (payload) => {
  const token = sessionStorage.getItem('token');
  try {
    const response = await fetch(`${API_URL}/api/vehicles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error, 'error');
  }
};

export const getAllVehicles = async () => {
  const token = sessionStorage.getItem('token');
  try {
    const response = await fetch(`${API_URL}/api/vehicles`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error, 'error');
  }
};

export const getVehicleById = async (id) => {
  const token = sessionStorage.getItem('token');
  try {
    const response = await fetch(`${API_URL}/api/vehicles/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error, 'error');
  }
};

export const uploadVehicleImage = async (id, payload) => {
  const token = sessionStorage.getItem('token');
  try {
    const response = await fetch(`${API_URL}/api/vehicles/uploadimage/${id}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: payload,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error, 'error');
  }
};

export const updateVehicle = async (id, payload) => {
  const token = sessionStorage.getItem('token');
  try {
    const response = await fetch(`${API_URL}/api/vehicles/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error, 'error');
  }
};
