const API_URL = process.env.REACT_APP_API_URL;

export const getAllDates = async () => {
  const token = sessionStorage.getItem('token');
  try {
    const response = await fetch(`${API_URL}/api/dates`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getDateByIdVehicle = async (id) => {
  const token = sessionStorage.getItem('token');
  try {
    const response = await fetch(`${API_URL}/api/dates/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateDate = async (id, date) => {
  const token = sessionStorage.getItem('token');
  try {
    const response = await fetch(`${API_URL}/api/dates/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(date),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createDate = async (date) => {
  const token = sessionStorage.getItem('token');
  try {
    const response = await fetch(`${API_URL}/api/dates`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(date),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
