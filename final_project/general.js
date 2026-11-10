
// Axios client for the public book APIs.
// Start the Express server in another terminal: npm start

const axios = require("axios");
const BASE_URL = process.env.API_BASE_URL || "http://localhost:5000";

// Common error handler for Axios requests
function handleAxiosError(error) {
  if (error.response) {
    const status = error.response.status;
    const message =
      error.response.data?.message || error.response.statusText;

    throw new Error(`API Error (${status}): ${message}`);
  }

  if (error.request) {
    throw new Error(
      "No response received from the server. Please check whether the server is running."
    );
  }

  throw new Error(`Request failed: ${error.message}`);
}

// Retrieve all books
async function getAllBooks() {
  try {
    const response = await axios.get(`${BASE_URL}/`);
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
}

// Retrieve a book by ISBN
async function getBooksByISBN(isbn) {
  try {
    const response = await axios.get(
      `${BASE_URL}/isbn/${encodeURIComponent(isbn)}`
    );
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
}

// Retrieve books by author
async function getBooksByAuthor(author) {
  try {
    const response = await axios.get(
      `${BASE_URL}/author/${encodeURIComponent(author)}`
    );
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
}

// Retrieve books by title
async function getBooksByTitle(title) {
  try {
    const response = await axios.get(
      `${BASE_URL}/title/${encodeURIComponent(title)}`
    );
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
}

// Retrieve reviews for a book
async function getBookReviews(isbn) {
  try {
    const response = await axios.get(
      `${BASE_URL}/review/${encodeURIComponent(isbn)}`
    );
    return response.data;
  } catch (error) {
    handleAxiosError(error);
  }
}

module.exports = {
  getAllBooks,
  getBooksByISBN,
  getBooksByAuthor,
  getBooksByTitle,
  getBookReviews
};

// Optional CLI examples:
// node -e "require('./general').getAllBooks().then(console.log).catch(console.error)"
// node -e "require('./general').getBooksByISBN('1').then(console.log).catch(console.error)"

