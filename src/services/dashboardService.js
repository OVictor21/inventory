import axiosInstance from "../utils/axiosInstance";

/**
 * Dashboard Service
 * Handles all dashboard-related API calls
 */

// Get dashboard statistics
export const getDashboardStats = async () => {
  try {
    const response = await axiosInstance.get("/dashboard/stats/");
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Get sales notifications
export const getSalesNotifications = async (params = {}) => {
  try {
    const response = await axiosInstance.get("/dashboard/notifications/", { params });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Get sales data for charts
export const getSalesData = async (period = "month") => {
  try {
    const response = await axiosInstance.get("/dashboard/sales/", {
      params: { period },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Get popular products
export const getPopularProducts = async (limit = 10) => {
  try {
    const response = await axiosInstance.get("/dashboard/popular-products/", {
      params: { limit },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Get login records
export const getLoginRecords = async (params = {}) => {
  try {
    const response = await axiosInstance.get("/dashboard/login-records/", { params });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Get revenue statistics
export const getRevenueStats = async (period = "week") => {
  try {
    const response = await axiosInstance.get("/dashboard/revenue/", {
      params: { period },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

