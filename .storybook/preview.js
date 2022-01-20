import { withThemeDecorator } from "./decorators/withThemeDecorator";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  /* Темная и светлая тема фона для всех Story */
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#333333',
      },
      {
        name: 'light',
        value: '#fff',
      },
    ],
  },
}

export const decorators = [withThemeDecorator];
