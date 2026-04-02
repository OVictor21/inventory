import axiosInstance from "../utils/axiosInstance";

/**
 * Authentication Service
 * Handles all authentication-related API calls
 */

// Login user
export const login = async (credentials) => {
  try {
    const response = await axiosInstance.post("/auth/login/", credentials);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Register/Signup user
export const signup = async (userData) => {
  try {
    const response = await axiosInstance.post("/auth/register/", userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Request password reset
export const requestPasswordReset = async (email) => {
  try {
    const response = await axiosInstance.post("/auth/password-reset/", { email });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Confirm password reset
export const confirmPasswordReset = async (token, newPassword) => {
  try {
    const response = await axiosInstance.post("/auth/password-reset-confirm/", {
      token,
      password: newPassword,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Logout user
export const logout = async () => {
  try {
    const response = await axiosInstance.post("/auth/logout/");
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Get current user profile
export const getCurrentUser = async () => {
  try {
    const response = await axiosInstance.get("/auth/user/");
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Refresh token
export const refreshToken = async () => {
  try {
    const response = await axiosInstance.post("/auth/refresh/");
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

