export interface Font {
  [ key: string ]: string
}

/* Размер шрифтов */
export const sizes = {
  /* Heading */

  size1: {
    fontSize: '40px',
    lineHeight: '48px',
    fontWeight: 700,
  },
  size2: {
    fontSize: '32px',
    lineHeight: '32px',
    fontWeight: 700,
  },
  size3: {
    fontSize: '20px',
    lineHeight: '28px',
    fontWeight: 700,
  },
  size4: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 700,
  },

  /* Paragraph */

  size5: {
    fontSize: '24px',
    lineHeight: '36px',
    fontWeight: 400,
  },
  size6: {
    fontSize: '20px',
    linelineHeight: '32px',
    fontWeight: 400,
  },
  size7: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 400,
  },
  size8: {
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 400,
  },
  size9: {
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: 400,
  },

  /* Links */

  size10: {
    fontSize: '20px',
    lineHeight: '28px',
    fontWeight: 600,
  },
  size11: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 600,
  },
  size12: {
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: 600,
  },
  size13: {
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 600,
  },
  size14: {
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: 600,
  },
  size15: {
    fontSize: '8px',
    lineHeight: '12px',
    fontWeight: 600,
  },
  size16: {
    fontSize: '10px',
    lineHeight: '12px',
    fontWeight: 600,
  },
};

export const fonts: Record<string, any> = {
  fontH0: { ...sizes.size4 },
  fontH1: { ...sizes.size3 },
  fontH2: { ...sizes.size2 },
  fontH3: { ...sizes.size1 },
  fontLabel: { ...sizes.size8 },
  fontLabelSmall: { ...sizes.size15 },
  fontLabelPrimary: { ...sizes.size12 },
  fontLabelSecondary: { ...sizes.size13 },
  fontLabelPrimaryBtn: { ...sizes.size13 },
  fontLabelSmallBtn: { ...sizes.size16 },
};

export const typography = {
  fontFamily: '"Inter", sans-serif, sans-serif',
  fontFamilyHeading: '"Inter", sans-serif, sans-serif',
  ...fonts,
};
