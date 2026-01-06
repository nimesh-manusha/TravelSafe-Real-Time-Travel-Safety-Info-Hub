# 🌍 TravelSafe — Real‑Time Travel Safety Info Hub

A modern web application that provides travelers with real‑time travel safety insights, weather, and country data. Using multiple public APIs, TravelSafe helps users assess travel risk and make informed decisions before visiting a destination.

---

## 📌 Description

TravelSafe is a real‑time travel safety dashboard that delivers travel advisory scores, COVID‑19 statistics, current weather, and country information in one place. Search any location and instantly view essential safety and environmental details to plan your trip with confidence.

---

## 🚀 Features

- 🔍 Search travel destinations by name
- 📊 Real‑time travel advisory & safety scores
- 🦠 Live COVID‑19 cases and health info
- ☀️ Current weather and forecast
- 🇨🇮 Country details (capital, region, currency)
- 🔐 Google OAuth login for secure access
- 💾 User preferences saved for personalized use

---

## 🛠️ Built With

| Technology     | Purpose |
|---------------|---------|
| **HTML5**     | UI structure |
| **CSS3**      | Styling & layout |
| **JavaScript**| Data handling & API integration |
| **Node.js**   | Server & routing |
| **Express.js**| Backend framework |
| **APIs**      | Travel safety, COVID, weather, country data |

---

## 📁 Project Structure
TravelSafe-Real-Time-Travel-Safety-Info-Hub/
├── public/
│ ├── index.html
│ ├── css/
│ └── js/
├── server.js
├── routes/
├── package.json
└── README.md


---

## 🧩 How It Works

1. User enters a destination name in the search bar.
2. App retrieves travel safety, COVID, weather, and country data from multiple APIs.
3. Results are shown with key metrics and visual feedback.
4. Users can sign in with their Google account for a personalized experience.

---

## 📦 Installation & Setup

### 1. Clone the Repo
```bash
git clone https://github.com/nimesh-manusha/TravelSafe-Real-Time-Travel-Safety-Info-Hub.git
```
Install Dependencies
npm install

3. Set Up Environment Variables

Create a .env file with your API keys:

TRAVEL_SAFE_API_KEY=your_api_key
WEATHER_API_KEY=your_api_key
COVID_API_KEY=your_api_key
GOOGLE_CLIENT_ID=your_google_oauth_id
GOOGLE_CLIENT_SECRET=your_google_oauth_secret
SESSION_SECRET=your_session_secret

4. Run the App
npm start

5. Open in Browser

Visit: http://localhost:3000

📄 Usage

Search a place (e.g., “Japan”)

View travel safety score, weather, COVID stats

Sign in with Google to save preferences

Plan trips with reliable data before you go

🤝 Contributing

Contributions are welcome! You can:

Add more API integrations

Improve UI/UX and responsiveness

Add caching for performance

Add support for multiple languages

To contribute:

Fork the repository

Create a new branch (git checkout -b feature)

Commit and push

Create a Pull Request

📄 License

This project is open‑source and available for personal and educational use.

👨‍💻 Author

Nimesh Manusha
GitHub: https://github.com/nimesh‑manusha

⭐ If this project helps you, don’t forget to give it a star!
