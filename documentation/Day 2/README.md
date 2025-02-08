# Shop.co Ecommerce Shopping Platform

## Author Information
**Author:** Muhammad Naveed **
**Slot:** Saturday Night **
**Role Number:** 28771 **  

---

## Overview
The document presents the technical foundation and improved workflow of the **Shop.co Ecommerce Shopping Platform**. It encompasses system architecture, principal workflows, API endpoints, and a comprehensive technical roadmap aimed at delivering an exceptional e-commerce experience.


## High-Level Diagram

```plaintext
[Frontend (Next.js)] 
        |
        v
  [Sanity CMS] <--------> [Product Data (Mock) API]
        |
        ^ 
        | 
[Third-Party APIs] <----> [(ShipEngine) Shipment Tracking API]
        | 
        |
        v
 [Payment Gateway (Stripe)] 
        |
        v
 [Authentication (Clerk)]



## Component Descriptions

### Frontend (Next.js)
- Develops an intuitive user interface for product browsing, order management, and user authentication.
- Dynamically presents data by interfacing with backend APIs.

### Sanity CMS
- Oversees the management of product details, user information, orders, and inventory in a centralized system.
- Facilitates data sharing with the frontend via APIs.

### Third-Party APIs
- **Shipment Tracking API (ShipEngine):** Delivers real-time shipping updates and tracking details.
- **Payment Gateway (Stripe):** Executes secure payment processing and transaction confirmation.

### Authentication (Clerk)
- Manages user registration, login, and session control.
- Collaborates with Sanity CMS to securely maintain user information.




## Key Workflows

### 1. User Registration
- Users register via the frontend utilizing Clerk.
- Registration information is securely stored within Sanity CMS.

### 2. Product Browsing
- Users navigate product categories on the frontend.
- The Sanity CMS API supplies product information such as name, price, stock status, description, and images.
- The frontend dynamically displays product listings.

### 3. Order Placement
- Users add products to their cart and proceed to the checkout process.
- Order details (products, quantities, shipping address) are transmitted to Sanity CMS.
- Payments are processed securely through Stripe.

### 4. Shipment Tracking
- Shipment details are updated via ShipEngine after order placement.
- Real-time tracking information is displayed to users on the frontend.

### 5. Inventory Management
- Stock levels are managed within Sanity CMS.
- Real-time updates ensure that only available products can be added to the cart.
### 5. Inventory Management
- Stock levels are managed in Sanity CMS.
- Real-time updates ensure only in-stock products can be added to the cart.





# API Documentation

| Endpoint               | Method | Purpose                                | Response Example                                                            |
|------------------------|--------|----------------------------------------|----------------------------------------------------------------------------|
| `/products`            | GET    | Retrieve all product details           | `[ { "name": "Product Name", "slug": "product-slug", "price": 100 } ]`      |
| `/order`               | POST   | Submit new order information           | `{ "orderId": 123, "status": "success" }`                                   |
| `/shipment-tracking`   | GET    | Obtain real-time shipping updates      | `{ "trackingId": "AB123", "status": "In Transit" }`                         |
| `/delivery-status`     | GET    | Retrieve express delivery information  | `{ "orderId": 456, "deliveryTime": "30 mins" }`                             |
| `/inventory`           | GET    | Fetch real-time stock levels           | `{ "productId": 789, "stock": 50 }`                                         |
| `/cart`                | POST   | Add product to shopping cart           | `{ "cartId": 101, "items": [...] }`                                         |

---

# Sanity Schema for Product

```javascript
export const product = {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "image",
      title: "Product Image",
      type: "image",
    },
    {
      name: "name",
      title: "Product Title",
      type: "string",
    },
    {
      name: "price",
      title: "Product Price",
      type: "number",
    },
    {
      name: "price_id",
      title: "Stripe Price ID",
      type: "string",
    },
    {
      name: "description",
      title: "Product Description",
      type: "text",
    },
    {
      name: "slug",
      type: "slug",
      title: "Product Slug",
      options: {
        source: "name",
      },
    },
    {
      name: "stock",
      type: "number",
      title: "Stock",
    },
  ],
};



# Development Phase

## 1. Authentication
- **User Registration & Login:** Implement user registration and login using **Clerk**.
- **Clerk Integration with Sanity CMS:** Link **Clerk** for user data storage in **Sanity CMS**.

## 2. Product Management
- **Mock API:** Develop a mock API to manage product data.
- **Store Products in Sanity CMS:** Save product details such as name, price, description, etc., in **Sanity CMS**.
- **Display Products:** Fetch and dynamically display product data on frontend pages.

## 3. Cart and Wishlist
- **Add-to-Cart Functionality:**
  - Implement the ability to add products to the cart.
  - Use **Redux** to manage cart state, enabling multiple product additions and item removals.
- **Stock Check:** Ensure users can only add products to the cart if they are in stock.
- **Out-of-Stock to Wishlist:** Allow users to add out-of-stock products to their wishlist.
- **Cart Summary:** Display the total bill and provide a **"Proceed to Checkout"** button on the cart page.

## 4. Payment Integration
- **Stripe Integration:** Integrate **Stripe** for secure payment processing.
- **Test Account:** Utilize the **Stripe test account** during development to simulate payments.
- **Payment Handling:** Manage payment success and failure scenarios and display relevant feedback to users.

## 5. Shipment Tracking
- **ShipEngine Integration:** Connect the **ShipEngine** API to track shipments in real-time.
- **Tracking Numbers:** Generate and display tracking numbers for orders.
- **Order Tracking:** Enable users to track their shipments in real-time.

## 6. Inventory Management
- **Real-Time Stock API:** Develop an API that fetches real-time stock data from **Sanity CMS**.
- **Stock Updates:** Automatically update product stock levels when an order is placed.
- **Out-of-Stock Prevention:** Prevent users from adding out-of-stock items to their cart.



# Conclusion

The technical foundation presented details the architecture, workflows, and API endpoints for the **Shop.co** eCommerce platform. This platform is designed to deliver a seamless online shopping experience through the following features:

- **Robust Authentication:** Implementing secure user registration and login using Clerk.
- **Efficient Inventory Management:** Utilizing Sanity CMS for real-time stock updates and product management.
- **Real-Time Shipment Tracking:** Integrating ShipEngine for order tracking and providing users with real-time shipment information.
- **Smooth Shopping Experience:** Enabling features such as adding to the cart, wishlist management, secure payment processing via Stripe, and an easy checkout process.

The objective of **Shop.co** is to offer users a hassle-free shopping experience while ensuring the platform remains highly scalable and performant. 

"# Hackathon3" 
