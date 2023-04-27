// Import the axios library to make HTTP requests
import axios from "axios";

// Define a fetcher function that takes a URL as an argument
const fetcher = (url: string) => {
  // Use axios to send a GET request to the provided URL
  // and return the data from the response
  return axios.get(url).then((res) => res.data);
};

// Export the fetcher function as the default export
export default fetcher;