import axiosInstance from "../utils/axiosInstance";

/**
 * Report Service
 * Handles all report-related API calls
 */

// Get sales report
export const getSalesReport = async (params = {}) => {
  try {
    const response = await axiosInstance.get("/reports/sales/", { params });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Get purchase report
export const getPurchaseReport = async (params = {}) => {
  try {
    const response = await axiosInstance.get("/reports/purchases/", { params });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Export sales report
export const exportSalesReport = async (params = {}, format = "pdf") => {
  try {
    const response = await axiosInstance.get("/reports/sales/export/", {
      params: { ...params, format },
      responseType: "blob",
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Export purchase report
export const exportPurchaseReport = async (params = {}, format = "pdf") => {
  try {
    const response = await axiosInstance.get("/reports/purchases/export/", {
      params: { ...params, format },
      responseType: "blob",
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Get inventory report
export const getInventoryReport = async (params = {}) => {
  try {
    const response = await axiosInstance.get("/reports/inventory/", { params });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Get transaction history
export const getTransactionHistory = async (params = {}) => {
  try {
    const response = await axiosInstance.get("/reports/transactions/", { params });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

