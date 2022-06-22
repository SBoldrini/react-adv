import { useEffect, useRef, useState } from 'react';
import { Product, onChangeArgs, InitialValues } from '../interfaces/interfaces';


interface Props {
  initialValues?: InitialValues;
  product: Product;
  value?: number;
  onChange?: (args: onChangeArgs) => void;
}


export const useProduct = ({product, onChange, value= 0, initialValues}: Props) => {

  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);


  const increaseBy = (value:number) => {
    let newValue = Math.max(counter + value, 0);

    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues?.maxCount);
    }
    
    setCounter(newValue);    

    onChange && onChange({count: newValue, product});
  }

  const reset = () => {
    setCounter(initialValues?.count || value);
  }
  
  
  useEffect(() => {
    if (isMounted.current) {
      setCounter(value)
    }
  }, [value]);

  // useEffect(() => {
  //   isMounted.current = true;
  // }, []);
  


  // useEffect(() => {
  //   if (!isMounted.current) return;
  //   setCounter(value);
  // }, [value]);

  // useEffect(() => {
  //   return () => {
  //     isMounted.current = true;
  //   }
  // }, []);
   

  return {
    counter,
    isMaxCountReached: initialValues?.count === initialValues?.maxCount ? true : false,
    maxCount: initialValues?.maxCount,

    increaseBy, 
    reset
  }
}
