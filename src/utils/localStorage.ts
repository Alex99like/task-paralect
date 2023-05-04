import { IRequestAuth } from "../store/root/types"

export const getLocalStorage = (key: string): IRequestAuth | null => {
  const user = localStorage.getItem(key)
  return user ? JSON.parse(user) : null
}