import axiosInstance from "../utils/axiosInstance";

/**
 * Order Service
 * Handles all order-related API calls
 */

// Get all orders
export const getOrders = async (params = {}) => {
  try {
    const response = await axiosInstance.get("/orders/", { params });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Get order by ID
export const getOrderById = async (id) => {
  try {
    const response = await axiosInstance.get(`/orders/${id}/`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Create new order
export const createOrder = async (orderData) => {
  try {
    const response = await axiosInstance.post("/orders/", orderData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Update order
export const updateOrder = async (id, orderData) => {
  try {
    const response = await axiosInstance.put(`/orders/${id}/`, orderData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Delete order
export const deleteOrder = async (id) => {
  try {
    const response = await axiosInstance.delete(`/orders/${id}/`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Get orders by status
export const getOrdersByStatus = async (status, params = {}) => {
  try {
    const response = await axiosInstance.get(`/orders/status/${status}/`, { params });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Add item to cart
export const addToCart = async (productId, quantity = 1) => {
  try {
    const response = await axiosInstance.post("/orders/cart/add/", {
      product_id: productId,
      quantity,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Get cart items
export const getCart = async () => {
  try {
    const response = await axiosInstance.get("/orders/cart/");
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Remove item from cart
export const removeFromCart = async (itemId) => {
  try {
    const response = await axiosInstance.delete(`/orders/cart/${itemId}/`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Checkout order
export const checkout = async (checkoutData) => {
  try {
    const response = await axiosInstance.post("/orders/checkout/", checkoutData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

