# 🌤️ WeatherNow

**WeatherNow** is a responsive Node.js weather application that fetches real-time weather information using the OpenWeatherMap API. Simply enter a city name and get the current weather, temperature, humidity, and more.

---

## 📌 Features

- 🔍 Search weather by city name
- 🌡️ Displays current temperature, condition, wind speed, and humidity
- 🎨 Clean UI with EJS and Font Awesome
- ⚙️ Built with Node.js, Express, Axios
- 📱 Responsive and mobile-friendly design

---

## 🧰 Tech Stack

- **Frontend:** HTML, CSS, EJS, Font Awesome
- **Backend:** Node.js, Express.js
- **API:** OpenWeatherMap API (https://openweathermap.org/api)
- **Dependencies:** express, axios, body-parser, ejs

---

## 🚀 Getting Started

### 1. Clone the Repository

git clone https://github.com/your-username/weathernow.git  
cd weathernow

### 2. Install Dependencies

npm install

### 3. Add Your OpenWeatherMap API Key

- Sign up at https://openweathermap.org/ and get your API key.
- Open `app.js` and replace this line:

    const apikey = "your_api_key_here";

✅ Optional: Use a `.env` file to store the key securely:

1. Install dotenv:

    npm install dotenv

2. Create a `.env` file:

    API_KEY=your_api_key_here

3. Then update `app.js` like this:

    import dotenv from "dotenv";  
    dotenv.config();  
    const apikey = process.env.API_KEY;

4. Make sure to add `.env` to `.gitignore` to keep it private.

---

### 4. Run the Application

node app.js

Then open your browser and go to:  
http://localhost:3000

---

## 📁 Project Structure

weathernow/  
├── public/  
│   └── styles/  
│       └── style.css  
├── views/  
│   └── index.ejs  
├── app.js  
├── package.json  
└── README.md

---

## 🖼️ Screenshot

_Add a screenshot of your app running here (optional)_

---

## 🌐 Live Demo

If deployed, add the link below:  
Example: https://weathernow-app.onrender.com

---

## 📜 License

This project is licensed under the MIT License.  
You are free to use, modify, and distribute this software with attribution.

---

## 🙌 Acknowledgements

- OpenWeatherMap API
- Font Awesome
- EJS Templating

---

## 👨‍💻 Author

**Jayashish Muppur**  
🔗 LinkedIn: https://www.linkedin.com/in/jayashish-muppur/  
💻 GitHub: https://github.com/jayashish05
