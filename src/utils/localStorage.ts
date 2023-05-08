export const getLocalStorage = <T>(key: string): T | null => {
  const user = localStorage.getItem(key)
  return user ? JSON.parse(user) : null
}