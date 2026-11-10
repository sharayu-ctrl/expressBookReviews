// Axios client for the public book APIs.
// Start the Express server in another terminal: npm start
const axios = require("axios");
const BASE_URL = process.env.API_BASE_URL || "http://localhost:5000";

async function getAllBooks() {
  const response = await axios.get(`${BASE_URL}/`);
  return response.data;
}
async function getBooksByISBN(isbn) {
  const response = await axios.get(`${BASE_URL}/isbn/${encodeURIComponent(isbn)}`);
  return response.data;
}
async function getBooksByAuthor(author) {
  const response = await axios.get(`${BASE_URL}/author/${encodeURIComponent(author)}`);
  return response.data;
}
async function getBooksByTitle(title) {
  const response = await axios.get(`${BASE_URL}/title/${encodeURIComponent(title)}`);
  return response.data;
}
async function getBookReviews(isbn) {
  const response = await axios.get(`${BASE_URL}/review/${encodeURIComponent(isbn)}`);
  return response.data;
}

module.exports = {
  getAllBooks, getBooksByISBN, getBooksByAuthor, getBooksByTitle, getBookReviews
};

// Optional CLI examples:
// node -e "require('./general').getAllBooks().then(console.log).catch(console.error)"
// node -e "require('./general').getBooksByISBN('1').then(console.log).catch(console.error)"
