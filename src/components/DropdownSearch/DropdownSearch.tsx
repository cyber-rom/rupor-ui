import React, {
  ChangeEvent,
  useState,
  useEffect,
  KeyboardEvent,
} from 'react';
import { Input } from '../Input';
import { DropdownSearchProps } from './DropdownSearch.types';
import {
  SearchDropdown,
  SearchWrapper,
  StyledCrossIcon,
  StyledMicrophoneIcon,
  StyledSearchIcon,
} from './DropdownSearch.style';
import useDebounce from '../../hooks/useDebounce';

export const DropdownSearch = (props: DropdownSearchProps) => {
  const [value, setValue] = useState('');
  const {
    dropdownContent,
    queryCallback = () => { },
    inputProps,
    onChange = () => { },
    onKeyDown = () => { },
    debounceTime = 200,
  } = props;

  const {
    debouncedFunc: debouncedQueryCallback,
    stop: debouncedQueryStop,
    force: debouncedQueryForce,
  } = useDebounce(queryCallback, debounceTime);

  useEffect(() => {
    if (value) {
      debouncedQueryCallback(value);
    } else {
      debouncedQueryStop();
    }
  }, [value, debouncedQueryStop, debouncedQueryCallback]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event);
    setValue(event.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    onKeyDown(event);
    if (event.key === 'Enter') {
      debouncedQueryStop();
      debouncedQueryForce(value);
    }
  };

  // TO-DO Обернуть иконки в BaseButton
  const postfixIcons = (
    <>
      {value.length ? <StyledCrossIcon onClick={() => setValue('')} /> : null}
      <StyledMicrophoneIcon />
    </>
  );

  return (
    <SearchWrapper>
      <Input
        variant="thin"
        afix={<StyledSearchIcon />}
        postfix={postfixIcons}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...inputProps}
      />
      <SearchDropdown>
        {dropdownContent}
      </SearchDropdown>
    </SearchWrapper>
  );
};
