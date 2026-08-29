## ShopEase — Full-Stack E-Commerce Application

A full-stack e-commerce web application built with the MERN stack, featuring a product catalog, dynamic cart management with real-time price calculation, and a responsive UI built with Tailwind CSS and DaisyUI.

## Overview
ShopEase is a shopping cart application where users can browse products, view detailed product pages, and manage their cart with live price/shipping/tax calculations. The project was built to practice real-world frontend architecture — global state management with Redux Toolkit, API data fetching with RTK Query, and a connected Express/MongoDB backend.

## Features

- Home page — dynamic product grid fetched from a live REST API
- Product details page — individual product view with ratings and add-to-cart
- Cart management — add/remove items, adjust quantities, with automatic recalculation of item price, shipping, tax, and total
- Cart persistence — cart state saved to localStorage, survives page refresh
- Theme toggle — light/dark mode using DaisyUI + a custom Redux-synced hook
- RTK Query integration — efficient API data fetching and caching, no manual useEffect/fetch boilerplate
- Responsive design — built mobile-first with Tailwind CSS

## In Progress / Roadmap
 - User authentication (login/register with JWT)
 - Checkout & shipping flow
 - Product search and filtering
 - User reviews and ratings submission
 - Order history and order confirmation

## Tech Stack
## Frontend
- React (Vite)
- Redux Toolkit + RTK Query
- Tailwind CSS + DaisyUI
- React Router

## Backend

- Node.js + Express
- MongoDB + Mongoose
- CORS, dotenv
