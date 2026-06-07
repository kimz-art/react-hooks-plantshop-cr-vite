## Setup

1. Run `npm install` in your terminal.
2. Run `npm run server` — this starts your backend on port `6001`.
3. In a new terminal, run `npm run dev`.

Open http://localhost:6001/plants in the browser to verify your backend is working before you proceed!

## Endpoints

Base URL: `http://localhost:6001`

### GET /plants
Returns all plants.

### POST /plants
Adds a new plant. Required headers: `{ "Content-Type": "application/json" }`

Request body:
```json
{
  "name": "string",
  "image": "string",
  "price": number
}
```

## Features

- See all plants on page load
- Add a new plant via the form (persisted to backend)
- Mark a plant as sold out (local state only)
- Search/filter plants by name in real time

PlantPage.jsx