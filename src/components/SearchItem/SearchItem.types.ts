import { UserAvatarProps } from '../UserAvatar/UserAvatar.types';

export interface SearchItemTypes extends UserAvatarProps {
  searchText?: string;
  predictText?: string;
  href?: string;
}
