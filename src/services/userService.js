import axiosInstance from "../utils/axiosInstance";

/**
 * User Service
 * Handles all user-related API calls
 */

// Get all users
export const getUsers = async (params = {}) => {
  try {
    const response = await axiosInstance.get("/users/", { params });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Get user by ID
export const getUserById = async (id) => {
  try {
    const response = await axiosInstance.get(`/users/${id}/`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Create new user
export const createUser = async (userData) => {
  try {
    const response = await axiosInstance.post("/users/", userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Update user
export const updateUser = async (id, userData) => {
  try {
    const response = await axiosInstance.put(`/users/${id}/`, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Delete user
export const deleteUser = async (id) => {
  try {
    const response = await axiosInstance.delete(`/users/${id}/`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Update user profile
export const updateProfile = async (userData) => {
  try {
    const response = await axiosInstance.put("/users/profile/", userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Change password
export const changePassword = async (oldPassword, newPassword) => {
  try {
    const response = await axiosInstance.post("/users/change-password/", {
      old_password: oldPassword,
      new_password: newPassword,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

