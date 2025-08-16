
// confirm the file is loaded
console.log("✅ api.js loaded");

// Currents API setup
const API_BASE = "https://api.currentsapi.services/v1";
const API_KEY = "YOUR_API_KEY_HERE"; // <-- replace with your real key

// Fetch latest news
async function getTopHeadlines() {
    const url = `${API_BASE}/latest-news?apiKey=${API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed to fetch news");
    }
    const data = await response.json();
    console.log("API Response:", data); // debug output
    return data.news; // Currents API returns results in "news"
}
