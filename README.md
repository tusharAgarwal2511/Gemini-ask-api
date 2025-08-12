# Gemini Ask API

A simple Node.js API that uses Google’s Gemini models to provide answers to your questions.

---

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white) 
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white) 
![Google Gemini API](https://img.shields.io/badge/Google%20Gemini-GenerativeAI-blue?logo=google&logoColor=white) 
![Render](https://img.shields.io/badge/Render-303030?logo=render&logoColor=white) 
![License](https://img.shields.io/badge/License-ISC-blue)

---

## 🚀 Features

- Single POST endpoint to send a question and get an AI-generated answer.
- Easy to use and integrate.
- Hosted on Render’s free tier.

---

## 🌐 Base URL

https://gemini-ask-api.onrender.com


---

## 💻 Tech Stack

- [**Node.js**](https://nodejs.org/) – JavaScript runtime 🟢  
- [**Express**](https://expressjs.com/) – Web framework for Node.js ⚡  
- [**Google Gemini API**](https://developers.generativeai.google/) – AI language model for answering questions 🤖  
- [**Render**](https://render.com/) – Hosting platform (free tier used) ☁️

---

## 🧠 Endpoint

### `POST /ask`

- **Description:** Sends a question and receives an answer from Gemini.
- **Request Body:**

```json
{
  "question": "Hello, how are you?"
}
```

- **Response Object:**
```json
{
    "answer": "I am doing well, thank you for asking!  How are you today?"
}
```

---

## 🛠 Getting Started

### Prerequisites

- Node.js installed on your machine
- A Gemini API key

### Setup & Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/tusharagarwal2511/gemini-ask-api.git
   cd gemini-ask-api
    ```
2. Install dependencies:

    ```bash
   npm install
    ```
3. Create a .env file in the root directory and add your Gemini API key:

   GEMINI_API_KEY=your_api_key_here
    
4. Start the server:

    ```bash
    node server.js
    ```

5. Your API will be running locally at http://localhost:3000.

---

## ⚠️ Important Notes

- This API is hosted on Render’s free tier.  
- The server may spin down after about 15 minutes of inactivity.  
- The first request after inactivity can take up to 50 seconds or more due to the server “waking up.”  
