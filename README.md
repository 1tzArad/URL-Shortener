# 🚀 URL Shortener  
A **simple and efficient URL shortener** built with **TypeScript, Node.js, and Express.js**. This project allows users to shorten long URLs and get redirected when accessing the short links.  

## 🌟 Features  
✅ **Shorten URLs** – Convert long URLs into short, easy-to-share links  
✅ **Redirect URLs** – Automatically redirect users from a short link to the original URL  
✅ **Click Tracking** – Track the number of times a shortened URL is accessed  
✅ **MongoDB Integration** – Store URLs in a database for persistence  
✅ **Fast and Lightweight** – Uses **Nanoid** to generate short, unique identifiers  

## 🛠 Tech Stack  
- **Node.js + Express.js** – Backend framework  
- **TypeScript** – Strongly typed JavaScript for better development experience  
- **MongoDB + Mongoose** – Database for storing URLs  
- **Nanoid** – Generates short and unique IDs  
- **Cors + Dotenv** – Handles environment variables and security  

## 📦 Installation  
1️⃣ **Clone the repository**  
```bash
git clone https://github.com/1tzArad/URL-Shortener.git
cd url-shortener
```
2️⃣ **Install dependencies**  
```bash
npm install
```
3️⃣ **Set up environment variables**  
Create a `.env` file and add:  
```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```
4️⃣ **Start the server**  
```bash
npm run dev
```

## 🚀 API Usage  

### **1️⃣ Shorten a URL**  
**Endpoint:**  
```http
POST /shorten
Content-Type: application/json
```
**Request Body:**  
```json
{
  "originalUrl": "https://example.com/some-long-url"
}
```
**Response:**  
```json
{
  "shortUrl": "http://localhost:3000/abc123"
}
```

### **2️⃣ Redirect to Original URL**  
Access `http://localhost:3000/abc123` in your browser, and it will redirect to the original URL.

## 🏗 Future Improvements  
🔹 Add **Redis caching** for faster lookups  
🔹 Implement **custom short URLs** (e.g., `/yourname`)  
🔹 Track **click analytics** for each shortened URL  
🔹 Build a **frontend UI** for easy access  

## 📜 License  
This project is licensed under the **MIT License**.  