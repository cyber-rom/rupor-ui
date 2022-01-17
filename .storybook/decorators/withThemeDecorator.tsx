import React from 'react';
import { Story } from '@storybook/react';
import styled from "styled-components";
import { rootVars } from '../../src';

export const ThemeContainer = styled.div(rootVars, `color: #fff`);

export const withThemeDecorator = (Story: Story) => {
    return (
        <ThemeContainer>
            <Story />
        </ThemeContainer>
    );
};