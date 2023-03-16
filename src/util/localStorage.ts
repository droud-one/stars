import { useEffect, useState } from 'react';

type ValueType = Function | number | boolean | string | object | Array<any>;
type LSResturnType = [ ValueType, (value: ValueType) => void ];

const useLocalStorage = (key: string, initialValue: ValueType): LSResturnType => {
  const [storedValue, setStoredValue] = useState(initialValue);

  const setValue = (value: ValueType) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);

      if(!item) {
        setStoredValue(initialValue);
        window.localStorage.setItem(key, JSON.stringify(initialValue));
      } else setStoredValue(item);
    } catch (error) {
      console.error(error);

      return setStoredValue(initialValue);
    }
  }, []);
  
  return [storedValue, setValue]
}

export default useLocalStorage;