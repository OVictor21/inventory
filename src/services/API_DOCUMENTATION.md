# API Integration Documentation

This document outlines the API service structure created for connecting the frontend to the backend API.

**Base URL:** `https://sims-mup1.onrender.com`

## Authentication

All authenticated requests require a Bearer token in the Authorization header. The token is automatically added by the axios interceptor.

### Endpoints

#### Login
- **POST** `/auth/login/`
- **Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response:** Returns token and user data

#### Register/Signup
- **POST** `/auth/register/`
- **Body:** User registration data

#### Password Reset
- **POST** `/auth/password-reset/` - Request password reset
- **POST** `/auth/password-reset-confirm/` - Confirm password reset

#### Logout
- **POST** `/auth/logout/`

#### Get Current User
- **GET** `/auth/user/`

---

## Products

### Endpoints

#### Get All Products
- **GET** `/products/`
- **Query Parameters:** `page`, `limit`, `category`, `search`, etc.

#### Get Product by ID
- **GET** `/products/{id}/`

#### Create Product
- **POST** `/products/`
- **Content-Type:** `multipart/form-data`
- **Body:** FormData with product fields and images

#### Update Product
- **PUT** `/products/{id}/`
- **Content-Type:** `multipart/form-data`

#### Delete Product
- **DELETE** `/products/{id}/`

#### Get Products by Category
- **GET** `/products/category/{category}/`

#### Search Products
- **GET** `/products/search/`
- **Query Parameters:** `q` (search term)

#### Get Categories
- **GET** `/products/categories/`

---

## Users

### Endpoints

#### Get All Users
- **GET** `/users/`
- **Query Parameters:** `page`, `limit`, `role`, etc.

#### Get User by ID
- **GET** `/users/{id}/`

#### Create User
- **POST** `/users/`
- **Body:** User data (name, email, phone, gender, etc.)

#### Update User
- **PUT** `/users/{id}/`

#### Delete User
- **DELETE** `/users/{id}/`

#### Update Profile
- **PUT** `/users/profile/`

#### Change Password
- **POST** `/users/change-password/`
- **Body:**
  ```json
  {
    "old_password": "oldpass",
    "new_password": "newpass"
  }
  ```

---

## Orders

### Endpoints

#### Get All Orders
- **GET** `/orders/`
- **Query Parameters:** `page`, `limit`, `status`, etc.

#### Get Order by ID
- **GET** `/orders/{id}/`

#### Create Order
- **POST** `/orders/`
- **Body:** Order data

#### Update Order
- **PUT** `/orders/{id}/`

#### Delete Order
- **DELETE** `/orders/{id}/`

#### Get Orders by Status
- **GET** `/orders/status/{status}/`

#### Cart Operations
- **POST** `/orders/cart/add/` - Add item to cart
- **GET** `/orders/cart/` - Get cart items
- **DELETE** `/orders/cart/{itemId}/` - Remove item from cart

#### Checkout
- **POST** `/orders/checkout/`
- **Body:** Checkout data (payment info, shipping address, etc.)

---

## Dashboard

### Endpoints

#### Get Dashboard Statistics
- **GET** `/dashboard/stats/`
- **Returns:** Total revenue, customers, expenditure, products sold, etc.

#### Get Sales Notifications
- **GET** `/dashboard/notifications/`
- **Query Parameters:** `limit`, `offset`

#### Get Sales Data
- **GET** `/dashboard/sales/`
- **Query Parameters:** `period` (day, week, month, year)

#### Get Popular Products
- **GET** `/dashboard/popular-products/`
- **Query Parameters:** `limit`

#### Get Login Records
- **GET** `/dashboard/login-records/`
- **Query Parameters:** `limit`, `offset`

#### Get Revenue Statistics
- **GET** `/dashboard/revenue/`
- **Query Parameters:** `period`

---

## Reports

### Endpoints

#### Get Sales Report
- **GET** `/reports/sales/`
- **Query Parameters:** `start_date`, `end_date`, `category`, etc.

#### Get Purchase Report
- **GET** `/reports/purchases/`
- **Query Parameters:** `start_date`, `end_date`, etc.

#### Export Sales Report
- **GET** `/reports/sales/export/`
- **Query Parameters:** `format` (pdf, excel, csv)
- **Response:** Blob file

#### Export Purchase Report
- **GET** `/reports/purchases/export/`
- **Query Parameters:** `format`
- **Response:** Blob file

#### Get Inventory Report
- **GET** `/reports/inventory/`

#### Get Transaction History
- **GET** `/reports/transactions/`

---

## Usage Examples

### Using Auth Service
```javascript
import { login, signup, logout } from "../services/authService";

// Login
const handleLogin = async () => {
  try {
    const response = await login({ email: "user@example.com", password: "pass" });
    // Token is automatically stored by axios interceptor
    // User data stored in AuthContext
  } catch (error) {
    console.error("Login failed:", error);
  }
};
```

### Using Product Service
```javascript
import { getProducts, createProduct, updateProduct } from "../services/productService";

// Get products
const products = await getProducts({ category: "pipes", page: 1 });

// Create product
const newProduct = await createProduct({
  sku: "SKU001",
  name: "Product Name",
  price: 1000,
  quantity: 50,
  images: [file1, file2]
});
```

### Using Dashboard Service
```javascript
import { getDashboardStats, getPopularProducts } from "../services/dashboardService";

// Get dashboard data
const stats = await getDashboardStats();
const popular = await getPopularProducts(10);
```

---

## Error Handling

All services use try-catch blocks and throw errors that can be caught in components:

```javascript
try {
  const data = await someAPICall();
} catch (error) {
  // error.response?.data contains API error response
  // error.message contains error message
  console.error("API Error:", error);
}
```

---

## Authentication Token Management

- Tokens are automatically added to requests via axios interceptor
- Tokens are stored in localStorage (if "Remember Me" is checked) or sessionStorage
- On 401 errors, tokens are cleared and user is redirected to login
- Token refresh can be implemented using the refresh token endpoint

---

## Notes

1. **Actual Endpoints:** The actual endpoint paths may differ from what's documented here. Please refer to your Postman documentation: https://documenter.getpostman.com/view/38899066/2sAYk8wPEi

2. **Request/Response Formats:** The exact request and response formats should match your backend API. Update the service files accordingly.

3. **Error Responses:** Error response formats may vary. Adjust error handling in services as needed.

4. **File Uploads:** Product image uploads use FormData. Ensure backend accepts multipart/form-data.

5. **Pagination:** Many list endpoints support pagination. Use query parameters like `page`, `limit`, `offset`.

---

## Next Steps

1. Review the actual API documentation at the Postman link
2. Update endpoint paths in service files to match your API
3. Adjust request/response data structures as needed
4. Test each endpoint integration
5. Update components to use the new services

