//import { getLocalStorage } from "../utils/localStorage";
import { XSecretKey, XApiAppId } from "./consts";

export const createHeaders = () => ({
  headers: {
    'Content-Type': 'application/json',
    //'Authorization': `Bearer ${getLocalStorage('user')?.access_token}`,
    'x-secret-key': XSecretKey,
    'X-Api-App-Id': XApiAppId
  }
})