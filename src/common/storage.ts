export const getLocalstorage = (key: string) => {
  const list: any = localStorage.getItem(key)

  if (JSON.parse(list)) {
    return list
  }

  return null
}

export const setLocalstorage = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data))
  return true
}

export const detLocalstorage = (key: string) => {
  localStorage.removeItem(key)
  return true
}
