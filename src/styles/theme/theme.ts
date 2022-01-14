import { paramCase } from 'param-case';
import { spacing } from './spacing';
import { typography } from './typography';
import { tone } from './opasity';
import { colors } from './color';

export const theme = {
  ...spacing,
  ...typography,
  ...tone,
  ...colors,
} as const;

export type Theme = typeof theme;

/* Для использования в jss-стилях */
type CssVars = Record<keyof Theme, string>;

/* Для определения переменных темы в :root */
type CssRootVars = Record<string, string | number>;

function makeVariableName(name: string) {
  return `--rupor-${paramCase(name)}`;
}

export const { vars, rootVars } = Object.entries(theme).reduce<{
  rootVars: CssRootVars;
  vars: CssVars;
}>(
  (acc, [name, defaultValue]) => {
    const varName = makeVariableName(name);
    return {
      vars: { ...acc.vars, [name]: `var(${varName})` },
      rootVars: { ...acc.rootVars, [varName]: defaultValue },
    };
  },
  {
    vars: {} as CssVars,
    rootVars: {} as CssRootVars,
  },
);
