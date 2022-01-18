import React, { FC } from 'react';
import { PaperWrapper } from './Paper.style';
import { PaperProps } from './Paper.types';

export const Paper: FC<PaperProps> = (props) => <PaperWrapper {...props} />;
