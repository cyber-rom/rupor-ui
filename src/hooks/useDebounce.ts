import { useRef, useEffect, useCallback } from 'react';

const useDebounce = <F extends (...args: any) => any>(
  func: F,
  waitFor: number,
): {
  debouncedFunc: ((...args: Parameters<F>) => { debouncedFunc: ReturnType<F> })
  stop: () => void
  force: (...args: Parameters<F>) => void
} => {
  const timer = useRef<NodeJS.Timer | null>();
  const savedFunc = useRef<F | null>(func);

  useEffect(() => {
    savedFunc.current = func;
  }, [waitFor]);

  const stop = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  }, []);

  const force = useCallback((...args: any) => {
    savedFunc.current?.(...args);
  }, []);

  const debouncedFunc = useCallback((...args: any) => {
    stop();

    timer.current = setTimeout(() => savedFunc.current?.(...args), waitFor);
  }, [stop]) as (...args: Parameters<F>) => ReturnType<F>;

  return {
    debouncedFunc,
    stop,
    force,
  };
};

export default useDebounce;
