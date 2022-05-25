const API_URL = process.env.REACT_APP_API_URL;

export const getTrackLogById = async (id) => {
  const token = sessionStorage.getItem('token');
  try {
    const response = await fetch(`${API_URL}/api/trackinglogs/${id}`, {
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

export const createTrackLog = async (trackLog) => {
  const token = sessionStorage.getItem('token');
  try {
    const response = await fetch(`${API_URL}/api/trackinglogs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(trackLog),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error, 'error');
  }
};
