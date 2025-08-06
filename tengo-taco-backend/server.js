// server.js

require('dotenv').config(); 
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const EDAMAM_APP_ID = process.env.EDAMAM_APP_ID;
const EDAMAM_API_KEY = process.env.EDAMAM_API_KEY;

// Endpoint for searching recipes
app.get('/api/search', async (req, res) => {
    const userQuery = req.query.q;
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${userQuery}&app_id=${EDAMAM_APP_ID}&app_key=${EDAMAM_API_KEY}`;
    try {
        const apiResponse = await fetch(url, { headers: { 'Edamam-Account-User': 'tengo-taco-test-user' } });
        const data = await apiResponse.json();
        res.json(data);
    } catch (error) {
        console.error("Error in /api/search:", error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

// Endpoint for fetching a single recipe by ID
app.get('/api/recipe/:id', async (req, res) => {
    const recipeId = encodeURIComponent(req.params.id);
    const url = `https://api.edamam.com/api/recipes/v2/${recipeId}?type=public&app_id=${EDAMAM_APP_ID}&app_key=${EDAMAM_API_KEY}`;
    try {
        const apiResponse = await fetch(url, { headers: { 'Edamam-Account-User': 'tengo-taco-test-user' } });
        const data = await apiResponse.json();
        res.json(data);
    } catch (error) {
        console.error("Error in /api/recipe/:id:", error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

// Endpoint for creating a shopping list
app.post('/api/shopping-list', async (req, res) => {
    // *** FINAL UPDATE: Added beta=true and shopping-cart=true to the URL ***
    const url = `https://api.edamam.com/api/shopping-list/v2?app_id=${EDAMAM_APP_ID}&app_key=${EDAMAM_API_KEY}&beta=true&shopping-cart=true`;
    console.log("Proxying shopping list request with BETA flag:", url);

    const receivedRecipe = req.body;

    const edamamPayload = {
        "entries": [
            {
                "quantity": 1,
                "measure": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
                "item": receivedRecipe.uri
            }
        ]
    };

    try {
        const apiResponse = await fetch(url, {
            method: 'POST',
            headers: {
                'Edamam-Account-User': 'tengo-taco-test-user',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(edamamPayload)
        });
        
        const data = await apiResponse.json();
        console.log('Response from Edamam Shopping List API:', data);
        res.json(data);

    } catch (error) {
        console.error("Error in /api/shopping-list:", error);
        res.status(500).json({ error: 'Failed to create shopping list' });
    }
});


app.listen(PORT, () => {
    console.log(`Tengo Taco proxy server running on http://localhost:${PORT}`);
});
