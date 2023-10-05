export const getLocalstorage = (key: string) => {
  const list: any = localStorage.getItem(`@DTMONEY-${key}`)

  return JSON.parse(list ?? null)
}

export const setLocalstorage = (key: string, data: any) => {
  localStorage.setItem(`@DTMONEY-${key}`, JSON.stringify(data))
  return true
}

export const detLocalstorage = (key: string) => {
  localStorage.removeItem(`@DTMONEY-${key}`)
  return true
}
