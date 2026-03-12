# FoodHub Frontend 🍱

## Overview

The FoodHub Frontend is the client-side application of the FoodHub meal
ordering platform.\
It provides the user interface where customers, providers, and admins
interact with the system.

The frontend communicates with the backend through REST APIs to fetch
meals, manage orders, and handle authentication.

------------------------------------------------------------------------

## Tech Stack

-   React / Next.js
-   Tailwind CSS or Bootstrap
-   Axios (API requests)
-   React Router (routing)
-   Context API / Redux (state management)

------------------------------------------------------------------------

## Features

### Public Features

-   View homepage with featured meals
-   Browse all meals
-   Filter meals by category, cuisine, or price
-   View provider profiles
-   View meal details

### Customer Features

-   User registration and login
-   Add meals to cart
-   Checkout with delivery address
-   View order history
-   Track order status
-   Manage profile

### Provider Features

-   Provider dashboard
-   Manage menu items (add, edit, delete)
-   View incoming orders
-   Update order status

### Admin Features

-   Admin dashboard
-   Manage users
-   View all orders
-   Manage categories

------------------------------------------------------------------------

## Frontend Routes

### Public

-   `/` -- Home
-   `/meals` -- Browse meals
-   `/meals/:id` -- Meal details
-   `/providers/:id` -- Provider profile
-   `/login` -- Login
-   `/register` -- Register

### Customer

-   `/cart`
-   `/checkout`
-   `/orders`
-   `/orders/:id`
-   `/profile`

### Provider

-   `/provider/dashboard`
-   `/provider/menu`
-   `/provider/orders`

### Admin

-   `/admin`
-   `/admin/users`
-   `/admin/orders`
-   `/admin/categories`

------------------------------------------------------------------------

## Folder Structure

src/ components/ pages/ services/ context/ utils/ assets/

------------------------------------------------------------------------

## Running the Frontend

1.  Install dependencies

npm install

2.  Start development server

npm run dev

or

npm start

3.  Open browser

http://localhost:3000

------------------------------------------------------------------------

## Environment Variables

Example `.env`

REACT_APP_API_URL=http://localhost:5000/api

------------------------------------------------------------------------

## Responsibilities of Frontend

-   Display UI and user interactions
-   Call backend APIs
-   Handle authentication tokens
-   Manage application state
