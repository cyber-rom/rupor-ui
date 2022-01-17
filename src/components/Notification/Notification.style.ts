import styled from 'styled-components';
import { vars } from '../../styles';
import { spacing } from '../../styles/theme/spacing';
import { NotificationIconType } from './Notification.types';

export const NotificationR = styled.span<NotificationIconType>`
  position: relative;

  ${({ isNotified }) => (
    isNotified
      ? `&::before {
      content: '';
      position: absolute;
      top: ${-1 * spacing.x3}px;
      right: ${-1 * spacing.x1}px;
      width: ${spacing.x1}px;
      height: ${spacing.x1}px;
      background-color: ${vars.colorPrimaryDefault};
      border-radius: 50%;}` : '')
}
  
`;
