import { IRequestAuth } from "../store/root/types";
import { getLocalStorage } from "../utils/localStorage";
import { XSecretKey, XApiAppId, keyStorageUser } from "./consts";

export const createHeaders = () => {
  const token = getLocalStorage<IRequestAuth>(keyStorageUser)?.access_token

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'x-secret-key': XSecretKey,
    'X-Api-App-Id': XApiAppId
  }

  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  return { headers }
}