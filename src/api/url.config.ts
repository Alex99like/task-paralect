import { IRequestAuth } from "../store/root/types";
import { getLocalStorage } from "../utils/localStorage";
import { XSecretKey, XApiAppId, keyStorageUser } from "./consts";

export const createHeaders = () => ({
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getLocalStorage<IRequestAuth>(keyStorageUser)?.access_token}`,
    'x-secret-key': XSecretKey,
    'X-Api-App-Id': XApiAppId
  }
})