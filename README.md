# Tengo Taco 🌮

Tengo Taco is a simple and powerful web application that helps you find the perfect taco recipe based on the ingredients you have on hand. It fetches recipes from the Edamam API, displays them in a clean user interface, and provides a direct link to get the ingredients delivered via Instacart.

This project is built as a prototype using vanilla HTML, CSS, and JavaScript for the frontend, and a Node.js/Express backend that acts as a secure proxy to handle API requests.

## Features

* **Ingredient-Based Search:** Enter an ingredient (e.g., "shrimp", "chicken") to find relevant taco recipes.
* **Smart Fallback:** If no taco-specific recipes are found, the app automatically broadens the search to find any recipe with your ingredient.
* **Recipe Details Modal:** Click on any recipe card to view a pop-up with the full ingredient list and a link to the original cooking instructions.
* **Instacart Integration:** With a single click, generate a shopping list and open a pre-populated Instacart cart in a new tab.
* **Secure Backend Proxy:** Protects your API keys by keeping them on the server, never exposing them to the user's browser.
* **Reproducible Environment:** Uses Flox to ensure the correct Node.js environment is used for the backend, making setup a breeze.

## Tech Stack

* **Frontend:** HTML5, CSS3, Vanilla JavaScript
* **Backend:** Node.js, Express.js
* **Dependencies:** `node-fetch`, `cors`
* **Environment Management:** Flox

## 🚀 Setup and Installation

To get this project running locally, follow these steps.

### Prerequisites

* **Node.js:** You must have Node.js installed. You can download it from [nodejs.org](https://nodejs
