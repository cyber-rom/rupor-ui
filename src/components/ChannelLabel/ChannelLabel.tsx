import React from 'react';
import { Sizes } from '../../types/enums';
import { ChannelLabelAvatar, ChannelLabelWrapper, ChannelTitle } from './ChannelLabel.style';
import { ChannelLabelProps } from './ChannelLabel.types';

export const ChannelLabel = (props: ChannelLabelProps) => {
  const {
    label, userAvatarProps, htmlSpanProps, className,
  } = props;

  return (
    <ChannelLabelWrapper className={className}>
      <ChannelLabelAvatar size={Sizes.xs} {...userAvatarProps} />
      <ChannelTitle {...htmlSpanProps}>{label}</ChannelTitle>
    </ChannelLabelWrapper>
  );
};
