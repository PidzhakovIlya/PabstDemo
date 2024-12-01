import axios from "axios";


export const service = axios.create({
  baseURL: "https://dvs2.idware.net/",
  headers: {
    Authorization: "Bearer sk_cf140831-7c72-4f54-8341-0b78b25b8e06",
    // Authorization: `Bearer ${}`,
    "Content-Type": "application/json"
  }
});