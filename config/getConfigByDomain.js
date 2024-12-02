import { config } from "./config.js";


export function getConfigByDomain() {
const hostname = window.location.hostname;
  return config[hostname] ;
}