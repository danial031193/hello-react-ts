import { useEffect } from 'react';

/**
 * Hook that alerts clicks outside of the passed ref(s)
 */
const useOutsideHandler = (ref: any | any[], callback: (event?: any) => void): void => {
  useEffect(() => {
    const refs = Array.isArray(ref) ? ref : [ref];
    const handleClickOutside = (event: { target: any }): void => {
      for (const r of refs) {
        if (r?.current?.contains?.(event.target)) {
          return;
        }
      }

      // Click outside passed refs
      callback(event);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return (): void => document.removeEventListener('mousedown', handleClickOutside);
  }, [callback, ref]);
};

export default useOutsideHandler;
