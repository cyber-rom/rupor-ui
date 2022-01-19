import React from 'react';
import { Link } from './LinkBase.style';
import { LinkBaseProps } from './LinkBase.type';

function getDefaultRel({ external }: LinkBaseProps) {
  return external ? 'noopener noreferrer nofollow' : undefined;
}

function getDefaultTarget({ external }: LinkBaseProps) {
  return external ? '_blank' : undefined;
}

export const LinkBase = (props: LinkBaseProps) => {
  const {
    rel = getDefaultRel(props),
    target = getDefaultTarget(props),
    ...delegated
  } = props;

  return (
    <Link
      target={target}
      rel={rel}
      {...delegated}
    />
  );
};
