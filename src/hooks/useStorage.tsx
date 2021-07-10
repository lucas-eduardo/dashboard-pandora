const useStorage = () => {
  const prefix = '@Pandora'

  const setStorage = (key: string, value: string) => {
    localStorage.setItem(`${prefix}:${key}`, value)
  }

  const getStorage = (key: string) => {
    return localStorage.getItem(`${prefix}:${key}`)
  }

  const removeKeyStorage = (key: string) => {
    localStorage.removeItem(`${prefix}:${key}`)
  }

  return {
    setStorage,
    getStorage,
    removeKeyStorage,
  }
}

export { useStorage }
