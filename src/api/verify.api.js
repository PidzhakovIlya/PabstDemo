import { service } from "./common/service.api.js";

export const verifyApi = {
  verify(data){
    return service.post("/api/v4/verify", data )
  }
}