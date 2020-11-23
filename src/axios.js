import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  // baseURL: "https://us-central1-clone-22228.cloudfunctions.net/api",
  baseURL: "https://us-central1-ecomm-app-666.cloudfunctions.net/api",
  // baseURL: 'https://us-central1-challenge-4b2b2.cloudfunctions.net/api'
  // baseURL:"http://localhost:5001/challenge-4b2b2/us-central1/api",
});

export default instance;
