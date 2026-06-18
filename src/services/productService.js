import axiosInstance from "../utils/axiosInstance";

/**
 * Product Service
 * Handles all product-related API calls
 */

// Get all products
export const getProducts = async (params = {}) => {
  try {
    const response = await axiosInstance.get("/products/", { params });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Get product by ID
export const getProductById = async (id) => {
  try {
    const response = await axiosInstance.get(`/products/${id}/`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Create new product
export const createProduct = async (productData) => {
  try {
    const formData = new FormData();
    
    // Append all product fields
    Object.keys(productData).forEach((key) => {
      if (key === "images" && Array.isArray(productData[key])) {
        // Handle multiple images
        productData[key].forEach((image, index) => {
          formData.append(`image_${index}`, image);
        });
      } else if (productData[key] !== null && productData[key] !== undefined) {
        formData.append(key, productData[key]);
      }
    });

    const response = await axiosInstance.post("/products/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Update product
export const updateProduct = async (id, productData) => {
  try {
    const formData = new FormData();
    
    Object.keys(productData).forEach((key) => {
      if (key === "images" && Array.isArray(productData[key])) {
        productData[key].forEach((image, index) => {
          formData.append(`image_${index}`, image);
        });
      } else if (productData[key] !== null && productData[key] !== undefined) {
        formData.append(key, productData[key]);
      }
    });

    const response = await axiosInstance.put(`/products/${id}/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Delete product
export const deleteProduct = async (id) => {
  try {
    const response = await axiosInstance.delete(`/products/${id}/`);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Get products by category
export const getProductsByCategory = async (category, params = {}) => {
  try {
    const response = await axiosInstance.get(`/products/category/${category}/`, { params });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Search products
export const searchProducts = async (searchTerm, params = {}) => {
  try {
    const response = await axiosInstance.get("/products/search/", {
      params: { q: searchTerm, ...params },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Get product categories
export const getCategories = async () => {
  try {
    const response = await axiosInstance.get("/products/categories/");
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

