const API_URL = process.env.REACT_APP_API_URL;

export const createUser = async (payload) => {
  const token = sessionStorage.getItem('token');
  try {
    const response = await fetch(`${API_URL}/api/users`, {
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

export const getUserById = async (id) => {
  const token = sessionStorage.getItem('token');
  try {
    const response = await fetch(`${API_URL}/api/users/${id}`, {
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

export const getAllUsers = async () => {
  const token = sessionStorage.getItem('token');
  try {
    const response = await fetch(`${API_URL}/api/users`, {
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

export const updateUser = async (id, payload) => {
  const token = sessionStorage.getItem('token');
  try {
    const response = await fetch(`${API_URL}/api/users/${id}`, {
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

export const uploadUserImage = async (id, payload) => {
  const token = sessionStorage.getItem('token');
  try {
    const response = await fetch(`${API_URL}/api/users/uploadimage/${id}`, {
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
