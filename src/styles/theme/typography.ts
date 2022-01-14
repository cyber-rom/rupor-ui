export interface Font {
  bold: number;
  height: string;
  size: string;
}

/* Размер шрифтов */
export const sizes = {
  /* Heading */

  size1: {
    size: '40px',
    height: '48px',
    bold: 700,
  },
  size2: {
    size: '32px',
    height: '32px',
    bold: 700,
  },
  size3: {
    size: '20px',
    height: '28px',
    bold: 700,
  },
  size4: {
    size: '16px',
    height: '24px',
    bold: 700,
  },

  /* Paragraph */

  size5: {
    size: '24px',
    height: '36px',
    bold: 400,
  },
  size6: {
    size: '20px',
    height: '32px',
    bold: 400,
  },
  size7: {
    size: '16px',
    height: '24px',
    bold: 400,
  },
  size8: {
    size: '14px',
    height: '20px',
    bold: 400,
  },
  size9: {
    size: '12px',
    height: '16px',
    bold: 400,
  },

  /* Links */

  size10: {
    size: '20px',
    height: '28px',
    bold: 600,
  },
  size11: {
    size: '16px',
    height: '24px',
    bold: 600,
  },
  size12: {
    size: '14px',
    height: '20px',
    bold: 600,
  },
  size13: {
    size: '12px',
    height: '16px',
    bold: 600,
  },
};

export const fonts: Record<string, Font> = {
  fontH0: { ...sizes.size4 },
  fontH1: { ...sizes.size3 },
  fontH2: { ...sizes.size2 },
  fontH3: { ...sizes.size1 },
};

export const typography = {
  fontFamily: '"Inter", sans-serif, sans-serif',
  fontFamilyHeading: '"Inter", sans-serif, sans-serif',
  ...fonts,
};
