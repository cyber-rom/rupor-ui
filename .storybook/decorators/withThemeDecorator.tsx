import React from 'react';
import { Story } from '@storybook/react';
import styled, { css, createGlobalStyle } from "styled-components";
import { rootVars, vars } from '../../src';
import { getAssetUrl } from '../../src/utils/storybook.utils';

const FontStyles = createGlobalStyle`
  
  @font-face {
    font-family: "Inter";
    font-weight: bold;
    src: url('${getAssetUrl('/storybook-assets/Inter-Bold.woff2')}') format('woff2');
  }

  @font-face {
    font-family: "Inter";
    font-weight: bold;
    src: url('${getAssetUrl('/storybook-assets/Inter-SemiBold.woff2')}') format('woff2');
  }

  @font-face {
    font-family: "Inter";
    font-weight: normal;
    src: url('${getAssetUrl('/storybook-assets/Inter-Regular.woff2')}') format('woff2');
  }
`;


export const ThemeContainer = styled.div({
  ...rootVars,
  color: '#fff',
  fontFamily: '"Inter", sans-serif, sans-serif',

});

export const withThemeDecorator = (Story: Story) => {
    return (
        <ThemeContainer>
          <FontStyles/>
          <Story />
        </ThemeContainer>
    );
};