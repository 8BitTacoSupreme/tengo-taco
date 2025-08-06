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

* **Node.js:** You must have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
* **Flox:** You must have the Flox CLI installed. You can find installation instructions at [flox.dev](https://flox.dev/).
* **Edamam API Key:** You need a valid Application ID and Application Key from the [Edamam Developer Portal](https://developer.edamam.com/) with access to the Recipe Search API v2.

### 1. Clone the Repository

First, clone the project to your local machine:# Tengo Taco 🌮

Tengo Taco is a simple and powerful web application that helps you find the perfect taco recipe based on the ingredients you have on hand. It fetches recipes from the Edamam API, displays them in a clean user interface, and provides a direct link to get the ingredients delivered via Instacart.

This project is built as a prototype using vanilla HTML, CSS, and JavaScript for the frontend, and a Node.js/Express backend that acts as a secure proxy to handle API requests.

## Features

- **Ingredient-Based Search:** Enter an ingredient (e.g., "shrimp", "chicken") to find relevant taco recipes.
- **Smart Fallback:** If no taco-specific recipes are found, the app automatically broadens the search to find any recipe with your ingredient.
- **Recipe Details Modal:** Click on any recipe card to view a pop-up with the full ingredient list and a link to the original cooking instructions.
- **Instacart Integration:** With a single click, generate a shopping list and open a pre-populated Instacart cart in a new tab.
- **Secure Backend Proxy:** Protects your API keys by keeping them on the server, never exposing them to the user's browser.
- **Reproducible Environment:** Uses Flox to ensure the correct Node.js environment is used for the backend, making setup a breeze.

## Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Backend:** Node.js, Express.js
- **Dependencies:** `node-fetch`, `cors`
- **Environment Management:** Flox

## 🚀 Setup and Installation

To get this project running locally, follow these steps.

### Prerequisites

- **Node.js:** You must have Node.js installed. You can download it from [nodejs.org](https://nodejs.org).
- **Flox:** You must have the Flox CLI installed. You can find installation instructions at [flox.dev](https://flox.dev).
- **Edamam API Key:** You need a valid Application ID and Application Key from the Edamam Developer Portal with access to the Recipe Search API v2.

### 1. Clone the Repository

First, clone the project to your local machine:

```bash
git clone https://github.com/8BitTacoSupreme/tengo-taco.git
cd tengo-taco
```

### 2. Configure Your API Keys

This is the most important step. Your private API credentials must be added to the backend server.

- Navigate to the backend directory: `cd tengo-taco-backend`
- Open the `server.js` file in a text editor.
- Find the following lines at the top of the file:

```javascript
const EDAMAM_APP_ID = 'YOUR_APP_ID_HERE';
const EDAMAM_API_KEY = 'YOUR_API_KEY_HERE';
```

- **Replace the placeholder values** with your actual Edamam Application ID and Application Key.

**⚠️ Security Warning:** This method hardcodes your secret keys into the application code. While simple for local testing, **never commit this file to a public repository with the keys filled in.** Always remove them before committing. For a more secure and standard approach, consider using a `.env` file.

### 3. Install Backend Dependencies

Now, we'll install the Node.js packages required for the server.

- Make sure you are still inside the `tengo-taco-backend` directory.
- Run the following command:

```bash
npm install
```

This will read your `package.json` file and install `express`, `cors`, and `node-fetch`.

## ▶️ Running the Application

The application has two parts that must be running simultaneously.

### 1. Start the Backend Server

The backend server must be running to handle API calls.

- Navigate to the `tengo-taco-backend` directory.
- Activate the Flox environment:

```bash
flox activate
```

- Start the server:

```bash
node server.js
```

- You should see a confirmation message in your terminal: `Tengo Taco proxy server running on http://localhost:3001`
- **Leave this terminal window open.**

### 2. Run the Frontend

- While the server is running, navigate to the root `tengo-taco` folder.
- Open the `index.html` file in your favorite web browser.

You can now use the application!
