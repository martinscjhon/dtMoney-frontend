export const setStorage = (key: string, data: any) => {
  const insertStorage = localStorage.setItem(key, JSON.stringify(data))
  return insertStorage
}

export const getStorage = (key: string) => {
  const searchStorage = localStorage.getItem(key)

  if (searchStorage) return searchStorage

  return null
}

export const delStorage = (key: string) => {
  const remove = localStorage.removeItem(key)
  return remove
}
