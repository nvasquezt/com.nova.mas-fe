const API_URL = process.env.REACT_APP_API_URL;

export const getAllDates = async () => {
  const token = localStorage.getItem('token');
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
