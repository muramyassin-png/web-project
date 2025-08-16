// api.js (using Currents API)
const API_BASE = "https://api.currentsapi.services/v1";
const API_KEY = "S8cxlxY99M9kVZVhQilw5z7bdnaLwe4ijjcJzaBwEGlPTKtL"; // <-- put your key here

// Fetch latest news (like top headlines)
async function getTopHeadlines() {
    const url = `${API_BASE}/latest-news?apiKey=${API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed to fetch latest news");
    }
    const data = await response.json();
    return data.news; // Currents API uses "news" instead of "articles"
}

// Fetch by category (Currents uses 'category' param)
async function getByCategory(category = "technology") {
    const url = `${API_BASE}/latest-news?category=${category}&apiKey=${API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed to fetch category news");
    }
    const data = await response.json();
    return data.news;
}

// Fetch by search query
async function searchNews(query) {
    const url = `${API_BASE}/search?keywords=${encodeURIComponent(query)}&apiKey=${API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed to fetch search results");
    }
    const data = await response.json();
    return data.news;
}
console.log("api.js loaded!");
