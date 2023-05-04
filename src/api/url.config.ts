import { XSecretKey, XApiAppId } from "./consts";

export const createHeaders = () => ({
  headers: {
    'Content-Type': 'application/json',
    'x-secret-key': XSecretKey,
    'X-Api-App-Id': XApiAppId
  }
})