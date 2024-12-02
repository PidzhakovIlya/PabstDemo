import axios from "axios";
import { getToken } from "../../../config/config.token.js";

const token = getToken()

export const service = axios.create({
  baseURL: "https://dvs2.idware.net/",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json"
  }
});