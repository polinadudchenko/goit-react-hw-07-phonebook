import { useEffect, useState} from 'react';
import { getDataFromLocalStorage } from '../helpers-local-storage'
import { writeDataToLocalStorage } from '../helpers-local-storage'

export const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return getDataFromLocalStorage(key) ?? defaultValue
  })

  useEffect(() => {
    writeDataToLocalStorage(key, state)
  }, [key, state])

  return [state, setState]
}
