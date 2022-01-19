import { InputTypes } from './Input.types';

// Наследуем все свойства типа InputTypes, кроме тех, которые перечислены в omit

export type CustomInputTypes = Omit<InputTypes, 'error' | 'approve' | 'label' | 'isDisabled'>;
