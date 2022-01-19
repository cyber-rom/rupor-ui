import styled from 'styled-components';
import { UserAvatar } from '../UserAvatar';
import { vars } from '../../styles';
import { UserAvatarProps } from '../UserAvatar/UserAvatar.types';

export const ChannelLabelWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ChannelLabelAvatar = styled(UserAvatar)<UserAvatarProps>`
  margin-right: ${vars.x6};
`;

export const ChannelTitle = styled.span`
  font-family: ${vars.fontFamily};
  font-weight: normal; // TO-DO изменить на переменные
  font-size: 14px;  // TO-DO изменить на переменные
  line-height: 20px; // TO-DO изменить на переменные
  color: ${vars.colorTextLight}
`;
