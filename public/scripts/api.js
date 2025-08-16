// api.js
const API_BASE = "https://newsapi.org/v2";
const API_KEY = "30a1c5565a0d4848800f452c4150926e"; // <-- paste your NewsAPI key here

// Fetch top headlines
async function getTopHeadlines(country = "us") {
    const url = `${API_BASE}/top-headlines?country=${country}&apiKey=${API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed to fetch top headlines");
    }
    const data = await response.json();
    return data.articles;
}

// Fetch by category
async function getByCategory(category = "technology") {
    const url = `${API_BASE}/top-headlines?category=${category}&country=us&apiKey=${API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed to fetch category news");
    }
    const data = await response.json();
    return data.articles;
}

// Fetch by search query
async function searchNews(query) {
    const url = `${API_BASE}/everything?q=${encodeURIComponent(query)}&apiKey=${API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed to fetch search results");
    }
    const data = await response.json();
    return data.articles;
}

