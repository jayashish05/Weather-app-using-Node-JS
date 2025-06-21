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
- **API:** [OpenWeatherMap API](https://openweathermap.org/api)
- **Dependencies:** `express`, `axios`, `body-parser`, `ejs`

---

## 🚀 Getting Started

### 1. Clone the Repository
git clone https://github.com/your-username/weathernow.git
cd weathernow
2. Install Dependencies
bash
Copy
Edit
npm install
3. Add Your OpenWeatherMap API Key
Sign up at OpenWeatherMap and get your API key.

Open app.js and replace the placeholder:

js
Copy
Edit
const apikey = "your_api_key_here";
✅ Optional: Use a .env file for security (requires installing dotenv):

bash
Copy
Edit
npm install dotenv
Create a .env file:

ini
Copy
Edit
API_KEY=your_api_key_here
Then use in app.js:

js
Copy
Edit
import dotenv from "dotenv";
dotenv.config();
const apikey = process.env.API_KEY;
Add .env to .gitignore to keep it private.

4. Run the Application
bash
Copy
Edit
node app.js
Then open your browser and go to:

arduino
Copy
Edit
http://localhost:3000
📁 Project Structure
pgsql
Copy
Edit
weathernow/
├── public/
│   └── styles/
│       └── style.css
├── views/
│   └── index.ejs
├── app.js
├── package.json
└── README.md
🖼️ Screenshot
Add a screenshot of your app running here

🌐 Live Demo
If deployed, place the link below

Example: https://weathernow-app.onrender.com

📜 License
This project is licensed under the MIT License.
You are free to use, modify, and distribute this software with attribution.

🙌 Acknowledgements
OpenWeatherMap API

Font Awesome

EJS

👨‍💻 Author
Jayashish Muppur
🔗 LinkedIn
💻 GitHub

yaml
Copy
Edit
