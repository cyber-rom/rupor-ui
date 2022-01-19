import React from 'react';

export interface SvgComponentProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
}

export interface IconProps extends Omit<SvgComponentProps, 'width' | 'height'> {
  size?: 8 | 16 | 24;
}

export function createIcon(
  name: string,
  svg: React.ReactElement<SvgComponentProps>,
): React.FC<IconProps> {
  const IconComponent = (props: IconProps) => {
    const { size = 24, viewBox = svg.props.viewBox, ...other } = props;
    return React.cloneElement(svg, {
      height: size,
      width: size,
      viewBox: viewBox || '0 0 24 24',
      ...other,
    });
  };

  IconComponent.displayName = `Icon(${name})`;

  return IconComponent;
}
