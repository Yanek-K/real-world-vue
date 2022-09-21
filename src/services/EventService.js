import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/Yanek-K/real-world-vue",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
});

export default {
  getEvents() {
    return apiClient.get("/events");
  },
};
