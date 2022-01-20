import React, { FC } from 'react';
import { StyledSearchItem, StyledText, StyledSpan } from './SearchItem.style';
import { SearchItemTypes } from './SearchItem.types';
import { Sizes } from '../../types/enums';
import { UserAvatar } from '../UserAvatar';
import { TopRightArrow } from '../../assets/icons';

export const SearchItem: FC<SearchItemTypes> = ({
  searchText, predictText, src, ...otherProps
}) => {
  return (
    <StyledSearchItem {...otherProps}>
      <UserAvatar
        src={src}
        size={Sizes.xs}
      />
      <StyledText>
        {searchText}
        <StyledSpan>{predictText}</StyledSpan>
      </StyledText>
      <TopRightArrow />
    </StyledSearchItem>
  );
};
